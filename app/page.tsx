"use client";

import React, { useState, useEffect } from "react";
import { EvervaultCard } from "./evervault-card";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const targetDate = new Date("2024-10-14T00:00:00");

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
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <EvervaultCard className="absolute inset-0" />
      <div className="relative z-10 w-full flex flex-col md:flex-row pointer-events-none justify-center items-center">
        <div className="bg-black/50 px-4 py-6 md:p-8 rounded-lg text-center w-1/3 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-mBlue">
            Starts in
          </h1>
          <div className="grid grid-cols-4 gap-2 md:gap-4 lg:gap-8 mt-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl lg:text-5xl font-bold">
                  {value.toString().padStart(2, "0")}
                </span>
                <span className="text-xs md:text-sm lg:text-lg capitalize mt-1 md:mt-2">
                  {unit}
                </span>
              </div>
            ))}
          </div>
          <Link
            href="/events"
            className="px-4 bg-mBlue/40 border-2 border-mBlue py-2 rounded-xl mt-5 hover:bg-mBlue/90 pointer-events-auto transition duration-200"
          >
            Explore Events and Workshops
          </Link>
        </div>

        <Image
          src="/posters/landing_ml.png"
          width={4000}
          height={4000}
          alt="landing image"
          className="w-full md:w-1/2"
        />
      </div>
    </div>
  );
};

export default Home;
