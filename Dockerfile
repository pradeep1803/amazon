# Build stage
FROM node:18 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18
WORKDIR /app
COPY --from=build /app ./
EXPOSE 3000
CMD ["npm", "start"]