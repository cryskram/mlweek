import { Bruno_Ace } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Bruno_Ace({ weight: "400", subsets: ["latin"] });

const Events = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 md:px-40 my-10">
      <div className="flex flex-col items-center justify-center mt-20">
        <h1
          className={`${font.className} text-4xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue`}
        >
          ML Matrix
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black via-black/20 to-black rounded-t-2xl w-full mt-10 p-10">
          <Image
            className="w-full md:w-1/3"
            src="/posters/hackathon.png"
            width={4000}
            height={4000}
            alt="ml matrix"
          />
          <div className="md:pl-10 flex flex-col items-start justify-center mt-10 md:mt-0">
            <p className="text-justify">
              Join us for ML Matrix, a 24-hour AI and machine learning hackathon
              on 19th and 20th October 2024! Tackle challenges in Agritech,
              Fintech, Healthcare, and more, while enjoying a fun mix of coding,
              mini-games, and late-night snacks. With gaming rooms, karaoke, and
              cozy spots to recharge, it&apos;s the perfect mix of innovation
              and fun. Get your ideas ready and dive into the world of AI at ML
              Matrix!
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-black via-black/20 to-black rounded-b-2xl w-full mt-0 p-10">
          <div className="flex flex-col md:flex-row gap-5 md:gap-20 items-center justify-center w-full">
            <div className="text-center">
              <p className="text-2xl">Prize Pool</p>
              <h1
                className={`${font.className} text-fuchsia-400 text-3xl md:text-4xl`}
              >
                ₹30,000
              </h1>
            </div>
            <div className="text-center">
              <p className="text-2xl">Team Size</p>
              <h1
                className={`${font.className} text-fuchsia-400 text-3xl md:text-4xl`}
              >
                2 - 4
              </h1>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Link
              className="text-xl border-mBlue border-2 px-6 py-2 rounded hover:bg-mBlue transition duration-200 hover:text-black text-center"
              href="https://docs.google.com/forms/d/e/1FAIpQLScNh4dxelD5YcZpP03x-oar2u-da1AoluJgV5nHF240zuSi0Q/viewform"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1
          className={`${font.className} text-2xl md:text-4xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 to-mBlue`}
        >
          Tracks
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center mt-20">
        <h1
          className={`${font.className} text-4xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue`}
        >
          Innovate ML
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black via-black/20 to-black rounded-t-2xl w-full mt-10 p-10">
          <Image
            className="w-full md:w-1/3"
            src="/posters/ideathon.png"
            width={4000}
            height={4000}
            alt="ml matrix"
          />
          <div className="md:pl-10 flex flex-col items-start justify-center mt-10 md:mt-0">
            <p className="text-justify">
              InnovateML is a one-day ideathon happening on 14th October 2024,
              focused on tackling real-world challenges in Healthcare, Finance,
              and Sustainability. Participants will engage in brainstorming,
              prototyping, and pitching innovative solutions with guidance from
              experienced mentors. With a gamified approach that rewards early
              milestone completion, along with expert keynote sessions,
              InnovateML is the perfect platform to collaborate, learn, and
              develop impactful machine learning solutions!
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-black via-black/20 to-black rounded-b-2xl w-full mt-0 p-10">
          <div className="flex flex-col md:flex-row gap-5 md:gap-20 items-center justify-center w-full">
            <div className="text-center">
              <p className="text-2xl">Prize Pool</p>
              <h1
                className={`${font.className} text-fuchsia-400 text-3xl md:text-4xl`}
              >
                ₹5,000
              </h1>
            </div>
            <div className="text-center">
              <p className="text-2xl">Team Size</p>
              <h1
                className={`${font.className} text-fuchsia-400 text-3xl md:text-4xl`}
              >
                1 - 2
              </h1>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Link
              className="text-xl border-mBlue border-2 px-6 py-2 rounded hover:bg-mBlue transition duration-200 hover:text-black text-center"
              href="https://forms.gle/Axv5eh9dByre6b4U9"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-20">
        <h1
          className={`${font.className} text-4xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue`}
        >
          ML Mastery
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black via-black/20 to-black rounded-2xl w-full mt-10 p-10">
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
            href="https://forms.gle/Axv5eh9dByre6b4U9"
          >
            Register Now
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-20">
        <h1
          className={`${font.className} text-4xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue`}
        >
          Multiverse Mysteries
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black via-black/20 to-black rounded-2xl w-full mt-10 p-10">
          <Image
            className="w-full md:w-1/3"
            src="/posters/multiverse.png"
            width={4000}
            height={4000}
            alt="ml matrix"
          />
          <div className="md:pl-10 flex flex-col items-start justify-center mt-10 md:mt-0">
            <p className="text-justify">
              Get ready for Multiverse Mysteries, an exciting pre-event of
              Machine Learning Week on 8th October 2024! In this unique treasure
              hunt, teams of 4 will split into pairs: two members solve online
              machine learning puzzles, while the other two work offline on
              separate clues. Combine your discoveries to unlock the final
              mystery and dive deeper into the world of ML. It’s a thrilling
              challenge that sharpens your skills and pushes your creativity -
              all while having loads of fun!s, this workshop is perfect for
              anyone looking to enhance their ML skills!
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-black via-black/20 to-black rounded-b-2xl w-full mt-0 p-10 flex justify-center">
          <Link
            className="text-xl border-mBlue border-2 px-6 py-2 rounded hover:bg-mBlue transition duration-200 hover:text-black text-center"
            href="https://forms.gle/tHGcmLpfgAW14C5h7"
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
              various game stations, each offering exciting challenges that test
              both skill and strategy. You can play at multiple stations,
              enjoying a mix of fun activities that will keep you on your toes.
              Get ready for a thrilling experience that combines competition,
              entertainment and a thrill of machine learning!
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-black via-black/20 to-black rounded-b-2xl w-full mt-0 p-10 flex justify-center">
          <Link
            className="text-xl border-mBlue border-2 px-6 py-2 rounded hover:bg-mBlue transition duration-200 hover:text-black text-center"
            href="https://forms.gle/Axv5eh9dByre6b4U9"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
