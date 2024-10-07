import Tracks from "@/components/tracks";
import { Bruno_Ace } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Bruno_Ace({ weight: "400", subsets: ["latin"] });

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center px-0 md:px-40 my-10">
      <h1
        className={`${font.className} text-4xl sm:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 to-mBlue text-center mt-20`}
      >
        Previous Events
      </h1> <br /> <br />
      <div className="flex flex-col items-center justify-center">
        <h1
          className={`${font.className} text-4xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue`}
        >
          Cybersecurity Week
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black via-black/20 to-black rounded-t-2xl w-full mt-10 p-10">
          <Image
            className="w-full md:w-1/3"
            src="/prev_events/general.jpeg"
            width={1000}
            height={1000}
            alt="ml matrix"
          />
          <div className="md:pl-10 flex flex-col items-start justify-center mt-10 md:mt-0">
            <p className="text-justify">
            Cybersecurity Week conducted by BMSCE IEEE Computer Society featured SecureHack, a 24-hour hackathon, and Securathon - an ideathon, highlighting cybersecurity significance. SecureHack had over 500 participants, and Securathon, had around 80+ participants. Both events tackled real-world cybersecurity challenges, with SecureHack offering a prize pool of ₹25,000 and Securathon ₹8,000. Participants showcased their skills in areas like cryptography, network security, and innovative solutions for emerging digital threats, making the event a major success in fostering cybersecurity innovation and collaboration.hallenges.
            </p>
          </div>
        </div>  
      </div>

      <div className="flex flex-col items-center justify-center mt-20">
        <h1
          className={`${font.className} text-4xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue`}
        >
          Entrepreneurship Conclave
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black via-black/20 to-black rounded-t-2xl w-full mt-10 p-10">
          <Image
            className="w-full md:w-1/3"
            src="/prev_events/ec.jpg"
            width={4000}
            height={4000}
            alt="innovate ml"
          />
          <div className="md:pl-10 flex flex-col items-start justify-center mt-10 md:mt-0">
            <p className="text-justify">
            The Entrepreneurship Conclave organized by IEEE CS Bangalore and BMSCE IEEE CS brought together 120 participants for a day of inspiring talks, hands-on workshops, and networking opportunities. The event's highlight was the Startup Spotlight competition, which featured a prize pool of ₹30,000, attracting budding entrepreneurs to showcase their innovative ideas. Sessions provided valuable insights into ideation, pitching, and navigating the world of venture capital. Experts from the startup ecosystem shared their experiences, offering participants practical advice on building and scaling successful ventures in today’s competitive market.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-black via-black/20 to-black rounded-b-2xl w-full mt-0 p-10">
        
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-20">
        <h1
          className={`${font.className} text-4xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue`}
        >
          ML Mastery
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black via-black/20 to-black rounded-2xl rounded-b-none md:rounded-b-2xl w-full mt-10 p-10">
          <Image
            className="w-full md:w-1/3"
            src="/posters/workshop.png"
            width={4000}
            height={4000}
            alt="ml matrix"
          />
          <div className="md:pl-10 flex flex-col items-start justify-center mt-10 md:mt-0">
            <p className="text-justify">
              ML Mastery on 16th October 2024 is a hands-on workshop covering
              the essentials of Machine Learning. Learn about data
              preprocessing, model building, and evaluation, while diving into
              topics like hyperparameter tuning and neural networks. With
              practical exercises and real-world applications, this workshop is
              perfect for anyone looking to enhance their ML skills!
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-black via-black/20 to-black rounded-b-2xl w-full mt-0 p-10 flex justify-center">
          <Link
            className="text-xl border-mBlue border-2 px-6 py-2 rounded hover:bg-mBlue transition duration-200 hover:text-black text-center"
            href="https://forms.gle/9XLwCKxiMjUCu2Ps9"
            target="_blank"
          >
            Register Now
          </Link>
        </div>
      </div>
      <section id="preevents">
        <div className="flex flex-col items-center justify-center mt-20">
          <h1
            className={`${font.className} text-4xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue`}
          >
            Multiverse Mysteries
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black via-black/20 to-black rounded-2xl rounded-b-none md:rounded-b-2xl w-full mt-10 p-10">
            <Image
              className="w-full md:w-1/3"
              src="/posters/multiverse.png"
              width={4000}
              height={4000}
              alt="multivense madness"
            />
            <div className="md:pl-10 flex flex-col items-start justify-center mt-10 md:mt-0">
              <p className="text-justify">
                Get ready for Multiverse Mysteries, an exciting pre-event of
                Machine Learning Week on 8th October 2024! In this unique
                treasure hunt, teams of 4 will split into pairs: two members
                solve online machine learning puzzles, while the other two work
                offline on separate clues. Combine your discoveries to unlock
                the final mystery and dive deeper into the world of ML. It’s a
                thrilling challenge that sharpens your skills and pushes your
                creativity - all while having loads of fun!s, this workshop is
                perfect for anyone looking to enhance their ML skills!
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-black via-black/20 to-black rounded-b-2xl w-full mt-0 p-10 flex justify-center">
            <Link
              className="text-xl border-mBlue border-2 px-6 py-2 rounded hover:bg-mBlue transition duration-200 hover:text-black text-center"
              href="https://forms.gle/Wwb7zPex7sBYXYgF8"
              target="_blank"
            >
              Register Now
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20">
          <h1
            className={`${font.className} text-4xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue`}
          >
            Neural Mania
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black via-black/20 to-black rounded-2xl w-full mt-10 p-10">
            <Image
              className="w-full md:w-1/3"
              src="/posters/neuralmania.png"
              width={4000}
              height={4000}
              alt="ml matrix"
            />
            <div className="md:pl-10 flex flex-col items-start justify-center mt-10 md:mt-0">
              <p className="text-justify">
                Join us for Neural Mania, a fun-filled pre-event of Machine
                Learning Week on 9th October 2024! Participants will compete at
                various game stations, each offering exciting challenges that
                test both skill and strategy. You can play at multiple stations,
                enjoying a mix of fun activities that will keep you on your
                toes. Get ready for a thrilling experience that combines
                competition, entertainment and a thrill of machine learning!
              </p>
            </div>
          </div>
          {/* <div className="bg-gradient-to-r from-black via-black/20 to-black rounded-b-2xl w-full mt-0 p-10 flex justify-center">
          <Link
            className="text-xl border-mBlue border-2 px-6 py-2 rounded hover:bg-mBlue transition duration-200 hover:text-black text-center"
            href="https://forms.gle/Axv5eh9dByre6b4U9"
          >
            Register Now
          </Link>
        </div> */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
