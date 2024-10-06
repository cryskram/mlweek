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
    <div className="my-10 flex flex-col items-center justify-center w-full">
      <h1
        className={`${font.className} text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 to-mBlue`}
      >
        Get In Touch
      </h1>
      <form
        className="flex flex-col gap-2 w-full max-w-screen-md mt-10"
        onSubmit={handleSubmit}
      >
        <input
          className="text-xl rounded-xl px-6 py-4 outline-none bg-white/20"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          placeholder="Email ID"
        />
        <textarea
          className="text-xl rounded-xl px-6 py-4 outline-none bg-white/20"
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          cols={30}
          rows={10}
          placeholder="Message"
        ></textarea>
      </form>
      <button className="bg-mBlue border-2 border-mBlue hover:bg-transparent transition duration-200 text-2xl px-4 py-2 rounded mt-5">
        Submit
      </button>

      <p className="text-xl mt-10">Or reach out to our Social Media</p>
      <div className="mt-1 flex gap-4">
        <Link href="https://www.instagram.com/bmsce_ieeecs/">
          <FaInstagram size={30} />
        </Link>
        <Link href="https://www.linkedin.com/company/bmsce-ieee-computer-society">
          <FaLinkedin size={30} />
        </Link>
      </div>
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
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
