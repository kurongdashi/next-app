const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");
const devProxy = {
  "/api": { target: "", changeOrigin: true },
};
const dev = process.env.NODE_ENV == "development";
const app = next({ dev });
const handle = app.getRequestHandle();
app.prepare().then(() => {
  const app = express();
  if (dev && devProxy)
    Object.keys(devProxy).forEach(function (context) {
      app.use(createProxyMiddleware(context, devProxy[context]));
    });
  app.all("*", (req, res) => handle(req, res));
  app.listen(3000, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:3000`);
  });
});
