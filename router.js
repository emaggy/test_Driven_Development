const router = (req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("Hello");
  } else if (req.url == "/elephants") {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("unknown uri");
  } else if (req.url === "/blog" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    let oneTwoThree = ["one", "two", "three"];
    res.end(JSON.stringify(oneTwoThree));
  } else if (req.url === "/blog" && req.method === "POST") {
    console.log(req.headers.password);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(["a", "b"]));
  }
};
module.exports = router;
