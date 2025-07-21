import React from "react";
import { GraduationCap } from "lucide-react";

const page = () => {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white py-16 px-6 flex items-center justify-center rounded-lg">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl font-bold text-blue-400 mb-10 text-center">
          My Education
        </h2>

        <div className="space-y-8">
          <div className="bg-[#1e293b] rounded-xl p-6 shadow-md flex items-center gap-4">
            <GraduationCap size={40} className="text-blue-400" />
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                BSc in Computer Science & Engineering
              </h3>
              <p className="text-gray-300">Stamford University Of Bangladesh</p>
              <p className="text-gray-400">2018 - 2022</p>
              <p className="mt-2 text-gray-300">
                Obtained CGPA:{" "}
                <span className="text-white font-bold">3.87 / 4.00</span>
              </p>
            </div>
          </div>

          <div className="bg-[#1e293b] rounded-xl p-6 shadow-md flex items-center gap-4">
            <GraduationCap size={40} className="text-blue-400" />
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                MSc in Computer Science
              </h3>
              <p className="text-gray-300">Brac University</p>
              <p className="text-gray-400">2023 - 2025 (Ongoing)</p>
              <p className="mt-2 text-gray-300">
                Currently pursuing my Master&apos;s degree.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
