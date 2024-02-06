const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/oauth", {
            target: "https://kauth.kakao.com",
            changeOrigin: true,
        })
    );
    app.use(
        createProxyMiddleware("/", {
            target: process.env.REACT_APP_SERVER_URL,
            changeOrigin: true,
        })
    )
};