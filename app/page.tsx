'use client'

import React, { useState } from 'react';
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

  return (
    <div className="relative h-screen w-full overflow-hidden flex">
      <EvervaultCard className="absolute inset-0" />
      
      <div className="relative z-10 flex flex-col items-start justify-center h-full w-1/2 text-white pointer-events-none p-8">

        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-left">
          <h2 className="text-4xl md:text-6xl mb-8 font-light text-blue-200 text-center">
            Starts In
          </h2>

          <div className="grid grid-cols-4 gap-4 md:gap-8 mb-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <span className="text-3xl md:text-5xl font-bold">
                  {value.toString().padStart(2, '0')}
                </span>
                <span className="text-sm md:text-lg capitalize mt-2">
                  {unit}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button className="px-6 py-3 border-2 border-blue-400 rounded-lg hover:bg-blue-400/20 transition-colors duration-300 pointer-events-auto">
          Explore Events and Workshops
        </button>
      </div>

      <div className="relative z-10 h-full w-3/4 pointer-events-none mt-[-4rem] mr-0">
        <Image 
          src={poster}
          alt="ML Week" 
          layout="fill" 
          objectFit="cover" 
          className="pointer-events-none" 
        />
      </div>
    </div>
  );
};

export default Home;
