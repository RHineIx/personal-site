#!/usr/bin/env bash
set -euo pipefail

rm -rf docs
npm run build
cp -r dist docs
touch docs/.nojekyll
printf 'GitHub Pages output ready in docs/\n'
