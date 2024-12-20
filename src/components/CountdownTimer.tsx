import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';
import { TimeUnit } from './TimeUnit';
import { calculateTimeLeft, TimeLeft } from '../utils/time';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 10);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'days', value: timeLeft.days },
    { label: 'hours', value: timeLeft.hours },
    { label: 'minutes', value: timeLeft.minutes },
    { label: 'seconds', value: timeLeft.seconds },
    { label: 'milliseconds', value: timeLeft.milliseconds, padLength: 3 },
  ];

  return (
    <div className="flex flex-col items-center space-y-6 backdrop-blur-sm bg-black/30 p-8 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-2">
        <Timer className="w-6 h-6 text-white" />
        <h1 className="text-2xl text-white font-bold">Countdown to FREEDOM</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {timeUnits.map(({ label, value, padLength }) => (
          <TimeUnit
            key={label}
            label={label}
            value={value}
            padLength={padLength}
          />
        ))}
      </div>
      <span className="text-gray-300">Click to play audio</span>
    </div>
  );
}
