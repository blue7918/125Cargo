const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://15.164.164.189:8888',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
