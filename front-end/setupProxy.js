const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
<<<<<<< HEAD
        createProxyMiddleware("/oauth", {
=======
        "/oauth",
        createProxyMiddleware({
>>>>>>> fc7fbed (fix: pull 충돌rebase 해결)
            target: "https://kauth.kakao.com",
            changeOrigin: true,
        })
    );
    app.use(
<<<<<<< HEAD
        createProxyMiddleware("/", {
            target: process.env.REACT_APP_SERVER_URL,
=======
        "/api/members",
        createProxyMiddleware({
            target: "http://ec2-3-34-198-148.ap-northeast-2.compute.amazonaws.com:8080",
>>>>>>> fc7fbed (fix: pull 충돌rebase 해결)
            changeOrigin: true,
        })
    )
};