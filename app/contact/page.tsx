import { Bruno_Ace } from "next/font/google";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const font = Bruno_Ace({ weight: "400", subsets: ["latin"] });

const Contact = () => {
  return (
    <div className="my-10 flex flex-col items-center justify-center w-full">
      <h1
        className={`${font.className} text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 to-mBlue`}
      >
        Get In Touch
      </h1>
      <form
        className="flex flex-col gap-2 w-full max-w-screen-md mt-10"
        action=""
      >
        <input
          className="text-xl rounded-xl px-6 py-4 outline-none bg-white/20"
          type="email"
          name="email"
          id="email"
          placeholder="Email ID"
        />
        <textarea
          className="text-xl rounded-xl px-6 py-4 outline-none bg-white/20"
          name="message"
          id="message"
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
    </div>
  );
};

export default Contact;
