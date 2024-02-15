const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/oauth",
        createProxyMiddleware({
            target: "https://kauth.kakao.com",
            changeOrigin: true,
        })
    );
    app.use(
        "/api/members",
        createProxyMiddleware({
            target: "http://ec2-3-34-198-148.ap-northeast-2.compute.amazonaws.com:8080",
            changeOrigin: true,
        })
    )
};