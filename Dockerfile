# Etapa 1 — Build da aplicação
FROM node:18 AS builder
WORKDIR /app

# Copia o package.json e instala dependências
COPY package*.json ./
RUN npm install

# Copia o restante do código e faz o build
COPY . .
RUN npm run build

# Etapa 2 — Servir os arquivos com Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# (opcional) Substitui o nginx.conf se quiser rotas personalizadas
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
