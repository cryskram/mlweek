import { Bruno_Ace } from "next/font/google";
import Image from "next/image";

const font = Bruno_Ace({ weight: "400", subsets: ["latin"] });

const Collaborators = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 p-5">
  
      <h1
        className={`${font.className} text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-400 to-mBlue text-center`}
      >
        Collaborators & Sponsors
      </h1>
      <p className={`${font.className} text-xl sm:text-2xl mt-5 text-center`}>
        In association with the department of CSE, BMSCE
      </p>

      <Image
        className="mt-10"
        src="/ieee-csbc.png"
        width={500}
        height={500}
        alt="ieee cs bangalore section"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default Collaborators;
