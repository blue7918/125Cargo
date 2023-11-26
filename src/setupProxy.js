const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/8888', {
      target: 'http://15.164.164.189:8888',
      pathRewrite: { '^/8888': '' },
      changeOrigin: true,
    })
  );
};
