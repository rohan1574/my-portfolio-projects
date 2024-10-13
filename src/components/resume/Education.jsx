import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div className="flex-1"> {/* Added flex-1 for equal division */}
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of Dhaka (2018 - 2022)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="AS - Science & Information"
            subTitle="Shimata Adarsha College (2016 - 2018)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Mahmudpur Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>

      {/* part Two */}
      <div className="flex-1"> {/* Added flex-1 for equal division */}
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-end Developer"
            subTitle="Fiverr Out Tech - (2018 - Present)"
            result="USA,CANADA,UK"
            des="I am a skilled frontend developer specializing in modern technologies like React.js, Next.js, and Tailwind CSS to create interactive and responsive websites. My focus is always on delivering an enhanced user experience and providing fast, efficient solutions. If you're looking for high-quality and professional frontend development services for your project, I'm here to help!"
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Programming Developer Team - (2012 - 2016)"
            result="BANGLADESH"
            des="As a Web Developer and Trainer at Programming Hero, I specialize in building dynamic and responsive websites using technologies like React, Next.js, and Tailwind CSS. Alongside development, I am passionate about teaching and empowering students with the skills they need to excel in web development. I strive to simplify complex concepts and provide hands-on learning experiences that prepare aspiring developers for real-world challenges."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Upwork Out Tech (2022 - 2024)"
            result="USA,CANADA,UK"
            des="Hello! I’m a passionate Web Developer with a strong focus on creating dynamic, responsive, and user-friendly websites. With expertise in modern technologies like React, Next.js, and Tailwind CSS, I transform ideas into functional and visually appealing web applications."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
