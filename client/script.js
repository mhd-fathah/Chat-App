const socket = io();

function sendMessages(){
    const input = document.getElementById('msgInput');
    const message = input.value;
    socket.emit('message',message);
    input.value = '';
}

socket.on('message',(msg)=>{
    const list = document.getElementById('messages')
    const item = document.createElement('li');
    item.textContent = msg;
    list.appendChild(item)
})