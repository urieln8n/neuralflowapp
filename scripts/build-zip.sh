#!/bin/bash

set -e

CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo ""
echo -e "${CYAN}→ Building ai-automation-platform.zip...${NC}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
PARENT_DIR="$(dirname "$PROJECT_DIR")"
PROJECT_NAME="ai-automation-platform"
ZIP_NAME="ai-automation-platform.zip"

cd "$PARENT_DIR"

# Remove old zip if exists
if [ -f "$ZIP_NAME" ]; then
    rm "$ZIP_NAME"
    echo -e "${YELLOW}→ Removed old zip${NC}"
fi

# Create zip excluding build artifacts and node_modules
zip -r "$ZIP_NAME" "$PROJECT_NAME" \
    --exclude "*/node_modules/*" \
    --exclude "*/.next/*" \
    --exclude "*/.git/*" \
    --exclude "*/dist/*" \
    --exclude "*/build/*" \
    --exclude "*.DS_Store" \
    --exclude "*/__pycache__/*" \
    --exclude "*.pyc"

ZIP_SIZE=$(du -sh "$ZIP_NAME" | cut -f1)
echo ""
echo -e "${GREEN}✓ Created: ${ZIP_NAME} (${ZIP_SIZE})${NC}"
echo -e "${GREEN}  Location: ${PARENT_DIR}/${ZIP_NAME}${NC}"
echo ""
