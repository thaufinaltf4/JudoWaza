from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from app.models import Technique
from app.schemas import TechniqueResponse

router = APIRouter(prefix="/techniques", tags=["techniques"])


@router.get('/', response_model=list[TechniqueResponse])
async def list_techniques(db: AsyncSession = Depends(get_db)):
    try:
        result = await db.execute(select(Technique).order_by(Technique.id))
        return result.scalars().all()
    except Exception:
        raise HTTPException(status_code=500, detail="Failed to fetch techniques")

@router.get("/{technique_id}", response_model=TechniqueResponse)
async def get_technique(technique_id: int, db: AsyncSession = Depends(get_db)):
    if technique_id <= 0:
        raise HTTPException(status_code=400, detail='Invalid technique ID')
    result = await db.execute(select(Technique).where(Technique.id == technique_id))
    t = result.scalar_one_or_none()
    if t is None:
        raise HTTPException(status_code=404, detail="Technique not found")
    return t
