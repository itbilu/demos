# Version: 0.0.1
FROM ubuntu:16.04
MAINTAINER 何民三 "cn.liuht@gmail.com"
RUN apt-get update
RUN apt-get install -y nginx
RUN echo "Hello World, 我是个容器" \ 
   > /usr/share/nginx/html/index.html
EXPOSE 80
