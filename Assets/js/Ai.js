const toggleButton = document.getElementById('toggle-button');
const chatWindow = document.getElementById('chat-window');
const chatContainer = document.getElementById('chat-container');
const chatHeader = document.getElementById('chat-header');
const bannerText = document.getElementById('bannerText');

toggleButton.addEventListener('click', () => {
    // Toggle full screen and minimize
    if (chatWindow.classList.contains('minimized')) {
        // Maximize the chat to fullscreen
        chatWindow.classList.remove('minimized');
        chatContainer.classList.add('fullscreen');
        bannerText.style.display='block'
        // chatHeader.style.justifyContent='space-between'
    } else if (chatContainer.classList.contains('fullscreen')) {
        // Return to floating minimized mode
        chatWindow.classList.add('minimized');
        chatContainer.classList.remove('fullscreen');
        bannerText.style.display='none'
        

    }
});

const sendButton = document.getElementById('send-button');
const userInput = document.getElementById('user-input');
const chatContent = document.querySelector('.chat-content');

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (userMessage.trim() !== '') {
        // Add user's message to the chat window
        const userMsgElement = document.createElement('p');
        // userMsgElement.classList.add('user-message');
        userMsgElement.textContent = userMessage;
        chatContent.appendChild(userMsgElement);
        userMsgElement.style.justifySelf='end';
        userMsgElement.style.backgroundColor='white'
        userMsgElement.style.color='black'

        // Clear the input field
        userInput.value = '';

        // Respond to the user (for demo purposes, we'll just echo the input)
        const botMsgElement = document.createElement('p');
        let botIcon =document.getElementById('aiIcon');
        botMsgElement.classList.add('bot-message');

        botMsgElement.textContent ='You asked: ' + userMessage;
        chatContent.appendChild(botMsgElement);

        // Scroll to the bottom of the chat
        chatContent.scrollTop = chatContent.scrollHeight;
    }
    if (window.innerWidth <= 200) {
        userMsgElement.style.justifySelf='start';
        
    }
  
});
