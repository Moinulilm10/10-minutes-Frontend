FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY . .

RUN npm install
RUN npm run build


FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# Remove default nginx config and use our own
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
