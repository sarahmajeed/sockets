// create your socket to connect with your websocket backend 
const socket = io("http://localhost:3000")

const message = document.getElementById('message');
const messages = document.getElementById('messages');

const handleMessage = () => {
  socket.emit('events', {data: message.value})
}

// listen - socket name, function with a destructured argument
socket.on('events', ({ data }) => {
  handleListOfMessages(data)
})

const handleListOfMessages = (message) => {
  messages.appendChild(buildNewMessage(message));
}

const buildNewMessage = (message) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(message));
  return li;
}

