var server = require("./app/app");

var port = process.env.PORT || 8000;

server.listen(port, function() {
  console.log("server running codeBreaker API on port %d", port);
});
