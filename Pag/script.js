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

  // Funcionalidad para resaltar la sección en la que está posicionado el mouse
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.addEventListener('mouseover', () => {
      section.style.backgroundColor = '#f5f5f5';
      section.style.border = '1px solid #3498db';
    });
    section.addEventListener('mouseout', () => {
      section.style.backgroundColor = '';
      section.style.border = '';
    });
  });

  // Funcionalidad de desplazamiento suave al hacer clic en un enlace del índice
  const indexLinks = document.querySelectorAll('.index-link');
  indexLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetSectionId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetSectionId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
