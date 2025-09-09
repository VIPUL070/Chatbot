import { useState } from 'react'
import ChatInput from './components/ChatInput.jsx';
import ChatMessages from './components/ChatMessages.jsx';
import './App.css'

const App = () => {
  const [chatMessages, setChatMessages] = useState(
    [
      // {
      //     message: "Hello chatbot",
      //     sender: "user",
      //     id: "id1"
      // },
    ]
  );
  //Array destructure
  // const [chatMessages , setChatMessages] = array;
  // const chatMessages = array[0];       //current data
  // const setChatMessages = array[1];    //updater function


  //fragment
  return (
    <div className="app-container" >
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </div>
  );
}

export default App
