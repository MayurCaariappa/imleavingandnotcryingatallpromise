import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const fullText = 'Goodbye!';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 200); // 200ms per character

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div>
      <h1>
        {text}
        <span className="cursor">|</span>
      </h1>
    </div>
  );
}

export default App;