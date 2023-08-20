const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/login", "/onLogin"],
    createProxyMiddleware({
      target: "REACT_APP_SERVER_API",
      changeOrigin: true,
    })
  );
};
