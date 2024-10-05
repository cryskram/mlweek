import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
  onTimeUpdate: (timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }) => void;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate, onTimeUpdate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [remainingTime, setRemainingTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      setRemainingTime(updatedTime);
      onTimeUpdate(updatedTime); // Pass the countdown values to parent or other component
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex space-x-4 mb-2 font-['Bruno_Ace'] text-white">
        <p className="text-lg sm:text-xl">Days</p>
        <p className="text-lg sm:text-xl">Hours</p>
        <p className="text-lg sm:text-xl">Minutes</p>
        <p className="text-lg sm:text-xl">Seconds</p>
      </div>
      <div className="flex space-x-4 font-['Bruno_Ace'] text-white">
        <p className="text-2xl sm:text-3xl">{remainingTime.days}</p>
        <p className="text-2xl sm:text-3xl">{remainingTime.hours.toString().padStart(2, '0')}</p>
        <p className="text-2xl sm:text-3xl">{remainingTime.minutes.toString().padStart(2, '0')}</p>
        <p className="text-2xl sm:text-3xl">{remainingTime.seconds.toString().padStart(2, '0')}</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
