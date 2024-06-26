FROM node:20 AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

FROM node:20

WORKDIR /app

COPY --from=build /app/ .

ENV PORT=3000
ENV NODE_ENV=production
ENV MODEL_URL="https://storage.googleapis.com/submissionmlgc-teukugevint-bucket/%20model-in-prod/model.json"

EXPOSE 3000

CMD ["npm", "start"]
