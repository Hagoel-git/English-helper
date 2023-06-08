document.addEventListener('DOMContentLoaded', () => {
  const sendButton = document.getElementById('send-button');
  sendButton.addEventListener('click', handleSendMessage);
});

function handleSendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();
  if (message !== '') {
    displayMessage(message, true);
    messageInput.value = '';
  }
}

function displayMessage(message, isSentByUser) {
  const chatContainer = document.getElementById('chat-container');
  const messageBubble = document.createElement('div');
  messageBubble.classList.add('message-bubble');
  if (isSentByUser) {
    messageBubble.classList.add('right');
  }
  messageBubble.textContent = message;
  chatContainer.appendChild(messageBubble);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
