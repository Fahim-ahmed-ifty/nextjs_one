import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white flex items-center px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:justify-between w-full">
        <div className="md:w-1/2 flex flex-col justify-center h-96">
          <h1 className="text-5xl font-extrabold mb-4">
            Hello, I&apos;m Fahim Ahmed Ifty
          </h1>
          <p className="text-lg mb-6 text-gray-200">
            Machine Learning Engineer & UI Developer building cool web apps.
          </p>
          <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300 w-max hover:cursor-pointer">
            Contact Me
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/images/dp2.jpg"
            alt="Fahim Ahmed Ifty"
            width={300}
            height={300}
            className="w-72 h-72 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
