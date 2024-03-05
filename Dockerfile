FROM mcr.microsoft.com/playwright:v1.42.1-jammy

ENV CI=true

COPY features/  /app/features
COPY features_steps/  /app/features_steps
COPY pages/  /app/pages
COPY support/ /app/support
COPY cucumber.json  /app/
COPY package.json /app/
COPY tsconfig.json  /app/

WORKDIR /app

RUN chmod -R 755  /app