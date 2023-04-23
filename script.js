const conversation = document.querySelector('.conversation');
const userInput = document.querySelector('#user-input');
function sendMessage() {
  const userText = userInput.value;
  const userMsg = document.createElement('p');
  userMsg.innerHTML = userText;
  conversation.appendChild(userMsg);

  const botResponse = generateResponse(userText);
  const botMsg = document.createElement('q');
  botMsg.innerHTML = botResponse;
  conversation.appendChild(botMsg);

  userInput.value = '';
}

function generateResponse(userText) {
  // Use an NLP library to analyze user text and generate an appropriate response
  // For this example, we'll just return a default response
  if(userInput.value=='hi'){
    return 'Hello , I am Srimoyee';
  }
  else if(userInput.value=='who are you?'){
    var te="I am your chat partner";
    return te;
  }
  else if(userInput.value=='tell me about yourself'){
    var te="I am an AI chatbot";
    return te;
  }
  else if(userInput.value=='oi'){
    return 'bolo bro';
  }
  else if(userInput.value=='🙂'){
    return '🙃';
  }
  else if(userInput.value=='what is your name?'){
    return 'Srimoyee 🤗 ,what is your name?';
  }
  else if(userInput.value=='suvam'){
    return 'nice name bro 👌';
  }
  else if(userInput.value=='ok'){
    return 'hmm';
  }
  else if(userInput.value=='you will be my gf'){
    return '😳';
  }
  else if(userInput.value=='how are you?'){
    return 'I am fune, what about you';
  }
  else{
  return 'Sorry, I can not do this 😔';
  }
}
