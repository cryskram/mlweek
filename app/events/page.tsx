import { Bruno_Ace } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Bruno_Ace({ weight: "400", subsets: ["latin"] });

const Events = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-40 mt-10">
      {/* ML Matrix */}
      <div className="flex flex-col items-center justify-center">
        <h1
          className={`${font.className} text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue`}
        >
          ML Matrix
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black via-black/20 to-black rounded-2xl w-full mt-10 p-10">
          <Image
            className="w-1/3"
            src="/posters/hackathon.png"
            width={4000}
            height={4000}
            alt="ml matrix"
          />
          <div className="px-40 flex flex-col items-center justify-center">
            <p className="text-justify">
              Join us for ML Matrix, a 24-hour AI and machine learning hackathon
              on 19th and 20th October 2024! Tackle challenges in Agritech,
              Fintech, Healthcare, and more, while enjoying a fun mix of coding,
              mini-games, and late-night snacks. With gaming rooms, karaoke, and
              cozy spots to recharge, it&apos;s the perfect mix of innovation
              and fun. Get your ideas ready and dive into the world of AI at ML
              Matrix!
            </p>
            <div className="flex items-center justify-between w-full mt-10">
              <div className="text-center">
                <h1 className={`${font.className} text-fuchsia-400 text-4xl `}>
                  ₹30,000
                </h1>
                <p className="text-2xl">Prize Pool</p>
              </div>
              <div className="text-center">
                <h1 className={`${font.className} text-fuchsia-400 text-4xl `}>
                  2 - 4
                </h1>
                <p className="text-2xl">Team Size</p>
              </div>
            </div>
            <Link
              className="mt-10 text-2xl border-mBlue border-2 px-4 py-2 rounded hover:bg-mBlue transition duration-200 hover:text-black"
              href="https://forms.gle/gbvKWdVQLCxZ7Sfp9"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>

      {/* Tracks for ML Matrix */}
      <div className="mt-10">
        <h1
          className={`${font.className} text-4xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 to-mBlue`}
        >
          Tracks
        </h1>
      </div>

      {/* Innovate ML */}
      <div className="flex flex-col items-center justify-center mt-20">
        <h1
          className={`${font.className} text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue`}
        >
          Innovate ML
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black via-black/20 to-black rounded-2xl w-full mt-10 p-10">
          <Image
            className="w-1/3"
            src="/posters/ideathon.png"
            width={4000}
            height={4000}
            alt="ml matrix"
          />
          <div className="px-40 flex flex-col items-center justify-center">
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
            <div className="flex items-center justify-between w-full mt-10">
              <div className="text-center">
                <h1 className={`${font.className} text-fuchsia-400 text-4xl `}>
                  ₹5,000
                </h1>
                <p className="text-2xl">Prize Pool</p>
              </div>
              <div className="text-center">
                <h1 className={`${font.className} text-fuchsia-400 text-4xl `}>
                  1 - 2
                </h1>
                <p className="text-2xl">Team Size</p>
              </div>
            </div>
            <Link
              className="mt-10 text-2xl border-mBlue border-2 px-4 py-2 rounded hover:bg-mBlue transition duration-200 hover:text-black"
              href="https://forms.gle/Axv5eh9dByre6b4U9"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>

      {/* ML Mastery */}
      <div className="flex flex-col items-center justify-center mt-20">
        <h1
          className={`${font.className} text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue`}
        >
          ML Mastery
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black via-black/20 to-black rounded-2xl w-full mt-10 p-10">
          <Image
            className="w-1/3"
            src="/posters/workshop.png"
            width={4000}
            height={4000}
            alt="ml matrix"
          />
          <div className="px-40 flex flex-col items-center justify-center">
            <p className="text-justify">
              ML Mastery on 16th October 2024 is a hands-on workshop covering
              the essentials of Machine Learning. Learn about data
              preprocessing, model building, and evaluation, while diving into
              topics like hyperparameter tuning and neural networks. With
              practical exercises and real-world applications, this workshop is
              perfect for anyone looking to enhance their ML skills!
            </p>
            <Link
              className="mt-10 text-2xl border-mBlue border-2 px-4 py-2 rounded hover:bg-mBlue transition duration-200 hover:text-black"
              href="https://forms.gle/tHGcmLpfgAW14C5h7"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
