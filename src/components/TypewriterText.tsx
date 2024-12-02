import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  cursorColor?: string;
}

export function TypewriterText({ text, className = '', cursorColor = 'blue' }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [cursorStyle, setCursorStyle] = useState('|');
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTypingDone(true);
        setCursorStyle('>');
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className={`relative ${className}`}>
      <span className="font-russo">{displayText}</span>
      {showCursor && (
        <span 
          className={`inline-block transition-all duration-500 font-bold ${
            cursorStyle === '>' ? 'transform translate-y-0' : ''
          }`}
          style={{
            marginLeft: '0.1em',
            fontSize: '1.2em',
            lineHeight: '1',
            fontWeight: '900',
            color: cursorColor,
            textShadow: `0 0 10px ${cursorColor === 'white' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(59, 130, 246, 0.5)'}`
          }}
        >
          {cursorStyle}
        </span>
      )}
    </div>
  );
}