#!/bin/bash

./env.sh

mv ./env-config.js $HTML_DIR

exec "$@"
