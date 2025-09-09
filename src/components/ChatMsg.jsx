import BotImage from '../assets/robot.png';
import UserImage from '../assets/user.png';
import './ChatMsg.css';


//props makes our component reusable and are objects basically
const ChatMsg = (props) => {
  const { message, sender } = props; //deconstructing

  return (
    // if statement inside JSX [Guard operator &&]
    <div className={sender === 'user' ? "chat-message-user" : "chat-message-bot"}>
      {sender === "bot" && <img src={BotImage} className="sender-img" />}
      <div className="chat-message">
        {message}
      </div>
      {sender === "user" && <img src={UserImage} className="sender-img" />}
    </div>
  );
}

export default ChatMsg