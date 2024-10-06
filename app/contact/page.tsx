"use client";

import axios from "axios";
import { Bruno_Ace } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const font = Bruno_Ace({ weight: "400", subsets: ["latin"] });

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/mail", {
        email,
        message,
      });
      const res = response.data;

      if (res.success) {
        setMessage("Registration Successful. We Will get back to you shortly.");
        setModal(true);
      }
    } catch (error) {
      console.log(error);
      setMessage("Registration Failed. Try again later");
      setModal(true);
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="my-10 flex flex-col items-center justify-center w-full mt-[7rem] sm:mt-[7rem] px-4 md:px-10">
      <h1
        className={`${font.className} text-4xl sm:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 to-mBlue text-center`}
      >
        Get In Touch
      </h1>
      <form
        className="flex flex-col gap-4 w-full max-w-screen-sm mt-8 md:mt-10"
        onSubmit={handleSubmit}
      >
        <input
          className="text-lg sm:text-xl rounded-lg px-4 py-3 sm:px-6 sm:py-4 outline-none bg-white/20 placeholder-white/70"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          placeholder="Email ID"
        />
        <textarea
          className="text-lg sm:text-xl rounded-lg px-4 py-3 sm:px-6 sm:py-4 outline-none bg-white/20 placeholder-white/70"
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          cols={30}
          rows={6}
          placeholder="Message"
        ></textarea>
        <button className="bg-mBlue border-2 border-mBlue hover:bg-transparent transition duration-200 text-lg sm:text-2xl px-3 sm:px-4 py-2 rounded mt-4 w-full">
          Submit
        </button>
      </form>

      <p className="text-lg sm:text-xl mt-8 md:mt-10 text-center">
        Or reach out to our Social Media
      </p>
      <div className="mt-3 flex gap-6 justify-center">
        <Link href="https://www.instagram.com/bmsce_ieeecs/" target="_blank">
          <FaInstagram size={28} />
        </Link>
        <Link
          href="https://www.linkedin.com/company/bmsce-ieee-computer-society"
          target="_blank"
        >
          <FaLinkedin size={28} />
        </Link>
      </div>
      
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
            <h2 className="text-xl font-bold text-center mb-4">Success!</h2>
            <p className="text-center">{message}</p>
            <button
              className="bg-mGreen px-4 py-2 text-white font-medium rounded-lg mt-4 mx-auto block"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
