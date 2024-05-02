// Client 코드

let socket = io();
let emitMsg;
let msg = 0;
socket.emit("input", msg);

let enterBtn = document.querySelector('#enterBtn');


enterBtn.addEventListener('click', function() {
    msg = 1;
    socket.emit("input", msg);
    // 클라이언트 > 서버 전송
  
    setTimeout(function() {
        msg = 0;
        socket.emit("input", msg); // 일정 시간이 지난 후에 msg 값을 서버로 다시 전송
    }, 1000); // 여기서 1000은 밀리초 단위의 시간을 나타냅니다. 1초를 의미합니다.
});


                        