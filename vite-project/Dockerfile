FROM node:20-alpine

RUN addgroup app && adduser -S -G app app

WORKDIR /app

COPY package*.json ./

USER root

RUN chown -R app:app . 

USER app


# Sometimes, Docker containers on some operating systems (especially Windows and macOS) have trouble detecting file changes due to how file systems work. To fix this, set the environment variable CHOKIDAR_USEPOLLING to true. You can do this directly in your Dockerfile
ENV CHOKIDAR_USEPOLLING=true

RUN npm install

COPY . .

EXPOSE 5173

CMD npm run dev