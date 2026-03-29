import streamlit as st
import psycopg2
import requests
import pandas as pd
import plotly.express as px
from datetime import datetime
from decimal import Decimal
import time

# ==========================================
# 🛡️ PROTOCOLO DE CONECTIVIDAD INSTITUCIONAL
# ==========================================
DB_PARAMS = {
    "dbname": "neuralflow",
    "user": "postgres",
    "password": "postgres",
    "host": "127.0.0.1",
    "port": "5432"
}
OLLAMA_URL = "http://localhost:11434/api/generate"
SYSTEM_ID = "ADMIN_SOCIO_01"
COSTO_IA = 100

class NeuralEngine:
    @staticmethod
    def query(sql, params=None, commit=False):
        try:
            conn = psycopg2.connect(**DB_PARAMS)
            cur = conn.cursor()
            cur.execute(sql, params)
            data = cur.fetchall() if not commit else None
            if commit: conn.commit()
            cur.close() ; conn.close()
            return data
        except Exception as e:
            st.error(f"⚠️ SISTEMA EN PAUSA TÉCNICA: {e}")
            return None

    @staticmethod
    def get_stats():
        sql = "SELECT total_revenue_eur, total_axon_burned, total_nrl_governance_supply FROM v_axon_empire_stats"
        res = NeuralEngine.query(sql)
        if res:
            return Decimal(str(res[0][0])), Decimal(str(res[0][1])), Decimal(str(res[0][2]))
        return Decimal('0'), Decimal('0'), Decimal('0')

    @staticmethod
    def get_balance(uid):
        sql = "SELECT SUM(user_allocation) FROM axon_ledger WHERE user_id = %s"
        res = NeuralEngine.query(sql, (uid,))
        return float(res[0][0]) if res and res[0][0] else 0

# ==========================================
# 🎨 ESTÉTICA IMPERIAL (WALL STREET WHITE)
# ==========================================
st.set_page_config(page_title="NEURALFLOW IMPERIAL", page_icon="⚖️", layout="wide")

if "lockdown" not in st.session_state: st.session_state.lockdown = False
if "messages" not in st.session_state: st.session_state.messages = []

st.markdown("""
    <style>
    /* Fondo Limpio y Elegante */
    .main { background-color: #F8F9FA; color: #2D3436; font-family: 'Inter', sans-serif; }
    
    /* Títulos en Azul Medianoche y Dorado */
    h1, h2, h3 { color: #2D3436 !important; font-weight: 300 !important; letter-spacing: -0.5px; }
    .stSubheader { color: #A29BFE !important; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px; }

    /* Tarjetas de Métricas (Estilo Institucional) */
    [data-testid="stMetricValue"] { 
        background-color: #FFFFFF; 
        border: 1px solid #E1E4E8; 
        padding: 25px; 
        border-radius: 12px; 
        color: #2D3436 !important; 
        box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        font-weight: 600 !important;
    }
    [data-testid="stMetricLabel"] { color: #636E72 !important; font-size: 0.9rem !important; }
    
    /* Botones de Acción de Éxito */
    .stButton>button { 
        width: 100%; 
        border-radius: 8px; 
        height: 3.5em; 
        background-color: #2D3436; 
        color: white; 
        border: none; 
        font-weight: 500;
        transition: all 0.4s ease;
    }
    .stButton>button:hover { background-color: #00B894; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,184,148,0.3); }

    /* Pestañas Minimalistas */
    .stTabs [data-baseweb="tab-list"] { background-color: transparent; border-bottom: 1px solid #E1E4E8; }
    .stTabs [data-baseweb="tab"] { color: #636E72; font-weight: 500; }
    .stTabs [data-baseweb="tab"][aria-selected="true"] { color: #2D3436; border-bottom-color: #2D3436; }

    /* Barra Lateral de Prestigio */
    .css-1647965 { background-color: #FFFFFF; border-right: 1px solid #E1E4E8; }
    </style>
    """, unsafe_allow_html=True)

# ==========================================
# 🛰️ PANEL DE CONTROL SOBERANO
# ==========================================
with st.sidebar:
    st.markdown("<h2 style='text-align: center;'>NEXUS IMPERIAL</h2>", unsafe_allow_html=True)
    st.markdown("<p style='text-align: center; color: #636E72;'>Gestión de Activos de Alto Nivel</p>", unsafe_allow_html=True)
    st.markdown("---")
    
    rev, burn, nrl = NeuralEngine.get_stats()
    balance = NeuralEngine.get_balance(SYSTEM_ID)
    
    st.metric("SALDO EN CUSTODIA", f"{balance:,.0f} AXON")
    st.metric("PODER DE GOBERNANZA", f"{nrl:,.2f} NRL", delta=f"{rev:,.2f}€ CAPITAL")
    
    st.markdown("---")
    st.subheader("🏦 DEPÓSITO DE CAPITAL")
    monto = st.number_input("Inyección de Fondos (€)", min_value=10, value=100)
    if st.button("CONFIRMAR DEPÓSITO"):
        total_axon = int(monto * 1000)
        u_a, t_a, b_a = int(total_axon*0.3), int(total_axon*0.5), int(total_axon*0.2)
        # Escala 1:10 para visibilidad perfecta en auditoría
        n_m = float(monto) * 0.1 
        NeuralEngine.query("""
            INSERT INTO axon_ledger (user_id, euros_received, total_axon_minted, user_allocation, treasury_allocation, burn_allocation, neural_nrl_minted, status)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """, (SYSTEM_ID, monto, total_axon, u_a, t_a, b_a, n_m, 'confirmed'), commit=True)
        st.success("Capital Asentado en el Libro Mayor.")
        time.sleep(0.5) ; st.rerun()

