'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {


  it('should post /user/login', () => {
    return app.httpRequest()
      .post('/user/login')
      .send({ name: 'test', password: '123' })
      .expect(200)
      .expect(res => {
        assert(res.body.name = 'test');
      });
  });

  // 测试一次即可
  it('should post /user/register', async () => {
    await app.httpRequest()
      .post('/user/register')
      .send({ name: 'test', password: '123' })
      .expect(500);
  });

});
