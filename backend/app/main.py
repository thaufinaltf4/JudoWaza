from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
from app.routers import techniques, quiz
from app.database import SessionLocal

app = FastAPI(title="Judo Library API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://thaufins-judo-library.vercel.app"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(techniques.router, prefix="/api")
app.include_router(quiz.router, prefix="/api")


@app.on_event("startup")
async def check_db():
    try:
        async with SessionLocal() as session:
            await session.execute(text('SELECT 1'))
    except Exception as e:
        print(f"Database connection failed: {e}")


@app.get("/api/health")
async def health():
    return {"status": "ok"}
