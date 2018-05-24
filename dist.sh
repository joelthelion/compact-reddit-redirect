#!/bin/bash
# Prepare our extension for release
set +e

rm -f compact_redirect.zip
zip -r compact_redirect.zip $(git ls-files | grep -v dist.sh)
