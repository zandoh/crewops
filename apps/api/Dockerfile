FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY apps/api/package.json apps/api/

RUN npm install -g pnpm
RUN pnpm install --filter api

COPY apps/api ./apps/api

RUN pnpm --filter api build

EXPOSE 4000

CMD ["node", "dist/index.js"]