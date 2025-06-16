'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 9,
    hours: 3,
    minutes: 35,
    seconds: 1
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-bl from-pink-500 to-purple-600 flex flex-col justify-center items-center text-white animate-fadeIn">
      <h1 className="text-5xl">We are <b>Almost</b> there!</h1>
      <p>Stay tuned for something amazing!!!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 lg:mt-20">
        <div className="bg-transparent border text-center">
          <p className="text-5xl px-10 py-5">{timeLeft.days}</p>
          <hr />
          <p className="px-10 py-5">days</p>
        </div>

        <div className="bg-transparent border text-center">
          <p className="text-5xl px-10 py-5">{String(timeLeft.hours).padStart(2, '0')}</p>
          <hr />
          <p className="px-10 py-5">hours</p>
        </div>

        <div className="bg-transparent border text-center">
          <p className="text-5xl px-10 py-5">{String(timeLeft.minutes).padStart(2, '0')}</p>
          <hr />
          <p className="px-10 py-5">mins</p>
        </div>

        <div className="bg-transparent border text-center">
          <p className="text-5xl px-10 py-5">{String(timeLeft.seconds).padStart(2, '0')}</p>
          <hr />
          <p className="px-10 py-5">secs</p>
        </div>
      </div>

    </div>
  );
}
