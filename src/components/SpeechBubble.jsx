import React from "react"
import speechBubbleSvg from '../assets/speech-bubble.svg'

const SpeechBubble = ({ rotation, text }) => {
  const styles = {
    transform: `rotate(${rotation}deg)`,
  }

  return (
    <div className="flex justify-center items-center" style={styles}>
      <img src={speechBubbleSvg} alt="Speech Bubble" className="inset-0 h-full w-full"/>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center mb-12 text-3xl font-serif">{text}</div>
      </div>
    </div>
  );
};

export default SpeechBubble;
