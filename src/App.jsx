import React from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { 
  MainContainer, 
  ChatContainer, 
  MessageList, 
  Message, 
  MessageInput, 
  TypingIndicator 
} from '@chatscope/chat-ui-kit-react'
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "Hello, I am ChatGPT!",
      sender: "ChatGPT",
    },
  ]);

  return (
      <>
        {/* A container for the chat window */}
        <div style={{ position: "relative", height: "100vh", width: "700px" }}>
          {/* All components are wrapped in the MainContainer */}
          <MainContainer>
            {/* All chat logic will be contained in the ChatContainer */}
            <ChatContainer>
              {/* Shows all our messages */}
              <MessageList>
                {/* Map through chat messages and render each message */}
                {chatMessages.map((message, i) => {
                  return (
                    <Message 
                      key={i} 
                      model={message}
                      style={message.sender === "ChatGPT" ? { textAlign: "left" } : {}}
                    />
                  );
                })}
              </MessageList>;
            </ChatContainer>
          </MainContainer>
        </div>
      </>
    );
}

export default App