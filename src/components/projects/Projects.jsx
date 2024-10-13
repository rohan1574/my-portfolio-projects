import React from "react";
import Title from "../layouts/Title";
import {
  tour,
  car,
  estate,
  mangment,
  ecommerce,
  hotel,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="TOUR & TRAVEL-WEBSITE"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={tour}
          githubLink="https://github.com/rohan1574/tour-and-travel-website" // Add your GitHub link
          liveLink="https://tour-and-travel-website-sepia.vercel.app/" // Add your live link
        />
        <ProjectsCard
          title="CAR-RENTAL-WEBSITE"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={car}
          githubLink="https://github.com/rohan1574/car-rental-website" // Add your GitHub link
          liveLink="https://car-rental-website-self.vercel.app/" // Add your live link
        />
        <ProjectsCard
          title="ESTATE-WEBSITE"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={estate}
          githubLink="https://github.com/rohan1574/Estate-Website" // Add your GitHub link
          liveLink="https://estate-website-blue.vercel.app/" // Add your live link
        />
        <ProjectsCard
          title="MANAGEMENT-SYSTEM"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={mangment}
          githubLink="https://github.com/rohan1574/shacdn-project" // Add your GitHub link
          liveLink="https://react-shacdn-project.vercel.app/" // Add your live link
        />
        <ProjectsCard
          title="E-COMMERCE WEBSITE"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={ecommerce}
          githubLink="https://github.com/rohan1574/full-ecommerce-project" // Add your GitHub link
          liveLink="https://full-ecommerce-project.vercel.app/" // Add your live link
        />
        <ProjectsCard
          title="HOTEL BOOKING"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={hotel}
          githubLink="https://github.com/rohan1574/travel-guru" // Add your GitHub link
          liveLink="https://travell-guru-main.vercel.app/" // Add your live link
        />
      </div>
    </section>
  );
};

export default Projects;
