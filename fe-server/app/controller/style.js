'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async add() {
    const { ctx } = this;
    const { desc, theme } = ctx.request.body;
    const sTheme = await ctx.model.StyleTheme.create({ desc, theme, userId: 3 });
    ctx.body = sTheme;
  }

  async update() {
    const { ctx } = this;
    const { id, desc, theme } = ctx.request.body;
    const user = await ctx.model.StyleTheme.update({ desc, theme }, {
      where: { id },
    });
    ctx.body = user;
  }

  async page() {
    const { ctx } = this;
    const { pageNum = 1, pageSize = 10, desc, theme } = ctx.request.query;
    const limit = pageSize;
    const offset = 0 + (pageNum - 1) * limit;
    const styles = await ctx.model.StyleTheme.findAndCountAll({
      limit,
      offset,
    });
    const pagination = {
      pageNum,
      pageSize,
      ...styles,
    };
    ctx.body = pagination;
  }
}

module.exports = UserController;
