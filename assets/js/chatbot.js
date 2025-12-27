function toggleChatbot() {
  document.getElementById("chatbotWindow")
    .classList.toggle("active");
}

function sendMessage(message) {
  const container = document.getElementById("chatMessages");

  container.innerHTML += `
    <div class="message user-message">
      <div class="message-content">${message}</div>
    </div>
  `;

  setTimeout(() => {
    container.innerHTML += `
      <div class="message">
        <div class="message-content">${getBotResponse(message)}</div>
      </div>
    `;
    container.scrollTop = container.scrollHeight;
  }, 800);
}

function getBotResponse(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("skill")) return "I work with HTML, CSS, JavaScript, React, and Python.";
  if (msg.includes("project")) return "Check out my projects section for live demos and GitHub links!";
  if (msg.includes("contact")) return "You can reach me via email or LinkedIn.";
  return "Ask me about my skills, projects, or experience!";
}