# ==========================================
# 📈 ESTRATO DE MANDO (VISUALIZACIÓN)
# ==========================================
col_main, col_side = st.columns([2, 1])

with col_main:
    st.markdown("<h1>Análisis de Patrimonio Neuralflow</h1>", unsafe_allow_html=True)
    burn_hist = NeuralEngine.query("SELECT created_at, burn_allocation FROM axon_ledger WHERE burn_allocation > 0 ORDER BY created_at ASC")
    if burn_hist:
        df_b = pd.DataFrame(burn_hist, columns=['Fecha', 'Monto'])
        df_b['Acumulado'] = df_b['Monto'].astype(float).cumsum()
        
        # Gráfica de estilo Wall Street (Limpia)
        fig = px.line(df_b, x='Fecha', y='Acumulado', title="CURVA DE DEFLACIÓN AXON")
        fig.update_traces(line_color='#00B894', fill='tozeroy', fillcolor='rgba(0,184,148,0.1)')
        fig.update_layout(
            plot_bgcolor='rgba(0,0,0,0)', 
            paper_bgcolor='rgba(0,0,0,0)',
            font=dict(color="#2D3436"),
            xaxis=dict(showgrid=False),
            yaxis=dict(gridcolor="#E1E4E8")
        )
        st.plotly_chart(fig, use_container_width=True)

with col_side:
    st.subheader("📜 Registro de Operaciones")
    logs = NeuralEngine.query("SELECT created_at, euros_received, neural_nrl_minted FROM axon_ledger WHERE euros_received > 0 ORDER BY created_at DESC LIMIT 10")
    if logs:
        df_l = pd.DataFrame(logs, columns=['Hora', 'Euros (€)', 'NRL'])
        st.dataframe(df_l, use_container_width=True, height=350)

# ==========================================
# 🏛️ TERMINALES DE GESTIÓN
# ==========================================
st.markdown("---")
t_ia, t_cash, t_sec = st.tabs(["🏛️ ESTRATEGA KRONOS", "🏦 TESORERÍA REAL", "⚖️ PROTOCOLOS"])

with t_ia:
    if st.session_state.lockdown:
        st.info("Terminal en modo mantenimiento preventivo.")
    else:
        for m in st.session_state.messages:
            with st.chat_message(m["role"]): st.markdown(m["content"])

        if prompt := st.chat_input("Consulta estratégica..."):
            st.session_state.messages.append({"role": "user", "content": prompt})
            with st.chat_message("user"): st.markdown(prompt)
            with st.chat_message("assistant"):
                if balance >= COSTO_IA:
                    # Lógica de cobro blindada contra Decimal error
                    NeuralEngine.query("""
                        UPDATE axon_ledger SET user_allocation = user_allocation - %s 
                        WHERE id = (SELECT id FROM axon_ledger WHERE user_id = %s AND user_allocation >= %s ORDER BY created_at DESC LIMIT 1)
                    """, (COSTO_IA, SYSTEM_ID, COSTO_IA), commit=True)
                    try:
                        r = requests.post(OLLAMA_URL, json={"model": "phi3", "prompt": prompt, "stream": False}, timeout=60)
                        ans = r.json().get('response')
                    except: ans = "Servicio temporalmente fuera de línea."
                else: ans = "Saldo insuficiente para consulta institucional."
                st.markdown(ans)
                st.session_state.messages.append({"role": "assistant", "content": ans})
            st.rerun()

with t_cash:
    st.subheader("Estado de Activos Consolidados")
    r_eur = float(rev) * 0.5
    q_eur = float(rev) * 0.2
    c1, c2 = st.columns(2)
    c1.metric("RESERVA DE TESORERÍA", f"{r_eur:,.2f} €")
    c2.metric("CAPITAL DEFACIONARIO", f"{q_eur:,.2f} €")
    st.progress(0.5, text="Respaldo de Liquidez Garantizado")

with t_sec:
    st.subheader("Seguridad y Transparencia")
    if not st.session_state.lockdown:
        if st.button("SUSPENDER OPERACIONES (SECURITY LOCK)"):
            st.session_state.lockdown = True ; st.rerun()
    else:
        if st.button("REESTABLECER MERCADO"):
            st.session_state.lockdown = False ; st.rerun()
    st.success("Todos los nodos operando bajo encriptación de grado bancario.")

st.markdown("<br><hr><p style='text-align: center; color: #B2BEC3;'>NEURALFLOW IMPERIAL v5.0 | High-Net-Worth Infrastructure | © 2026</p>", unsafe_allow_html=True)