import { Bruno_Ace } from "next/font/google";
import React from "react";

const font = Bruno_Ace({ weight: "400", subsets: ["latin"] });

const OrganizingCommittee = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <h1
        className={`${font.className} text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 to-mBlue`}
      >
        Organizing Committee
      </h1>
    </div>
  );
};

export default OrganizingCommittee;
