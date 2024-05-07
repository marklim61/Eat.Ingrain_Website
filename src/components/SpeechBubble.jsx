import React from "react";
import "./SpeechBubble.css";
import {ReactComponent as SpeechBubbleSvg} from '../assets/speech-bubble.svg'

const SpeechBubble = ({ rotation, text }) => {
  const styles = {
    transform: `rotate(${rotation}deg)`,
  }

  return (
    <div className="speech-bubble-container pt-20" style={styles}>
        <SpeechBubbleSvg />
        <text className="speech-bubble-text">
            {text}
        </text>
    </div>
  );
};

export default SpeechBubble;
