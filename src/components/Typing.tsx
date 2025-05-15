import type { MessageHistoryData } from "./type";

export const Typing = (message: MessageHistoryData) => {
    return (
          <li>
            <div className="message-data">
            <span className="message-data-time">{message.time}</span>
            <div className="message other-message typing-indicator">
                <strong>{message.from.name}</strong> is typing...
            </div>
    </div>
  </li>
    )
};