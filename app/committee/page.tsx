import Image from "next/image";
import React from "react";

const members = [
  {
    name: "Dheemanth G Athreya",
    designation: "Chairperson",
    image: "/resized/Dheemanth.jpg",
    linkedin: "https://www.linkedin.com/in/dheemanth-athreya/?originalSubdomain=in",
  },
  {
    name: "Tulasikrishna T",
    designation: "Vice Chairperson",
    image: "/resized/Tk1.jpg",
    linkedin: "https://www.linkedin.com/in/tulasikrishna-tammina-20849924a/?originalSubdomain=in",
  },
  {
    name: "M B Prajwal",
    designation: "Treasurer",
    image: "/resized/Prajwal1.jpg",
    linkedin: "https://www.linkedin.com/in/m-b-prajwal/",
  },
  {
    name: "Manjari Joshi",
    designation: "Secretary",
    image: "/resized/Manjari1.jpg",
    linkedin: "https://www.linkedin.com/in/manjari-joshi2004/",
  },
  {
    name: "Sanjana Shetty",
    designation: "Joint Secretary",
    image: "/resized/Sanjana1.jpg",
    linkedin: "https://www.linkedin.com/in/sanjana-shetty-b77163212/",
  },
  {
    name: "Aneesh K P",
    designation: "Technical Lead",
    image: "/resized/aneesh.jpeg",
    linkedin: "https://www.linkedin.com/in/aneesh-k-p-394a71259/",
  },
  {
    name: "Sneha N Shastri",
    designation: "Technical Lead",
    image: "/resized/Sneha N Shastri1.jpeg",
    linkedin: "https://www.linkedin.com/in/sneha-n-shastri-b37299257/",
  },
];
const sac = [
  {
    name: "Anushree Shetty",
    image: "/resized/Anushree1.jpg",
    linkedin: "https://www.linkedin.com/in/anushree-shetty-a7882a23b/",
  },
  {
    name: "Nandan M N",
    image: "/resized/nandan1.jpg",
    linkedin: "https://www.linkedin.com/in/nandan-m-n-3143102b9/",
  },
  {
    name: "Pranati.A.P",
    image: "/resized/Pranati.A.P1.jpg",
    linkedin: "https://www.linkedin.com/in/pranati-a-p-207343293/",
  },
  {
    name: "Rishika Nayana Shakthi",
    image: "/resized/Rishika.jpg",
    linkedin: "https://www.linkedin.com/in/rishika-nayana-shakthi-94b796294/",
  },
  {
    name: "Sahithi Bollempalli",
    image: "/resized/Sahithi.jpeg",
    linkedin: "https://www.linkedin.com/in/b-sai-sahithi-5890b2295/",
  },
  {
    name: "Tanisha Prakash",
    image: "/resized/Tanisha1.jpg",
    linkedin: "https://www.linkedin.com/in/tanisha-prakash-78a644312/",
  },
  {
    name: "Vageesh G N",
    image: "/resized/Vageesh.jpg",
    linkedin: "https://www.linkedin.com/in/vageesh-g-n-a57b311b8/",
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
          > <a href={member.linkedin} target="_blank"  rel="noopener noreferrer">
              <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={500}
              className="w-26 h-26 bg-cover mb-4 bg-transparent"
              style={{ borderRadius: "10px" }}
            />
          </a>
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
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={500}
              className="w-26 h-26 bg-cover mb-4 bg-transparent"
              style={{ borderRadius: "10px" }}
            />
            </a>
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
