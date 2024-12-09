# 使用Node.js作为基础镜像
FROM node:18.20.4

ENV NODE_ENV production

RUN mkdir -p /usr/src/app

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

RUN npm config set registry https://registry.npmmirror.com/

# 安装依赖
RUN npm install

# 将所有文件复制到工作目录
COPY . .

EXPOSE 7001

# 启动命令
CMD ["npm", "start"]
