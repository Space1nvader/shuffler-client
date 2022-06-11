# build environment
FROM nginx:stable-alpine
COPY ./build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]