import React, { useState } from 'react';
import SimpleForm from '../simpleform';
import './index.css';

const ChatBot = () => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };

  return (
    <>
      <div className="bot">
        <div style={{ display: showChat ? '' : 'none' }}>
          <SimpleForm></SimpleForm>
        </div>
        <div>
          {!showChat ? (
            <button
              className="btnBot"
              onClick={() => {
                startChat();
              }}
            >
              Fale com o Petbot!
            </button>
          ) : (
            <button className="btnBot" onClick={() => hideChat()}>
              esconder o chat...
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatBot;
