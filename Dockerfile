# syntax=docker/dockerfile:1

# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app

# Устанавливаем зависимости через lockfile (включая devDependencies)
COPY package*.json ./
RUN npm ci

# Собираем Vite-приложение
COPY . .
RUN npm run build

# --- Runtime stage ---
FROM nginx:alpine AS runtime

# Статика
COPY --from=build /app/dist /usr/share/nginx/html

# Конфиг nginx именно как default server
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]