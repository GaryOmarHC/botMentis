// Este es el archivo script.js
// Puedes añadir aquí cualquier funcionalidad JavaScript que necesites para tu página.
// Por ejemplo, para manejar la interacción del chat o animaciones.

document.addEventListener('DOMContentLoaded', () => {
  // Lógica para el menú de navegación en móviles
  const menuButton = document.querySelector('nav button');
  const navLinks = document.getElementById('navbar-links');

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('hidden');
    });
  }

  // Lógica para enviar mensajes en el chat
  const chatInput = document.querySelector('.chat-input input');
  const sendButton = document.querySelector('.chat-input button');
  const chatMessages = document.querySelector('.chat-messages');

  sendButton.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  function sendMessage() {
    const messageText = chatInput.value.trim();
    if (messageText !== '') {
      const userMessageDiv = document.createElement('div');
      userMessageDiv.classList.add('message', 'user-message');
      userMessageDiv.textContent = messageText;
      chatMessages.appendChild(userMessageDiv);
      chatInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight; // Desplazarse al último mensaje

      // Simular una respuesta del bot después de un breve retraso
      setTimeout(() => {
        const botResponseDiv = document.createElement('div');
        botResponseDiv.classList.add('message', 'bot-message');
        botResponseDiv.textContent = 'Gracias por tu mensaje. ¿Hay algo más en lo que pueda ayudarte?';
        chatMessages.appendChild(botResponseDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 1000);
    }
  }
});
