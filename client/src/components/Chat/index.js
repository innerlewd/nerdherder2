import React from "react";
import "./style.css";

(function () {
    var socket = io();
    $("form").submit(function (e) {
        e.preventDefault(); // prevents page reloading
        socket.emit("chat message", $("#m").val());
        $("#m").val("");
        return true;
    });
})();


export default Chat;

