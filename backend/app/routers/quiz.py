from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from app.models import QuizAttempt, Technique
from app.schemas import AttemptRequest, AttemptResponse, TechniqueStats

router = APIRouter(prefix="/quiz", tags=["quiz"])


@router.post("/attempt", response_model=AttemptResponse)
async def save_attempt(payload: AttemptRequest, db: AsyncSession = Depends(get_db)):
    res = await db.execute(select(Technique).where(Technique.id == payload.technique_id))
    if res.scalar_one_or_none() is None:
        raise HTTPException(status_code=404, detail="Technique not found")

    attempt = QuizAttempt(
        technique_id=payload.technique_id,
        user_answer=payload.user_answer,
        is_correct=payload.is_correct,
    )
    db.add(attempt)
    try:
        await db.commit()
        await db.refresh(attempt)
    except Exception:
        await db.rollback()
        raise HTTPException(status_code=500, detail='Failed to save attempt')
    return attempt


@router.get('/stats', response_model=list[TechniqueStats])
async def get_stats(db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(
            QuizAttempt.technique_id,
            Technique.name,
            func.count().filter(QuizAttempt.is_correct.is_(True)).label("correct"),
            func.count().filter(QuizAttempt.is_correct.is_(False)).label("incorrect"),
            func.count().label("total"),
        )
        .join(Technique, Technique.id == QuizAttempt.technique_id)
        .group_by(QuizAttempt.technique_id, Technique.name)
        .order_by(func.count().filter(QuizAttempt.is_correct.is_(False)).desc())
    )
    rows = result.all()
    stats = []
    for row in rows:
        stats.append(TechniqueStats(
            technique_id=row.technique_id,
            name=row.name,
            correct=row.correct,
            incorrect=row.incorrect,
            total=row.total,
        ))
    return stats
