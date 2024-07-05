#!/bin/sh
set -e

trivy config \
    --format table \
    --exit-code 1 \
    --severity HIGH,CRITICAL \
    Dockerfile.build && \
trivy config \
    --format table \
    --exit-code 1 \
    --severity HIGH,CRITICAL \
    Dockerfile