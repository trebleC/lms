# 使用官方的 Node 镜像作为构建环境
FROM node:18.20.4 as build-stage

# 设置工作目录
WORKDIR /usr/src/web

COPY package*.json ./

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install
COPY . .
# 安装依赖

RUN npm run build:prod

# 使用官方的 Nginx 镜像作为运行环境
FROM nginx:alpine

# 复制自定义的Nginx配置文件到容器中
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build-stage /usr/src/web/dist /usr/share/nginx/html




# 可以添加其他 Nginx 配置、SSL 证书等
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
