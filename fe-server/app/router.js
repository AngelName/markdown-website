'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/user/login', controller.user.login);
  router.post('/user/register', controller.user.register);
  router.post('/style/add', controller.style.add);
  router.post('/style/update', controller.style.update);
  router.get('/style/page', controller.style.page);
};
