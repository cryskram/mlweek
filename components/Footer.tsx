import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center py-4 px-0 md:px-6 mx-auto">
      <div className="w-full flex flex-col items-center justify-center">
        <Image
          src="/bmsce-ieee-cs.png"
          width={200}
          height={200}
          className="w-full md:w-1/2"
          alt="logo"
        />
        <p className="mt-4 text-justify">
          BMSCE IEEE Computer Society, started in 2021, saw more than 300
          participants enrolling in the first year itself. The chapter has since
          then worked together to enhance and upskill the technical knowledge of
          its members. The events covered a variety of fields from the national
          level hackathon which saw tech enthusiasts around the nation
          participating to fun events enriching the participants&apos; cognitive
          skills. The chapter has witnessed over 50 successful events held both
          in the online and offline mode.
        </p>
      </div>
      <div className="w-full mx-auto px-4 mt-4 md:mt-0">
        <div className="flex-1 w-full md:w-1/2 mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.2409090360702!2d77.5649372349438!3d12.940991383495657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158b11e34d2f%3A0x5f4adbdbab8bd80f!2sBMS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1723282951998!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h3 className="text-xl font-bold mt-4 mb-2 lg:mb-0 mx-auto">
            B.M.S. College of Engineering
          </h3>
          <div className="flex justify-center w-full mt-2">
            <a
              href="https://linktr.ee/bmsce_ieeecs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="p-2 rounded-full border border-current hover:bg-orange transition-colors mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m13.736 5.853l4.005-4.117l2.325 2.38l-4.2 4.005h5.908v3.305h-5.937l4.229 4.108l-2.325 2.334l-5.74-5.769l-5.741 5.769l-2.325-2.325l4.229-4.108H2.226V8.121h5.909l-4.2-4.004l2.324-2.381l4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
