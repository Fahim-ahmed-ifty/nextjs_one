const About = lazy(() => import("@/components/About"));
const Hero = lazy(() => import("@/components/Hero"));
const Skills = lazy(() => import("@/components/Skills"));
import React, { lazy } from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <div id="about">
        <About />
      </div>

      <Skills />
    </div>
  );
};

export default page;
