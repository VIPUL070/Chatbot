import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

const formatTime = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours) as 12
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return hours + ':' + minutes + ' ' + ampm;
};


const ChatInput = ({ chatMessages, setChatMessages }) => {
  let currTime = formatTime(new Date());

  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        currTime : currTime,
        id: crypto.randomUUID()
      }
    ]
    setChatMessages(newChatMessages);

    setChatMessages([
      ...newChatMessages,
      {
        message: "Loading.......",
        sender: "bot",
        id: crypto.randomUUID()
      }
    ]);

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "bot",
        currTime : currTime,
        id: crypto.randomUUID()
      }
    ]);

    setInputText('');
  }

  function keyPressed(event) {
    if (event.key == "Enter") {
      sendMessage();
    }
    if (event.key == "Escape") {
      setInputText('');
    }
  }

  return (
    <div className="chat-input">
      <input type="text"
        placeholder="Send a message to Chatbot"
        onChange={saveInputText}
        onKeyDown={keyPressed}
        value={inputText}      //controlled inputs
        className="input"
      />
      <button
        onClick={sendMessage}
        className="send-btn"
      >Send</button>
    </div>
  );
}

export default ChatInput;