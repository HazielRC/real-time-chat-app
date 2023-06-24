import express from "express";

import init from "./init.js"
import sockets from "./socket.js"

// initializations
const app = express();
init(app);

const server = app.listen(app.get("port"), () => {
  console.log("Server listening on port: ", app.get("port"))
  console.log(`Web URL: http://localhost:${app.get("port")}/`)
})

sockets(server)