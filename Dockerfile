# Etapa 1 — Build da aplicação
FROM node:18 AS builder
WORKDIR /app

# Copia o package.json e instala dependências
COPY package*.json ./
RUN npm ci

# Copia o restante do código e faz o build
COPY . .
RUN npm run build

# Etapa 2 — Servir os arquivos com Nginx
FROM nginx:alpine
COPY --from=builder ./dist /usr/share/nginx/html

COPY ./default.conf /etc/nginx/conf.d/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
