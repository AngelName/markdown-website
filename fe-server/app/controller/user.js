'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    const { ctx } = this;
    const { name, password, permissions = '' } = ctx.request.body;
    const user = await ctx.model.User.create({ name, password, permissions });
    ctx.body = user;
  }

  async login() {
    const { ctx } = this;
    const { name, password } = ctx.request.body;
    const user = await ctx.model.User.findOne({
      where: { name, password },
    });

    ctx.body = user;

  }
}

module.exports = UserController;
