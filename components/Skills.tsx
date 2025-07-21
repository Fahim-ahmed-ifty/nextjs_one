import React from "react";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "TensorFlow",
  "PyTorch",
  "Figma",
  "Tailwind CSS",
  "Git",
  "Docker",
  "MongoDB",
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-4 rounded-lg">
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">My Skills</h2>
        <p className="text-gray-300 text-lg mb-10">
          Tools and technologies I love to work with
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-40 h-16 flex items-center justify-center bg-[#1e293b] hover:bg-[#334155] transition rounded-xl shadow-md text-base font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
