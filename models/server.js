const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.championsPath = "/api/champion";

    //Database connection
    this.connectDB();
    this.middlewares();
    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.championsPath, require("../routes/champion"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server listening on port ", this.port);
    });
  }
}

module.exports = Server;
