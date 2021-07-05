# FROM node:8.11.1 
# WORKDIR /usr/src/app
# COPY ./package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build:ssr

# EXPOSE 4000


# CMD ["npm", "run", "serve:ssr"]

FROM keymetrics/pm2:10-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build:ssr
EXPOSE 4000
CMD ["pm2-runtime", "start", "pm2.json"]

# FROM node:8.11.1 as build-stage
# WORKDIR /app
# COPY package*.json /app/
# RUN npm install
# COPY ./ /app/
# ARG configuration=production
# RUN npm run build -- --output-path=./dist/out --configuration $configuration

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx:1.15
# Copy ci-dashboard-dist
# COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
# Copy default nginx configuration
# COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

# EXPOSE 4000
