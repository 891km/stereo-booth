// Server 코드

const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);


app.use(express.static(__dirname));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
// app.use("/", express.static(__dirname + "/"));

// app.get("/", function(req, res){
//     console.log("client");
//     res.sendFile( __dirname + "/index.html");
// });


// 소켓 연결 시
io.on('connection', function(socket) {
    console.log("user connected");

    socket.on('input', function(msg) {
      console.log(msg);
      io.emit('input', msg); // 서버 > 모든 클라이언트로 전송
    });
});


/*=== 서버 시작 ===*/
const listener = server.listen(process.env.PORT, function() {
    console.log('listening on *:' + listener.address().port);
});