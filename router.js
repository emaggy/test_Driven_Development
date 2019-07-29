const router = (req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("Hello");
  } else if (req.url == "/elephants") {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("unknown uri");
  }
};
module.exports = router;
