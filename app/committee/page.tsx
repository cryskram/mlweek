import Image from "next/image";
import React from "react";

const members = [
  {
    name: "Dheemanth G Athreya",
    designation: "Chairperson",
    image: "/resized/Dheemanth.jpg",
  },
  {
    name: "Tulasikrishna T",
    designation: "Vice Chairperson",
    image: "/resized/Tk1.jpg",
  },
  {
    name: "M B Prajwal",
    designation: "Treasurer",
    image: "/resized/Prajwal1.jpg",
  },
  {
    name: "Manjari Joshi",
    designation: "Secretary",
    image: "/resized/Manjari1.jpg",
  },
  {
    name: "Sanjana Shetty",
    designation: "Joint Secretary",
    image: "/resized/Sanjana1.jpg",
  },
  {
    name: "Aneesh K P",
    designation: "Technical Lead",
    image: "/resized/aneesh.jpeg",
  },
  {
    name: "Sneha N Shastri",
    designation: "Technical Lead",
    image: "/resized/Sneha N Shastri1.jpeg",
  },
];
const sac = [
  {
    name: "Anushree Shetty",
    image: "/resized/Anushree1.jpg",
  },
  {
    name: "Nandan M N",
    image: "/resized/nandan1.jpg",
  },
  {
    name: "Pranati.A.P",
    image: "/resized/Pranati.A.P1.jpg",
  },
  {
    name: "Rishika Nayana Shakthi",
    image: "/resized/Rishika.jpg",
  },
  {
    name: "Sahithi Bollempalli",
    image: "/resized/Sahithi.jpeg",
  },
  {
    name: "Tanisha Prakash",
    image: "/resized/Tanisha1.jpg",
  },
  {
    name: "Vageesh G N",
    image: "/resized/Vageesh.jpg",
  },
];

const Team = () => {
  return (
    <div className="p-8 my-24 md:my-40">
      <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-400 to-blue-500 bg-clip-text text-transparent text-center">
        Core Committee
      </h2>{" "}
      <br /> <br /> <br />
      <div className="flex flex-wrap justify-center gap-6">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-4 border rounded-lg shadow-md"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={500}
              className="w-26 h-26 bg-cover mb-4 bg-transparent"
              style={{ borderRadius: "10px" }}
            />
            <div className="text-center">
              <h3 className="text-blue-500 font-semibold text-lg mb-1">
                {member.name}
              </h3>
              <p className="text-white">{member.designation}</p>
            </div>
          </div>
        ))}
      </div>
      <br /> <br /> <br />
      <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-400 to-blue-500 bg-clip-text text-transparent text-center">
        Student Activities Committee Coordinators
      </h2>{" "}
      <br /> <br /> <br />
      <div className="flex flex-wrap justify-center gap-6">
        {sac.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-4 border rounded-lg shadow-md"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={500}
              className="w-26 h-26 bg-cover mb-4 bg-transparent"
              style={{ borderRadius: "10px" }}
            />
            <div className="text-center">
              <h3 className="text-blue-500 font-semibold text-lg mb-1">
                {member.name}
              </h3>
              {/* <p className="text-white">{member.designation}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
