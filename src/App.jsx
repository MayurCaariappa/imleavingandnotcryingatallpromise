import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const fullText = 'Goodbye!';

  // Typing effect
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.6 },
          });
        }, 500);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, []);

  // Confetti on click
  const handleGoodbyeClick = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="container">
      <div className="binary-bg"></div>
      <h1 onClick={handleGoodbyeClick} style={{ cursor: 'pointer' }}>
        {text}
        <span className="cursor">|</span>
      </h1>
      <footer>
        <div className="made-by">Made by @MayurCaariappa</div>
      </footer>
    </div>
  );
}

export default App;