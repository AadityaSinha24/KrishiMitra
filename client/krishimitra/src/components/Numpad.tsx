import  { useState } from 'react';
import '../css/Numpad.css'

const Numpad = () => {
  const [status, setStatus] = useState("Press a number to start");

  // Function to make the browser speak
  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-IN'; // You can change this to 'hi-IN' for Hindi
    window.speechSynthesis.speak(utterance);
  };

  const handleNumberClick = (num: number) => {
    setStatus(`You selected option ${num}. Listening...`);
    speak(`You pressed ${num}. Please ask your question.`);
    
    // Here you would trigger your Speech-to-Text logic
    console.log(`Logic for button ${num} triggered`);
  };

  const handleEndCall = () => {
    setStatus("Call ended. Generating your report...");
    speak("Thank you. Your conversation summary is being prepared.");
    
    // Trigger PDF generation API here
    console.log("Ending call and generating PDF");
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Kisan Sahayak</h1>
        <p className="status-badge">{status}</p>
      </header>

      <div className="numpad-grid">
        {numbers.map((num) => (
          <button 
            key={num} 
            className="num-button"
            onClick={() => handleNumberClick(num)}
          >
            {num}
          </button>
        ))}
        <div className="empty-space"></div>
        <button className="num-button" onClick={() => handleNumberClick(0)}>0</button>
        <div className="empty-space"></div>
      </div>

      <button className="end-call-button" onClick={handleEndCall}>
        End Call & Save PDF
      </button>
    </div>
  );
};

export default Numpad;