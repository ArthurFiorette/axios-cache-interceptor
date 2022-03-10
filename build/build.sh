#!/usr/bin/env bash

# This script is used to build the project.
# It is intended to be run from the project's root directory.

echo "\nStarting build...\n"

rm -rf dev/ dist/
mkdir dev/ dist/

echo "Target cleared...\n"

webpack --config build/webpack.config.js &
tsc -p build/tsconfig.types.json &

# Add a simple index.d.ts file to type all dev builds
echo "export * from '../dist/index.d.ts';" | tee dev/index.d.ts > /dev/null &

wait

echo "\nBuild done!"