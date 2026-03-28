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