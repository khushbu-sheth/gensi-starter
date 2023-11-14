// Chatbox.js
import React, { useState } from "react";
import "./Chatbox.module.css";

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      const userQuestion = userInput.trim();

      if (userQuestion === "") {
        return; // Do not send empty messages
      }

      // Display user message
      setMessages([...messages, { text: userQuestion, sender: "user" }]);
      setUserInput("");

      try {
        // Call your API here and handle the response
        const apiResponse = await fetch("YOUR_API_ENDPOINT", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: userQuestion }),
        });

        const botAnswer = await apiResponse.json();

        // Display bot message
        setMessages([...messages, { text: botAnswer.answer, sender: "bot" }]);
      } catch (error) {
        console.error("Error calling API:", error);
        // Handle error if API call fails
      }
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={message.sender}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your question..."
        className="inputbox"
      />
    </div>
  );
};

export default Chatbox;
