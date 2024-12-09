
const { Controller } = require('egg');

const addClass = {
  class_id: 'int?',
  class_name: 'string',
  sort: 'int',
};

const listClass = {
  pageSize: 'string',
  pageNum: 'string',
};


class classInfoController extends Controller {
  // 增加
  async add() {
    const { ctx } = this;
    ctx.validate(addClass, ctx.request.body);
    const res = await ctx.service.classInfo.save(ctx.request.body);
    if (res === false) return;
    ctx.sendSuccess(res);
  }
  // 编辑
  async edit() {
    const { ctx } = this;
    ctx.validate(addClass, ctx.request.body);
    const res = await ctx.service.classInfo.edit(ctx.request.body);
    if (res === false) return;
    ctx.sendSuccess(res);
  }
  // 删除
  async delete() {
    const { ctx } = this;
    const { id } = ctx.params;
    const res = await ctx.service.classInfo.delete(id);
    if (res === false) return;
    ctx.sendSuccess(res);
  }
  // 获取列表
  async list() {
    const { ctx } = this;
    ctx.validate(listClass, ctx.request.query);
    const res = await ctx.service.classInfo.list(ctx.request.query);
    ctx.sendSuccess(res);
  }
  // 获取全部
  async page() {
    const { ctx } = this;
    const res = await ctx.service.classInfo.page();
    ctx.sendSuccess(res);
  }
}

module.exports = classInfoController;
