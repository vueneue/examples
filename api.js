const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const cookie = require('koa-cookie').default;
const jwt = require('jsonwebtoken');

module.exports = app => {
  /**
   * Middleware to read cookies
   */
  app.use(cookie());

  /**
   * Middleware to ready requests bodies
   */
  app.use(bodyParser());

  // Create router for API
  const router = new Router();

  /**
   * Login route
   */
  router.post('/api/login', async ctx => {
    ctx.set('content-type', 'application/json');
    ctx.body = { token: jwt.sign({ name: ctx.request.body.name }, 'shhhhh') };
  });

  /**
   * Me route
   */
  router.get('/api/me', async ctx => {
    const header = ctx.header['authorization'] || '';
    const token = header.replace('Bearer ', '');

    ctx.set('content-type', 'application/json');
    try {
      if (jwt.verify(token, 'shhhhh')) {
        ctx.body = jwt.decode(token);
        return;
      }
    } catch (err) {}

    ctx.body = {};
  });

  /**
   * Private data
   */
  router.get('/api/private', async ctx => {
    const header = ctx.header['authorization'];
    const token = header.replace('Bearer ', '');

    ctx.set('content-type', 'application/json');

    try {
      if (jwt.verify(token, 'shhhhh')) {
        ctx.body = [
          {
            title: 'My first private item'
          },
          {
            title: 'My second private item'
          }
        ];
        return;
      }
    } catch (err) {}

    ctx.status = 403;
    ctx.body = {
      error: 'Bad token'
    };
  });

  // Install router on Koa
  app.use(router.routes()).use(router.allowedMethods());
};
