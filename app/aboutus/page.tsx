import { Bruno_Ace } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Bruno_Ace({ weight: "400", subsets: ["latin"] });

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center px-0 md:px-40 my-10">
      <div className="flex flex-col items-center justify-center">
        <h1
          className={`${font.className} text-4xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue mt-20`}
        >
          About Us
        </h1>

        <div className="flex flex-col items-center bg-gradient-to-r from-black via-black/20 to-black rounded-2xl w-full mt-10 p-10">
          <div className="mt-6 md:mt-8 w-full md:w-[90%]">
            <p className="text-justify">
              The IEEE Computer Society connects and empowers people in computer
              science and engineering. We support professionals at every stage
              of their careers with tools like international conferences,
              peer-reviewed journals, a vast digital library, and recognized
              standards.
              <br /> <br />
              As the leading global organization in computer science, we advance
              the theory and practice of technology, helping our members stay
              ahead. From learning opportunities to collaboration, the IEEE
              Computer Society offers everything you need to keep pushing
              technology forward.
            </p>
          </div>
        </div>
      </div>{" "}
      <br /> <br /> <br />
      <h2
        className={`${font.className} text-4xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue`}
      >
        Chapter Advisor
      </h2>{" "}
      <br /> <br />
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col items-center w-full sm:w-[40%] md:w-[35%] p-4 border rounded-lg shadow-md">
          <a
            href="https://bmsce.ac.in/home/facultyProfile/156/Dr-SANDEEP-VARMA-N"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/people/sv.jpg"
              alt="Sandeep Varma"
              width={700}
              height={700}
              className="w-26 h-26 bg-cover mb-4 bg-transparent"
              style={{ borderRadius: "10px" }}
            />
          </a>
          <div className="text-center">
            <h3 className="text-blue-500 font-semibold text-lg mb-1">
              Dr. Sandeep Varma N
            </h3>
          </div>
        </div>
      </div>
      <br /> <br />
      <div className="flex flex-col items-center justify-center">
        <h1
          className={`${font.className} text-5xl sm:text-6xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 to-mBlue text-center mt-20`}
        >
          Previous Events
        </h1>{" "}
        <br /> <br />
        <h1
          className={`${font.className} text-3xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue`}
        >
          Cybersecurity Week
        </h1>
        <div className="flex flex-col items-center bg-gradient-to-r from-black via-black/20 to-black rounded-2xl w-full mt-10 p-10">
          <Image
            className="w-full md:w-3/4 rounded-2xl"
            src="/prev_events/cyber.jpg"
            width={1000}
            height={1000}
            alt="Cybersecurity Week Event"
          />
          <div className="mt-6 md:mt-8 w-full md:w-[90%]">
            <p className="text-justify">
              <span className="text-fuchsia-400 font-bold">
                Cybersecurity Week
              </span>{" "}
              conducted by{" "}
              <span className="text-fuchsia-400 font-bold">
                BMSCE IEEE Computer Society
              </span>{" "}
              featured
              <span className="text-fuchsia-400 font-bold"> SecureHack</span>, a
              24-hour hackathon, and
              <span className="text-fuchsia-400 font-bold"> Securathon</span>—an
              ideathon, highlighting the importance of cybersecurity.
              <span className="text-fuchsia-400 font-bold">
                {" "}
                SecureHack
              </span>{" "}
              attracted over{" "}
              <span className="text-fuchsia-400 font-bold">
                500 participants
              </span>
              , while
              <span className="text-fuchsia-400 font-bold">
                {" "}
                Securathon
              </span>{" "}
              had around{" "}
              <span className="text-fuchsia-400 font-bold">
                80+ participants
              </span>
              . Both events focused on real-world cybersecurity challenges,
              offering prize pools of
              <span className="text-fuchsia-400 font-bold"> ₹25,000</span> for
              SecureHack and{" "}
              <span className="text-fuchsia-400 font-bold"> ₹8,000</span> for
              Securathon. Participants demonstrated skills in areas such as
              cryptography, network security, and provided innovative solutions
              to emerging digital threats, making the event a resounding success
              in fostering cybersecurity innovation and collaboration.
            </p>
          </div>
        </div>
      </div>{" "}
      <br /> <br /> <br />
      <div className="flex flex-col items-center justify-center">
        <h1
          className={`${font.className} text-3xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue`}
        >
          Entrepreneurship Conclave
        </h1>

        <div className="flex flex-col items-center bg-gradient-to-r from-black via-black/20 to-black rounded-2xl w-full mt-10 p-10">
          <Image
            className="w-full md:w-3/4 rounded-2xl"
            src="/prev_events/ec.jpg"
            width={1000}
            height={1000}
            alt="Cybersecurity Week Event"
          />
          <div className="mt-6 md:mt-8 w-full md:w-[90%]">
            <p className="text-justify">
              The{" "}
              <span className="text-pink-400 font-bold">
                Entrepreneurship Conclave
              </span>{" "}
              organized in collaboartion with{" "}
              <span className="text-pink-400 font-bold">
                IEEE CS Bangalore Chapter
              </span>{" "}
              brought together{" "}
              <span className="text-pink-400 font-bold">120 participants</span>{" "}
              for a day filled with inspiring talks, hands-on workshops, and
              networking opportunities. The event’s highlight was the{" "}
              <span className="text-pink-400 font-bold">
                Startup Spotlight competition
              </span>
              , featuring a prize pool of{" "}
              <span className="text-pink-400 font-bold">₹30,000</span>,
              attracting budding entrepreneurs to showcase their innovative
              ideas. Sessions provided valuable insights into{" "}
              <span className="text-pink-400 font-bold">ideation</span>,{" "}
              <span className="text-pink-400 font-bold">pitching</span>, and
              navigating the world of{" "}
              <span className="text-pink-400 font-bold">venture capital</span>.
              Experts from the startup ecosystem shared their experiences,
              offering participants practical advice on building and scaling
              successful ventures in today’s competitive market.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-black via-black/20 to-black rounded-b-2xl w-full mt-0 p-10"></div>
      </div>{" "}
      <br /> <br /> <br />
      <div className="flex flex-col items-center justify-center">
        <h1
          className={`${font.className} text-4xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue`}
        >
          Devsprints
        </h1>

        <div className="flex flex-col items-center bg-gradient-to-r from-black via-black/20 to-black rounded-2xl w-full mt-10 p-10">
          <Image
            className="w-full md:w-3/4 rounded-2xl"
            src="/prev_events/dev.jpg"
            width={1000}
            height={1000}
            alt="Cybersecurity Week Event"
          />
          <div className="mt-6 md:mt-8 w-full md:w-[90%]">
            <p className="text-justify">
              Hosted in collaboration with IEEE Sight,{" "}
              <span className="text-pink-400 font-bold">Devsprints</span> was a
              dynamic{" "}
              <span className="text-pink-400 font-bold">
                24-hour Web Development CTF Hackathon
              </span>{" "}
              that brought together{" "}
              <span className="text-pink-400 font-bold">100+ participants</span>{" "}
              from various backgrounds. The participants were tasked with
              solving real-world challenges centered around the United Nations{" "}
              <span className="text-pink-400 font-bold">
                Sustainable Development Goals(SDGs)
              </span>
              , aiming to create innovative solutions with web technologies.
              Teams collaborated intensively to compete for a{" "}
              <span className="text-pink-400 font-bold">
                ₹15,000 Prize Pool
              </span>
              , pushing their technical skills to the limit. The event not only
              tested their proficiency in web development but also fostered
              critical problem-solving, teamwork, and creativity.
            </p>
          </div>
        </div>
      </div>{" "}
      <br /> <br /> <br />
      {/* <div className="flex flex-col items-center justify-center">
        <h1
            className={`${font.className} text-4xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue`}
        >
            Hackaphasia
        </h1>

        <div className="flex flex-col items-center bg-gradient-to-r from-black via-black/20 to-black rounded-2xl w-full mt-10 p-10">
            <Image
                className="w-full md:w-3/4 rounded-2xl"
                src="/prev_events/ec.jpg"
                width={1000}
                height={1000}
                alt="Cybersecurity Week Event"
            />
            <div className="mt-6 md:mt-8 w-full md:w-[90%]">
                <p className="text-justify">
                    BMSCE IEEE Computer Society in collaboration with <span className="text-pink-400 font-bold">Innokrish Technologies</span> hosted <span className="text-pink-400 font-bold">Hackaphasia, a 24-hour AI Hackathon during Phaseshift 2023,</span>, focusing on autonomous chatbot development. The event saw <span className="text-pink-400 font-bold">70+ participants</span>. Five clues were revealed, aiding in the creation of chatbots without external API dependencies. Participants refined their projects, which were judged on accuracy, UI/UX, hallucinations, dependencies, and efficiency.
                </p>
            </div>
        </div>
    </div> <br /> <br /> <br /> */}
      <div className="flex flex-col items-center justify-center">
        <h1
          className={`${font.className} text-4xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue`}
        >
          Cymaplog 2.0
        </h1>
        <div className="flex flex-col items-center bg-gradient-to-r from-black via-black/20 to-black rounded-2xl w-full mt-10 p-10">
          <Image
            className="w-full md:w-3/4 rounded-2xl"
            src="/prev_events/cymaplog.png"
            width={1000}
            height={1000}
            alt="Cybersecurity Week Event"
          />
          <div className="mt-6 md:mt-8 w-full md:w-[90%]">
            <p className="text-justify">
              It was conducted in collaboration with{" "}
              <span className="text-pink-400 font-bold">BMSCE ISRC</span>. This
              societal-impact event spanned five hours from 6:30 am to 11:30 am
              and aimed to{" "}
              <span className="text-pink-400 font-bold">
                promote green urban mobility
              </span>{" "}
              and a healthy lifestyle in Bengaluru. CYMAPLOG 2.0 featured a
              triathlon comprising three activities. Firstly, there was a{" "}
              <span className="text-pink-400 font-bold">cyclothon</span>{" "}
              covering a 7 km stretch from B.M.S. College of Engineering to
              Cubbon Park. Following this, there was a{" "}
              <span className="text-pink-400 font-bold">marathon</span> to
              Century Club. Participants also engaged in a{" "}
              <span className="text-pink-400 font-bold">plog race</span>,
              focused on cleaning hotspots in Cubbon Park where trash was
              abundantly found.
            </p>
          </div>
        </div>{" "}
        <br /> <br /> <br />
        <div className="flex flex-col items-center justify-center">
          <h1
            className={`${font.className} text-5xl md:text-6xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue`}
          >
            Initiatives
          </h1>
          <div className="flex flex-col items-center bg-gradient-to-r from-black via-black/20 to-black rounded-2xl w-full mt-10 p-10 pt-0">
            <Image
              className="mt-0 md:-mt-10 my-4"
              src="/prev_events/wings.png"
              width={500}
              height={500}
              alt="Cybersecurity Week Event"
            />
            <div className="w-full md:w-[90%] mt-[-10%]">
              <p className="text-justify">
                <span className="text-pink-400 font-bold">Wings</span> is a
                unique learning community with two sections:{" "}
                <span className="text-pink-400 font-bold">
                  Competitive Programming Wing
                </span>{" "}
                and{" "}
                <span className="text-pink-400 font-bold">
                  Web Development Wing
                </span>
                , catering to students at all levels. It provides a supportive
                environment for technical upskilling and innovation.
                <br /> <br />
                The Competitive Programming wing offers{" "}
                <span className="text-pink-400 font-bold">
                  daily questions and engaging contests
                </span>{" "}
                to enhance skills through healthy competition. The Web
                Development wing focuses on building and collaborating on{" "}
                <span className="text-pink-400 font-bold">
                  innovative web applications
                </span>
                , fostering{" "}
                <span className="text-pink-400 font-bold">peer learning.</span>
                <br /> <br />
                Guided by{" "}
                <span className="text-pink-400 font-bold">
                  experienced mentors
                </span>
                , members can seek advice and make valuable connections. Through
                various events like workshops and hackathons, Wings is dedicated
                to reshaping the culture of learning and innovation within the
                student community.
              </p>
            </div>
          </div>{" "}
          <br /> <br /> <br />
          {/* <div className="flex flex-col items-center justify-center">
    <h1
        className={`${font.className} text-5xl md:text-6xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue mb-10`}
    >
        Other Events
    </h1>

    <div className="flex flex-col md:flex-row items-center rounded-2xl w-full mt-10 p-10 pt-0 gap-10">
        <div className="flex flex-col items-center w-full md:w-1/2 bg-gradient-to-r from-black via-black/20 to-black rounded-2xl p-10 h-full text-left">
            <h2 className="text-3xl font-bold text-fuchsia-400 mb-4">Workshops</h2>
            <ul className="list-disc list-inside text-fuchsia-400">
                <li className="relative text-white mb-3">
                    <span className="glowing-bullet"></span> Open Source Development
                </li>
                <li className="relative text-white mb-3">
                    <span className="glowing-bullet"></span> GPU Programming for Deep Learning
                </li>
                <li className="relative text-white mb-3">
                    <span className="glowing-bullet"></span> Data Visualization and Algorithms
                </li>
                <li className="relative text-white mb-3">
                    <span className="glowing-bullet"></span> Cloud and DevOps
                </li>
                <li className="relative text-white mb-3">
                    <span className="glowing-bullet"></span> IPR and Patent Technology
                </li>
                <li className="relative text-white mb-3">
                    <span className="glowing-bullet"></span> Natural Language Processing
                </li>
                <li className="relative text-white mb-3">
                    <span className="glowing-bullet"></span> Memory Forensics
                </li>
            </ul>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/2 bg-gradient-to-r from-black via-black/20 to-black rounded-2xl p-10 h-full text-center">
            <h2 className="text-3xl font-bold text-fuchsia-400 mt-6 mb-4">Competitions</h2>
            <ul className="list-disc list-inside text-fuchsia-400">
                <li className="relative text-white mb-3">
                    <span className="glowing-bullet"></span> Evneture Pitch
                </li>
                <li className="relative text-white mb-3">
                    <span className="glowing-bullet"></span> Code Relay
                </li>
                <li className="relative text-white mb-3">
                    <span className="glowing-bullet"></span> CodeHunt 3.1
                </li>
                <li className="relative text-white mb-3">
                    <span className="glowing-bullet"></span> NoCode
                </li>
                <li className="relative text-white mb-3">
                    <span className="glowing-bullet"></span> Scytale
                </li>
                <li className="relative text-white mb-3">
                    <span className="glowing-bullet"></span> Securathon
                </li>
            </ul>
        </div>
    </div>
</div> */}
          <div className="w-full flex flex-col items-center justify-center py-10">
            <h1
              className={`${font.className} text-5xl md:text-6xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue mb-10`}
            >
              Other Events
            </h1>

            <h1
              className={`${font.className} text-4xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue mb-16`}
            >
              Workshops
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full px-5 md:px-20">
              {/* Workshop 1 */}
              <div className="group flex flex-col items-center transform transition duration-300 hover:scale-110">
                <div className="relative w-full pt-[100%]">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-fuchsia-400 transition duration-300">
                    <Image
                      src="/prev_events/opensource.png"
                      alt="Open Source Contribution Event"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl"
                    />
                  </div>
                </div>
                <h2
                  className={`${font.className} text-xl md:text-2xl text-center font-bold text-fuchsia-400 mt-6 transition group-hover:text-mBlue`}
                >
                  Open Source Contribution
                </h2>
              </div>

              {/* Workshop 2 */}
              <div className="group flex flex-col items-center transform transition duration-300 hover:scale-110">
                <div className="relative w-full pt-[100%]">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-fuchsia-400 transition duration-300">
                    <Image
                      src="/prev_events/gpu.jpg"
                      alt="GPU Programming Workshop"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl"
                    />
                  </div>
                </div>
                <h2
                  className={`${font.className} text-xl md:text-2xl text-center font-bold text-fuchsia-400 mt-6 transition group-hover:text-mBlue`}
                >
                  GPU Programming
                </h2>
              </div>

              {/* Workshop 3 */}
              <div className="group flex flex-col items-center transform transition duration-300 hover:scale-110">
                <div className="relative w-full pt-[100%]">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-fuchsia-400 transition duration-300">
                    <Image
                      src="/prev_events/cloud.jpg"
                      alt="Cloud Computing Workshop"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl"
                    />
                  </div>
                </div>
                <h2
                  className={`${font.className} text-xl md:text-2xl text-center font-bold text-fuchsia-400 mt-6 transition group-hover:text-mBlue`}
                >
                  Cloud and DevOps
                </h2>
              </div>
              <div className="group flex flex-col items-center transform transition duration-300 hover:scale-110">
                <div className="relative w-full pt-[100%]">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-fuchsia-400 transition duration-300">
                    <Image
                      src="/prev_events/ipr.jpg"
                      alt="Cloud Computing Workshop"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl"
                    />
                  </div>
                </div>
                <h2
                  className={`${font.className} text-xl md:text-2xl text-center font-bold text-fuchsia-400 mt-6 transition group-hover:text-mBlue`}
                >
                  IPR Technology
                </h2>
              </div>
              <div className="group flex flex-col items-center transform transition duration-300 hover:scale-110">
                <div className="relative w-full pt-[100%]">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-fuchsia-400 transition duration-300">
                    <Image
                      src="/prev_events/dva.jpg"
                      alt="Cloud Computing Workshop"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl"
                    />
                  </div>
                </div>
                <h2
                  className={`${font.className} text-xl md:text-2xl text-center font-bold text-fuchsia-400 mt-6 transition group-hover:text-mBlue`}
                >
                  Data Visulization Algorithms
                </h2>
              </div>
              <div className="group flex flex-col items-center transform transition duration-300 hover:scale-110">
                <div className="relative w-full pt-[100%]">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-fuchsia-400 transition duration-300">
                    <Image
                      src="/prev_events/forensis.jpg"
                      alt="Cloud Computing Workshop"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl"
                    />
                  </div>
                </div>
                <h2
                  className={`${font.className} text-xl md:text-2xl text-center font-bold text-fuchsia-400 mt-6 transition group-hover:text-mBlue`}
                >
                  Memory Forensics
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center py-10">
            <h1
              className={`${font.className} text-4xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 font-bold to-mBlue mb-16`}
            >
              Competitions
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full px-5 md:px-20">
              {/* Workshop 1 */}
              <div className="group flex flex-col items-center transform transition duration-300 hover:scale-110">
                <div className="relative w-full pt-[100%]">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-fuchsia-400 transition duration-300">
                    <Image
                      src="/prev_events/pitch.jpg"
                      alt="Open Source Contribution Event"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl"
                    />
                  </div>
                </div>
                <h2
                  className={`${font.className} text-xl md:text-2xl text-center font-bold text-fuchsia-400 mt-6 transition group-hover:text-mBlue`}
                >
                  Eventure Pitch
                </h2>
              </div>

              {/* Workshop 2 */}
              <div className="group flex flex-col items-center transform transition duration-300 hover:scale-110">
                <div className="relative w-full pt-[100%]">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-fuchsia-400 transition duration-300">
                    <Image
                      src="/prev_events/relay.jpg"
                      alt="GPU Programming Workshop"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl"
                    />
                  </div>
                </div>
                <h2
                  className={`${font.className} text-xl md:text-2xl text-center font-bold text-fuchsia-400 mt-6 transition group-hover:text-mBlue`}
                >
                  Code Relay
                </h2>
              </div>

              {/* Workshop 3 */}
              <div className="group flex flex-col items-center transform transition duration-300 hover:scale-110">
                <div className="relative w-full pt-[100%]">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-fuchsia-400 transition duration-300">
                    <Image
                      src="/prev_events/codehunt.jpg"
                      alt="Cloud Computing Workshop"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl"
                    />
                  </div>
                </div>
                <h2
                  className={`${font.className} text-xl md:text-2xl text-center font-bold text-fuchsia-400 mt-6 transition group-hover:text-mBlue`}
                >
                  CodeHunt 3.1
                </h2>
              </div>
              <div className="group flex flex-col items-center transform transition duration-300 hover:scale-110">
                <div className="relative w-full pt-[100%]">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-fuchsia-400 transition duration-300">
                    <Image
                      src="/prev_events/nocode.jpg"
                      alt="Cloud Computing Workshop"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl"
                    />
                  </div>
                </div>
                <h2
                  className={`${font.className} text-xl md:text-2xl text-center font-bold text-fuchsia-400 mt-6 transition group-hover:text-mBlue`}
                >
                  NoCode
                </h2>
              </div>
              <div className="group flex flex-col items-center transform transition duration-300 hover:scale-110">
                <div className="relative w-full pt-[100%]">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-fuchsia-400 transition duration-300">
                    <Image
                      src="/prev_events/timelapse.jpg"
                      alt="Cloud Computing Workshop"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl"
                    />
                  </div>
                </div>
                <h2
                  className={`${font.className} text-xl md:text-2xl text-center font-bold text-fuchsia-400 mt-6 transition group-hover:text-mBlue`}
                >
                  Timelapse Tapestery
                </h2>
              </div>
              <div className="group flex flex-col items-center transform transition duration-300 hover:scale-110">
                <div className="relative w-full pt-[100%]">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-fuchsia-400 transition duration-300">
                    <Image
                      src="/prev_events/secure.jpg"
                      alt="Cloud Computing Workshop"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl"
                    />
                  </div>
                </div>
                <h2
                  className={`${font.className} text-xl md:text-2xl text-center font-bold text-fuchsia-400 mt-6 transition group-hover:text-mBlue`}
                >
                  Securathon
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link
            className="text-xl border-mBlue border-2 px-6 py-2 rounded hover:bg-mBlue transition duration-200 hover:text-black text-center"
            href="https://www.computer.org/membership/join"
            target="_blank"
          >
            Become an IEEE Computer Society Member Now!
          </Link>
        </div>
        <br /> <br />
      </div>
    </div>
  );
};

export default AboutUs;
