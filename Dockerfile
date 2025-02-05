FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Inštalujeme PM2
RUN npm install -g pm2

# Spustíme aplikáciu cez PM2
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
