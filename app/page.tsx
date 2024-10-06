'use client';

import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountDown';
import { EvervaultCard } from './evervault-card';
import Image from 'next/image';
import poster from "../public/posters/landing_ml.png";

const Home = () => {
  const targetDate = new Date('2024-10-14T00:00:00');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      if (difference > 0) {
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <EvervaultCard className="absolute inset-0" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full text-white pointer-events-none p-4">

        <div className="w-full md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 md:w-1/2 lg:w-3/5 pointer-events-none mb-2 md:mb-0">
 
          <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[50rem] lg:h-[50rem]">
            <Image
              src={poster}
              alt="ML Week"
              layout="fill"
              objectFit="contain"
              className="pointer-events-none"
            />
          </div>
        </div>


        <div className="w-full md:w-1/2 lg:w-2/5 md:absolute md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 flex flex-col items-center md:items-start justify-center">
          <div className="bg-black bg-opacity-50 p-4 md:p-8 rounded-lg text-center md:text-left w-full max-w-lg ml-0 md:ml-[3rem]">
            <h2 className="text-3xl md:text-4xl lg:text-6xl mb-4 md:mb-8 font-light text-blue-200 text-center">
              Starts In
            </h2>

            <div className="grid grid-cols-4 gap-2 md:gap-4 lg:gap-8 mb-4 md:mb-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                  <span className="text-2xl md:text-3xl lg:text-5xl font-bold">
                    {value.toString().padStart(2, '0')}
                  </span>
                  <span className="text-xs md:text-sm lg:text-lg capitalize mt-1 md:mt-2">
                    {unit}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center">
              <button className="px-4 md:px-6 py-2 md:py-3 border-2 border-blue-400 rounded-lg hover:bg-blue-400/20 transition-colors duration-300 pointer-events-auto text-sm md:text-base">
                Explore Events and Workshops
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;