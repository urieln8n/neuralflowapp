from fastapi import FastAPI, HTTPException, Security, Depends
from fastapi.security.api_key import APIKeyHeader
from pydantic import BaseModel
import psycopg2
import os
import time

# Configuración del Cerrojo
API_KEY = "KRONOS_MASTER_2026"
API_KEY_NAME = "access_token"
api_key_header = APIKeyHeader(name=API_KEY_NAME, auto_error=False)

app = FastAPI(
    title="KRONOS STRATUM - CORE ENGINE",
    description="Protocolo de Inteligencia Soberana - Nivel Institucional",
    version="1.0.0-GOLD"
)

# Guardia de Seguridad (Función de validación)
async def get_api_key(header_value: str = Depends(api_key_header)):
    if header_value == API_KEY:
        return header_value
    raise HTTPException(status_code=403, detail="Acceso Denegado: Token de Kronos inválido")

# --- CONEXIÓN DB ---
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:postgres@postgres:5432/neuralflow")

def get_db_connection():
    return psycopg2.connect(DATABASE_URL)

@app.on_event("startup")
def startup_event():
    while True:
        try:
            conn = get_db_connection()
            cur = conn.cursor()
            cur.execute('''
                CREATE TABLE IF NOT EXISTS transactions (
                    id SERIAL PRIMARY KEY,
                    user_id VARCHAR(50),
                    tokens_used INTEGER,
                    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            ''')
            conn.commit()
            cur.close()
            conn.close()
            break
        except Exception:
            time.sleep(2)

class UsageRequest(BaseModel):
    user_id: str
    tokens: int

# --- RUTAS PROTEGIDAS ---

@app.get("/", tags=["Public"])
def read_root():
    return {"status": "KRONOS_STRATUM_ACTIVE", "security": "Enabled"}

@app.post("/process-tx", dependencies=[Depends(get_api_key)])
def process_tx(req: UsageRequest):
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO transactions (user_id, tokens_used) VALUES (%s, %s)",
            (req.user_id, req.tokens)
        )
        conn.commit()
        cur.close()
        conn.close()
        
        # EL OUTPUT QUE PEDISTE, SOCIO:
        return {
            "status": "SUCCESS",
            "message": "Transacción sellada en Kronos",
            "vault": "Locked",
            "user_id": req.user_id,
            "tokens_recorded": req.tokens
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/view-transactions", dependencies=[Depends(get_api_key)])
def view_transactions():
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("SELECT * FROM transactions ORDER BY timestamp DESC LIMIT 10")
        rows = cur.fetchall()
        cur.close()
        conn.close()
        return {"boveda": rows}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))