import React from "react";
import TLM from "../assets/img/4.png";
import JKT from "../assets/img/3.png";
import DLR from "../assets/img/2.png";
import SMT from "../assets/img/1.png";
import NETFLIX from "../assets/img/5.png";
import {
  FaLaptopCode,
  FaReact,
  FaHtml5,
  FaLaravel,
  FaPhp,
} from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsFillBootstrapFill } from "react-icons/bs";
import { IoLogoNodejs } from "react-icons/io";
import {
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { RiGlobalLine } from "react-icons/ri";
import { ModalDetail } from "./ModalDetail";

function Portofolio() {
  const TechStack = () => (
    <div>
      <div className="flex justify-center py-3 space-x-3">
        <a
          className=" text-white bg-sky-500 py-2 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out"
          target="_blank"
        >
          <FaReact className="mb-1 inline" size={20} />
        </a>
        <a
          className=" text-white bg-indigo-700 py-2 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out"
          target="_blank"
        >
          <BsFillBootstrapFill className="mb-1 inline" size={20} />
        </a>
        <a
          className=" text-white bg-[#e34c26] py-2 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out"
          target="_blank"
        >
          <FaHtml5 className="mb-1 inline" size={20} />
        </a>
        <a
          className=" text-white bg-[#6cc24a] py-2 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out"
          target="_blank"
        >
          <IoLogoNodejs className="mb-1 inline" size={20} />
        </a>
      </div>
    </div>
  );
  const TechStackNext = () => (
    <div>
      <div className="flex justify-center py-3 space-x-3">
        <a
          className=" text-white bg-sky-500 py-2 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out"
          target="_blank"
        >
          <FaReact className="mb-1 inline" size={20} />
        </a>
        <a
          className=" text-white bg-black py-2 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out"
          target="_blank"
        >
          <SiNextdotjs className="mb-1 inline" size={20} />
        </a>
        <a
          className=" text-white bg-cyan-500 py-2 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out"
          target="_blank"
        >
          <SiTailwindcss className="mb-1 inline" size={20} />
        </a>
        <a
          className=" text-white bg-blue-700 py-2 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out"
          target="_blank"
        >
          <SiTypescript className="mb-1 inline" size={20} />
        </a>
      </div>
    </div>
  );

  const TechStackPHP = () => (
    <div>
      <div className="flex justify-center py-3 space-x-3">
        <a
          className=" text-white bg-red-500 py-2 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out"
          target="_blank"
        >
          <FaLaravel className="mb-1 inline" size={20} />
        </a>
        <a
          className=" text-white bg-indigo-700 py-2 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out"
          target="_blank"
        >
          <BsFillBootstrapFill className="mb-1 inline" size={20} />
        </a>
        <a
          className=" text-white bg-[#474A8A] py-2 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out"
          target="_blank"
        >
          <FaPhp className="mb-1 inline" size={20} />
        </a>
        <a
          className=" text-white bg-[#00758f] py-2 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out"
          target="_blank"
        >
          <SiMysql className="mb-1 inline" size={20} />
        </a>
      </div>
    </div>
  );

  const projects = [
    {
      img: TLM,
      title: "The Lazy Media",
      desc: "The Lazy Media is your games, technology, entertainment, and gadgets website. I remake this website for reading some article news with diffrent UI / UX",
      link: "https://the-lazy-media.vercel.app/",
      github: "https://github.com/ikhbaldwiyan/the-lazy-media",
      technology: <TechStack />,
      detail: (
        <>
          <p>- React JS</p>
          <p>- Node JS</p>
          <p>- Reactstrap</p>
        </>
      ),
    },
    {
      img: JKT,
      title: "JKT48 SHOWROOM",
      desc: "Showroom is one of the largest live streaming platforms in Japan! this website is filtered streaming for JKT48 room only based by API that i made",
      link: "https://jkt48-showroom.vercel.app/",
      github: "https://github.com/ikhbaldwiyan/showroom",
      technology: <TechStack />,
      detail: (
        <>
          <p>- React JS</p>
          <p>- Express JS</p>
          <p>- Laravel</p>
          <p>- Reactstrap</p>
        </>
      ),
    },
    {
      img: SMT,
      title: "Smooth Pizza",
      desc: "Website Point of sale for management pizza restaurant, This website made at my high school last project",
      github: "https://github.com/Inzoid/smooth",
      technology: <TechStackPHP />,
      detail: (
        <>
          <p>- PHP</p>
          <p>- Bootstrap</p>
          <p>- JQuery</p>
        </>
      ),
    },
    {
      img: DLR,
      title: "Jack Dealer",
      desc: "Website dealer for buy or sell cars, you can buy many type of branding cars in this website",
      technology: <TechStackPHP />,
      detail: (
        <>
          <p>- PHP</p>
          <p>- Bootstrap</p>
          <p>- JQuery</p>
        </>
      ),
    },
    {
      img: NETFLIX,
      title: "Netflix Clone",
      desc: "Netflix is one of the largest movies stream platforms in world! i just made clone for this website to improve my frontend skill and learning about Next JS, Tailwind and Typescript",
      link: "https://netflix-clone-teal-one.vercel.app/",
      github: "https://github.com/ikhbaldwiyan/netflix-clone",
      technology: <TechStackNext />,
      detail: (
        <>
          <p>- Next JS</p>
          <p>- Tailwind CSS</p>
          <p>- Typescript</p>
        </>
      ),
    },
  ];

  return (
    <section
      id="project"
      className="pt-22 pb-16 bg-slate-100 dark:bg-gray-700 rounded-xl my-10 mx-4"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-15">
            <h4 className="font-bold text-2xl text-primary dark:text-cyan-500 py-8 uppercase">
              Portfolio
            </h4>
            <h2 className="text-black dark:text-slate-200 font-bold text-xl lg:text-3xl mb-4 uppercase sm:text-md">
              <FaLaptopCode size={35} className="inline mr-2 mb-1" /> My
              Projects <FaLaptopCode size={35} className="inline ml-2 mb-1" />
            </h2>
            <p className="font-medium text-md text-secondary dark:text-slate-300">
              Here is a list of projects I have worked on
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 mx-auto">
          {projects.map((item, idx) => (
            <div key={idx} className="mb-4 p-4 md:w-1/2 text-center">
              <div className="rounded-lg shadow-md overflow-hidden mt-10 bg-gray-100 dark:bg-bgDark">
                <img src={item.img} width="w-full" alt={item.title} />
                <h3 className="font-bold text-xl text-primary dark:text-cyan-500 py-3 uppercase">
                  {item.title}
                </h3>
              </div>

              {item.technology}

              <p className="text-secondary font-medium dark:text-textDark">
                {item.desc}
              </p>

              <div className="flex space-y-10 justify-center">
                <a
                  href={item.link}
                  className={`text-base font-semibold text-white bg-gradient-to-r from-primary to-sky-500  py-3 px-5 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out mr-5 inline mt-10 ${
                    !item.link ? "opacity-60 cursor-not-allowed" : ""
                  } `}
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiGlobalLine className="mb-1 inline" size={25} /> Website
                </a>
                <button
                  className={`text-base font-semibold text-white bg-gradient-to-r from-teal-500 to-sky-500  py-3 px-5 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out mr-5 inline mt-10`}
                >
                  <ModalDetail data={item} />
                </button>
                <a
                  href={item.github}
                  className={`text-base font-semibold text-white bg-slate-800 py-3 px-5 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out inline ${
                    !item.github ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub className="mb-1 inline mr-1" size={25} /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portofolio;
