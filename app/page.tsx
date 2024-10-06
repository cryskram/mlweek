"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Events from "@/components/Events";

const Home = () => {
  const targetDate = new Date("2024-10-14T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return difference > 0
      ? { days, hours, minutes, seconds }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Update timeLeft every second
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col gradient-bg px-4">
      <div className="w-full flex items-center justify-center ">
        <div className="relative z-10 w-full flex flex-col md:flex-row pointer-events-none justify-center items-center mt-10">
          <div className="bg-black/50 px-4 py-6 md:p-8 rounded-lg text-center w-full md:w-2/3 lg:w-[45%] flex flex-col items-center justify-center mt-20 mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-6xl text-mBlue">
              Starts In
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 lg:gap-8 mt-4">
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
              href="#events"
              className="px-4 bg-mBlue/40 border-2 border-mBlue py-2 rounded-xl mt-5 hover:bg-mBlue/90 pointer-events-auto transition duration-200"
            >
              Explore more
            </Link>
          </div>

          <Image
            src="/posters/landing_ml.png"
            width={4000}
            height={4000}
            alt="landing image"
            className="w-full md:w-1/2 mt-2 md:mt-0"
          />
        </div>
      </div>
      <section id="events">
        <Events />
      </section>
    </div>
  );
};

export default Home;
