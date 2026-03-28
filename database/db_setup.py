import psycopg2
import sys

# 1. CONFIGURACIÓN BASADA EN TU FOTO (4a30...)
DB_CONFIG = {
    "dbname": "neuralflow",
    "user": "postgres",
    "password": "postgres", 
    "host": "127.0.0.1",
    "port": "5432"
}

# 2. SQL INTEGRADO (Sin archivos externos para evitar errores de Windows)
SQL_COMMANDS = """
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS tokenomics_ledger (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    euros_received DECIMAL(12, 2) NOT NULL,
    payment_provider TEXT DEFAULT 'stripe',
    total_flow_minted BIGINT NOT NULL,
    user_allocation BIGINT NOT NULL,
    treasury_allocation BIGINT NOT NULL,
    burn_allocation BIGINT NOT NULL,
    blockchain_tx_hash TEXT,
    status TEXT DEFAULT 'pending',
    user_id TEXT NOT NULL,
    exchange_rate INT DEFAULT 1000
);

CREATE OR REPLACE VIEW v_empire_stats AS
SELECT 
    SUM(euros_received) as total_revenue_eur,
    SUM(burn_allocation) as total_flow_burned,
    SUM(treasury_allocation) as total_flow_in_treasury,
    COUNT(id) as total_transactions
FROM tokenomics_ledger
WHERE status = 'confirmed';

CREATE INDEX IF NOT EXISTS idx_ledger_user ON tokenomics_ledger(user_id);
CREATE INDEX IF NOT EXISTS idx_ledger_tx_hash ON tokenomics_ledger(blockchain_tx_hash);
"""

def setup_database():
    print("⚔️  Iniciando operacion de limpieza y construccion...")
    conn = None
    try:
        # Intentamos conectar
        conn = psycopg2.connect(**DB_CONFIG)
        cur = conn.cursor()
        
        # Ejecutamos el SQL
        cur.execute(SQL_COMMANDS)
        conn.commit()
        
        print("\n" + "="*40)
        print("✅ ¡VICTORIA TOTAL! Tablas creadas con exito.")
        print("="*40)
        
        cur.close()
    except Exception as e:
        print("\n" + "!"*40)
        # Limpiamos el error de caracteres raros para poder leerlo
        clean_error = str(e).encode('ascii', 'ignore').decode('ascii')
        print(f"❌ ERROR DETECTADO: {clean_error}")
        print("!"*40)
        
        if "password authentication failed" in clean_error.lower():
            print("💡 PIEZA CLAVE: La contrasena 'postgres' no es correcta para este contenedor.")
        elif "is the server running" in clean_error.lower():
            print("💡 PIEZA CLAVE: El contenedor no responde en el puerto 5432. Revisa Docker Desktop.")
            
    finally:
        if conn:
            conn.close()

if __name__ == "__main__":
    setup_database()