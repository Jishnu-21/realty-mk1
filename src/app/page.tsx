'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 4); // Set target 9 days from now
    targetDate.setHours(23, 59, 59, 999); // End of the 9th day

    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-bl from-pink-500 to-purple-600 flex flex-col items-center text-white animate-fadeIn">
      <div className="mt-10 mb-auto flex flex-col items-center">
        <Image
          src="/logo.svg" 
          alt="Logo"
          width={250}
          height={250}
        />
        <h2 className="text-lg text-gray-900 font-normal uppercase m-0 tracking-[.3em]">Realty</h2>
      </div>
      <h1 className="text-4xl sm:text-5xl text-center px-4 whitespace-nowrap">We are <b>Almost</b> there!</h1>
      <p className="text-center px-4">Stay tuned for something amazing!!!</p>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-6 md:grid-cols-4 md:gap-x-8 md:gap-y-8 mt-10 mb-20 w-full px-12 max-w-xl lg:max-w-4xl xl:max-w-5xl lg:mt-20">
        <div className="bg-transparent border text-center p-4 sm:p-5 lg:p-8 rounded-lg">
          <p className="text-4xl sm:text-5xl lg:text-7xl font-bold py-2 sm:py-3 lg:py-5">{timeLeft.days}</p>
          <hr className="my-1 sm:my-2"/>
          <p className="text-sm sm:text-base lg:text-xl py-1 sm:py-2">days</p>
        </div>

        <div className="bg-transparent border text-center p-4 sm:p-5 lg:p-8 rounded-lg">
          <p className="text-4xl sm:text-5xl lg:text-7xl font-bold py-2 sm:py-3 lg:py-5">{String(timeLeft.hours).padStart(2, '0')}</p>
          <hr className="my-1 sm:my-2"/>
          <p className="text-sm sm:text-base lg:text-xl py-1 sm:py-2">hours</p>
        </div>

        <div className="bg-transparent border text-center p-4 sm:p-5 lg:p-8 rounded-lg">
          <p className="text-4xl sm:text-5xl lg:text-7xl font-bold py-2 sm:py-3 lg:py-5">{String(timeLeft.minutes).padStart(2, '0')}</p>
          <hr className="my-1 sm:my-2"/>
          <p className="text-sm sm:text-base lg:text-xl py-1 sm:py-2">mins</p>
        </div>

        <div className="bg-transparent border text-center p-4 sm:p-5 lg:p-8 rounded-lg">
          <p className="text-4xl sm:text-5xl lg:text-7xl font-bold py-2 sm:py-3 lg:py-5">{String(timeLeft.seconds).padStart(2, '0')}</p>
          <hr className="my-1 sm:my-2"/>
          <p className="text-sm sm:text-base lg:text-xl py-1 sm:py-2">secs</p>
        </div>
      </div>
      
      <footer className="text-center mt-auto pb-10">
        <p>&copy; 2025 3rdshade Realty. All rights reserved.</p>
      </footer>
    </div>
  );
}
