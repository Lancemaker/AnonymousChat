$(function(){
    //make connection
    var socket = io.connect('http://localhost:3333')

    //buttons and inputs
    var message = $("#texto")
    //var username = $("#username")
    var send_message = $("#send_message")
    var send_username = $("#send_username")
    var chatroom = $("#chatroom")

    //Emit a username
    send_username.click(function(){
        //console.log(username.val())
        //socket.emit('change_username',{username : username.val()})
    })

    // Emit message
    send_message.click(function(){        
        socket.emit('new_message',{message : message.val()})
        console.log("estive aqui")
        console.log({message:message.val()})
    })
    // listen to a new_message
    socket.on("new_message", (data)=>{
        console.log(data)
        chatroom.append("<p class='message'>"+data.username + ": " + data.message + "</p>")
    })
});