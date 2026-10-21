#!/usr/bin/env bash
# Starts the self-hosted Supabase backend (Postgres, Auth, Storage, API gateway...)
# with Docker, WITHOUT its own Studio, so NileBase Studio can run in front of it.
# Meant for a Codespace / VPS with Docker. Demo secrets only: never expose publicly.
set -euo pipefail

cd "$(dirname "$0")/.."
mkdir -p .supabase-stack
cd .supabase-stack

if [ ! -d supabase ]; then
  git clone --depth 1 --filter=blob:none --sparse https://github.com/supabase/supabase
  git -C supabase sparse-checkout set docker
fi

cd supabase/docker
[ -f .env ] || cp .env.example .env

docker compose pull
docker compose up -d --scale studio=0

echo
echo "Backend starting. API gateway: http://localhost:8000"
echo "Now start NileBase Studio in another terminal:"
echo "  pnpm --filter studio run dev:next"
