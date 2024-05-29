# See ./scripts/docker-build for APP_NAME & BASE_IMAGE setting
ARG APP_NAME
ARG BASE_IMAGE=nginx:stable-alpine
FROM ${BASE_IMAGE} as build

FROM nginx:stable-alpine
ENV HTML_DIR=/usr/share/nginx/html/${APP_NAME}
COPY --from=build /app/build ${HTML_DIR}
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR ${HTML_DIR}
COPY docker-entrypoint.sh .
# This will be generated in the pipeline.
# Comment out if building locally
COPY instance.sbom.json /opt/telicent/sbom/instance.sbom.json
RUN apk add --no-cache bash
RUN chmod +x docker-entrypoint.sh
EXPOSE 80

ENTRYPOINT [ "./docker-entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]
