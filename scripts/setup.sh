#!/bin/bash

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo ""
echo -e "${CYAN}╔══════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║       NeuralFlow AI Automation Platform       ║${NC}"
echo -e "${CYAN}║              Setup Script v1.0                ║${NC}"
echo -e "${CYAN}╚══════════════════════════════════════════════╝${NC}"
echo ""

# Check Node.js
echo -e "${YELLOW}→ Checking Node.js...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}✗ Node.js not found. Please install Node.js 18+ from https://nodejs.org${NC}"
    exit 1
fi

NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${RED}✗ Node.js 18+ required. Current version: $(node --version)${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Node.js $(node --version) found${NC}"

# Check npm
echo -e "${YELLOW}→ Checking npm...${NC}"
if ! command -v npm &> /dev/null; then
    echo -e "${RED}✗ npm not found${NC}"
    exit 1
fi
echo -e "${GREEN}✓ npm $(npm --version) found${NC}"

# Install dependencies
echo ""
echo -e "${YELLOW}→ Installing dependencies...${NC}"
npm install
echo -e "${GREEN}✓ Dependencies installed${NC}"

# Setup environment
echo ""
echo -e "${YELLOW}→ Setting up environment...${NC}"
if [ ! -f .env ]; then
    if [ -f .env.example ]; then
        cp .env.example .env
        echo -e "${GREEN}✓ Created .env from .env.example${NC}"
        echo -e "${YELLOW}  ⚠ Please edit .env with your actual configuration${NC}"
    else
        echo -e "${RED}✗ .env.example not found${NC}"
    fi
else
    echo -e "${GREEN}✓ .env already exists${NC}"
fi

# Database setup
echo ""
echo -e "${YELLOW}→ Setting up database...${NC}"
if [ -z "$DATABASE_URL" ]; then
    echo -e "${YELLOW}  ⚠ DATABASE_URL not set in environment${NC}"
    echo -e "${YELLOW}  Skipping database setup. Configure .env and run:${NC}"
    echo -e "${CYAN}    npx prisma db push${NC}"
else
    npx prisma generate
    npx prisma db push
    echo -e "${GREEN}✓ Database configured${NC}"
fi

# Build info
echo ""
echo -e "${GREEN}╔══════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║           Setup Complete! 🚀                  ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════════════╝${NC}"
echo ""
echo -e "To start the development server:"
echo -e "${CYAN}  npm run dev${NC}"
echo ""
echo -e "To build for production:"
echo -e "${CYAN}  npm run build && npm start${NC}"
echo ""
echo -e "Access the app at: ${CYAN}http://localhost:3000${NC}"
echo -e "Dashboard at: ${CYAN}http://localhost:3000/dashboard${NC}"
echo -e "CRM at: ${CYAN}http://localhost:3000/crm${NC}"
echo ""
