import ChatMsg from './ChatMsg.jsx';
import useAutoScroll from './autoScroll.jsx';
import './ChatMessages.css';


const ChatMessages = ({ chatMessages }) => {
  const chatMsgRef = useAutoScroll(chatMessages);

  if (chatMessages.length === 0) {
    return (
      <div className="chat-message-container">Welcome to the chatbot project! Send a message using the textbox below.</div>
    );
  }

  return (
    <div className="chat-message-container"
      ref={chatMsgRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMsg
            message={chatMessage.message}
            sender={chatMessage.sender}
            currTime = {chatMessage.currTime}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages