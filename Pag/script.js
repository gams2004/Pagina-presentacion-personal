document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.getElementById('sendButton');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('messageText');
    const nameError = document.getElementById('nameError');
    const messageError = document.getElementById('messageError');
    const messagesDiv = document.getElementById('messages');
  
    sendButton.addEventListener('click', function () {
      nameError.textContent = '';
      messageError.textContent = '';
  
      const name = nameInput.value.trim();
      const message = messageInput.value.trim();
  
      if (!name) {
        nameError.textContent = 'El nombre del remitente no puede estar vacío.';
        return;
      }
  
      if (!message) {
        messageError.textContent = 'El texto del mensaje no puede estar vacío.';
        return;
      }
  
      if (message.length > 300) {
        messageError.textContent = 'El texto del mensaje no puede superar los 300 caracteres.';
        return;
      }
  
      const messageElement = document.createElement('div');
      messageElement.textContent = `${name}: ${message}`;
      messagesDiv.appendChild(messageElement);
  
      // Limpiar campos
      nameInput.value = '';
      messageInput.value = '';
    });
  });
  