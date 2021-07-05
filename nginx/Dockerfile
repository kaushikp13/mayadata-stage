FROM nginx:1.15

# Copy config files
# *.conf files in "conf.d/" dir get included in main config
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

# Expose the listening port
EXPOSE 80

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]