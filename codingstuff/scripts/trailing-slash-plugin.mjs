export function trailingSlashPlugin() {
  return {
    name: "trailing-slash-redirect",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url !== "/" && req.url.endsWith("/")) {
          const clean = req.url.slice(0, -1);
          res.writeHead(308, { Location: clean });
          res.end();
          return;
        }
        next();
      });
    },
  };
}
