
const { Controller } = require('egg');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // 引入 UUID 库
const addClass = {
  book_id: 'int?',
  book_name: 'string',
  author: 'string',
  publish: 'string',
  ISBN: 'string',
  introduction: 'string?',
  language: 'string?',
  price: 'number',
  pub_date: 'string?',
  class_id: 'int',
  number: 'int',
};

const listClass = {
  pageSize: 'string',
  pageNum: 'string',
};

function getExtension(mimeType) {
  const mimeTypes = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/gif': 'gif',
    'image/svg+xml': 'svg',
    'image/bmp': 'bmp',
    'image/webp': 'webp',
    'application/pdf': 'pdf',
  };

  return mimeTypes[mimeType] || null; // 返回对应的扩展名，如果没有找到则返回 null
}
class bookInfoController extends Controller {
  // 增加
  async add() {
    const { ctx } = this;
    ctx.validate(addClass, ctx.request.body);
    const res = await ctx.service.bookInfo.save(ctx.request.body);
    if (res === false) return;
    ctx.sendSuccess(res);
  }
  // 编辑
  async edit() {
    const { ctx } = this;
    ctx.validate(addClass, ctx.request.body);
    const res = await ctx.service.bookInfo.edit(ctx.request.body);
    if (res === false) return;
    ctx.sendSuccess(res);
  }
  // 删除
  async delete() {
    const { ctx } = this;
    const { id } = ctx.params;
    const res = await ctx.service.bookInfo.delete(id);
    if (res === false) return;
    ctx.sendSuccess(res);
  }
  // 获取列表
  async list() {
    const { ctx } = this;
    ctx.validate(listClass, ctx.request.query);
    const res = await ctx.service.bookInfo.list(ctx.request.query);
    ctx.sendSuccess(res);
  }
  // 获取搜索列表
  async search() {
    const { ctx } = this;
    ctx.validate(listClass, ctx.request.query);
    const res = await ctx.service.bookInfo.search(ctx.request.query);
    ctx.sendSuccess(res);
  }
  // 获取图书详情
  async detail() {
    const { ctx } = this;
    const { book_id } = ctx.request.query;
    const res = await ctx.service.bookInfo.detail(book_id);
    ctx.sendSuccess(res);
  }


  async coverUpload() {
    const { ctx } = this;
    
    try {
      const file = ctx.request.files[0]; // 获取上传的文件

      if (!file) {
        ctx.throw(400, '没有上传文件');
      }

      const id = uuidv4()
      const uniqueFileName = `${id}.${getExtension(file.mime || file.mimeType)}`; // 使用 UUID 生成唯一文件名

      const uploadDir = path.join('app/public', 'cover'); // 定义上传目录

      const filePath = path.join(uploadDir, uniqueFileName); // 定义保存路径


      // 检查并创建上传目录
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true }); // 创建目录及其父目录
      }

      // 创建写入流
      const writer = fs.createWriteStream(filePath);
      const reader = fs.createReadStream(file.filepath);

      // 使用 Promise 来处理文件写入的异步过程
      let fileRes = await new Promise((resolve, reject) => {
        reader.pipe(writer); // 将读取流写入到写入流

        // 监听文件写入完成
        writer.on('finish', () => {
          // console.log('文件上传成功：', filePath);
          resolve({
            id:uniqueFileName,
            url:'/public/cover/'+uniqueFileName
          }); // 解析成功的 Promise
        });

        // 监听错误
        writer.on('error', (err) => {
          // console.error('文件上传失败：', err);
          reject(err);
        });
      });

      // 如果没有抛出异常，表示文件上传成功
      ctx.sendSuccess(fileRes);
    } catch (err) {
      console.error('处理文件上传时发生错误：', err);
      ctx.sendError(err);
    }
  }

}
module.exports = bookInfoController;
