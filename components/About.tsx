import Image from "next/image";

const About = () => {
  return (
    <section className="w-full py-20 ">
      <div className="max-w-8xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="flex justify-center">
          <Image
            src="/images/dp.jpg"
            alt="Ifty"
            width={500}
            height={300}
            className="rounded-xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 text-indigo-600">About Me</h2>
          <p className="text-lg text-white leading-relaxed">
            I’m Fahim Ahmed Ifty, a passionate Machine Learning Engineer and
            Frontend Developer with a deep love for blending intelligent systems
            with beautiful user interfaces. I thrive at the intersection of AI
            and design, where I get to build smart, intuitive, and visually
            appealing digital experiences. My core stack includes Python for
            backend and ML development, along with React, Next.js, and Tailwind
            CSS for crafting modern, responsive UIs. I enjoy solving real-world
            problems through automation, data-driven solutions, and seamless
            frontend experiences. Whether I’m training a model, designing a UI
            in Figma, or coding a feature-rich app, I’m always excited to learn,
            explore, and create. I believe in the power of technology to
            transform ideas into reality, and I’m dedicated to making a positive
            impact through my work. Let’s connect and build something.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
