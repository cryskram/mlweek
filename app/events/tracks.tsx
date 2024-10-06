"use client";

import React from "react";
import { Bruno_Ace } from "next/font/google";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa"; 
import { FaLightbulb } from "react-icons/fa"; 

const font = Bruno_Ace({ weight: "400", subsets: ["latin"] });

interface TrackCardProps {
  title: string;
  description: string;
  icon: React.ReactNode; 
}

const TrackCard: React.FC<TrackCardProps> = ({ title, description, icon }) => {
  return (
    <div className="relative bg-gray-800 text-white rounded-lg p-6 shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg overflow-hidden border-4 border-transparent group">
      <div className="text-4xl mb-4">{icon}</div>
      <h2 className={`${font.className} text-2xl md:text-3xl bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-center`}>
        {title}
      </h2>
      <p className="text-center">{description}</p>

      <div className="absolute inset-0 rounded-lg border-4 border-transparent group-hover:border-[rgba(255,0,255,0.7)] transition-all duration-300 ease-in-out"></div>
    </div>
  );
};

const Tracks: React.FC = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <TrackCard
          title="Fintech"
          description="Level up your financial strategies and embrace the future of finance. Explore innovative solutions that redefine money management."
          icon={<FaMoneyBillTrendUp />}
        />
        <TrackCard
          title="Healthcare"
          description="Get ready for immersive simulations where the stakes are high. Outsmart agile hackers targeting valuable medical data."
          icon={<FaHeartbeat />}
        />
        <TrackCard
          title="Open Innovation"
          description="Unleash your creativity on a blank canvas! Explore wild ideas and work on unconventional projects."
          icon={<FaLightbulb />}
        />
      </div>
    </div>
  );
};

export default Tracks;
