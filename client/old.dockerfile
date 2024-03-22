FROM node:20 as BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN npm i -g pnpm && pnpm i
COPY . . 
RUN pnpm run build 

# This will be used for production.
# It will kieep stuff small imgae
# It won't expose our code
FROM node:20 as PRODUCTION_IMAGE
WORKDIR /app 
# As we want the dist build to be in the root of the image, we need to copy it there.
COPY --from=BUILD_IMAGE /app/dist /app/dist 
EXPOSE 5000

COPY package.json .
RUN npm i -g pnpm && pnpm i
COPY vite.config.js .
EXPOSE 5000     
CMD [ "pnpm", "run", "preview" ]
