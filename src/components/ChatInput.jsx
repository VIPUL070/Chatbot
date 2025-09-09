import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

const ChatInput = ({ chatMessages, setChatMessages }) => {
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