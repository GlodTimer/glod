import * as React from 'react';

import { timerDisplay } from './style.css';

interface TimerDisplayProps {
  time: string;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ time }) => {
  return <div className={timerDisplay}>{time}</div>;
};

export default TimerDisplay;
