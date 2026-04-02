# Legacy builder base image retained for repository maintenance tasks.
# It is not the public INTERLIS IDE runtime container and is not published
# by the product release workflow. The official browser runtime image is
# defined in browser.Dockerfile and published by .github/workflows/docker.yml.

# We want to support as many Debian versions as possible.
# Therefore, use the oldest Debian release that still provides the desired Node.js version.
FROM node:22.15-bullseye
RUN apt-get update && apt-get install -y libxkbfile-dev libsecret-1-dev python3
