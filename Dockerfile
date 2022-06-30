FROM node:14-alpine AS builder
WORKDIR /app
COPY . .

RUN npm ci && npm run build

FROM node:14-alpine
WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

CMD ["node", "server.js"]
