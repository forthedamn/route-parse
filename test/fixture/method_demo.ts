  /**
   * 使用原生 koa 返回数据
   */
  @route('/koa', HttpMethod.GET)
  async koa(ctx: Context) {
    ctx.body = '123';
  }