import {MessageHistory} from './components/MessageHistory'
import './App.css'
import messages from './components/MessageRawData'; 

function App() {
  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <ul>
            {messages.map((item) => (
            <MessageHistory key={item.id} {...item}/>
          ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
