const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://mirzaahmedovv1_db_user:ZU2SAdpFRcLyAn1s@cluster0.kfywhv6.mongodb.net/Reja=Cluster0";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MONGODB");
    else {
      console.log("MONGODB connection succed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`,
        );
      });
    }
  },
);

