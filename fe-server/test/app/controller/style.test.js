'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/style.test.js', () => {


  it('should post /user/add', () => {
    return app.httpRequest()
      .post('/style/add')
      .send({ desc: '第一个样式', theme: 'body{background:red;}' })
      .expect(200)
      .expect(res => {
        assert(res.body.name = 'test');
      });
  });

  it('should post /user/update', () => {
    return app.httpRequest()
      .post('/style/update')
      .send({ desc: '第一个样式123', theme: 'body{background:red;}', id: 2 })
      .expect(200)
      .expect(res => {
        assert(res.body.desc = '第一个样式123');
      });
  });

  it('pages should get one row', async () => {
    await app.httpRequest()
      .get('/style/page')
      .query({ pageNum: 1, pageSize: 1 })
      .expect(200)
      .expect(res => {
        const { rows, pageNum, pageSize } = res.body;
        assert(rows.length === 1);
        assert(pageNum == 1);
        assert(pageSize == 1);
      });
  });

});
