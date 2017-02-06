# Version: 0.0.1
FROM ubuntu:16.04
MAINTAINER 何民三 "cn.liuht@gmail.com"
RUN apt-get update
RUN apt-get install -y nginx
RUN echo 'Hello World, 我是个自动构建的容器' \ 
   > /var/www/html/index.html
EXPOSE 80