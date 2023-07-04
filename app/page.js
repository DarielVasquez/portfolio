import Image from "next/image";
import Link from "next/link";
import FadeIn from "./components/FadeIn";
import SmoothBackground from "./components/SmoothBackground";
import ProjectSlideshow from "./components/ProjectSlideshow";
import ContactForm from "./components/ContactForm";
import ScrollToTop from "./components/ScrollToTop";
import DoubleChevron from "./components/DoubleChevron";
import Footer from "./components/Footer";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import technologies from "./json/technologies.json";
import projects from "./json/projects.json";

export default function Home() {
  return (
    <main className="relative">
      <SmoothBackground>
        <div id="home" className="bg-black bg-opacity-20">
          <section className="relative z-10 flex lg:flex-row flex-col justify-end lg:justify-start items-center min-h-[100svh] container p-4 mx-auto ">
            <div className="flex flex-col justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 text-stone-100 min-h-[50vh] w-full lg:w-1/2 p-3 ">
              <FadeIn>
                <h4 className="text-sm sm:text-base md:text-xl xl:text-xl font-extralight ">
                  Hello, my name is
                </h4>
              </FadeIn>
              <FadeIn order="1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extralight text-teal-200">
                  <span className="text-white relative after:content-[''] after:bg-teal-600 after:absolute after:z-[-1] after:top-[70%] after:left-[4%] after:h-3 md:after:h-5 after:w-[98%]">
                    Dariel
                  </span>{" "}
                  Vasquez
                </h1>
              </FadeIn>
              <FadeIn order="2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extralight text-cyan-200">
                  Full-Stack{" "}
                  <span className="text-white relative after:content-[''] after:bg-cyan-600 after:absolute after:z-[-1] after:top-[70%] after:left-[4%] after:h-3 md:after:h-5 after:w-[98%]">
                    Developer
                  </span>
                </h1>
              </FadeIn>
              <FadeIn order="3">
                <p className="text-sm sm:text-base md:text-lg xl:text-xl font-extralight">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
                  in delectus? Numquam expedita delectus iusto alias adipisci
                  deleniti, quae aliquam voluptatibus harum nostrum tenetur
                  soluta et debitis accusantium inventore ullam.
                </p>
              </FadeIn>
              <FadeIn order="4">
                <div className="text-2xl flex gap-2">
                  <a
                    target="_blank"
                    href="https://github.com/DarielVasquez"
                    rel="noopener noreferrer"
                    className="flex justify-center hover:text-teal-500"
                  >
                    <FaGithub></FaGithub>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/dariel-vasquez-a53a18214/"
                    rel="noopener noreferrer"
                    className="flex justify-center hover:text-teal-500"
                  >
                    <FaLinkedin></FaLinkedin>
                  </a>
                  <a
                    target="_blank"
                    href="mailto:darielalejandro10@gmail.com"
                    rel="noopener noreferrer"
                    className="flex justify-center hover:text-teal-500"
                  >
                    <MdEmail></MdEmail>
                  </a>
                </div>
              </FadeIn>
            </div>
            <DoubleChevron></DoubleChevron>
          </section>
        </div>
      </SmoothBackground>

      <div className="relative grid lg:grid-cols-12 min-h-screen bg-white text-stone-800">
        <section
          id="about"
          className="lg:col-span-4 text-stone-100 bg-teal-950"
        >
          <div className="flex flex-col lg:justify-around justify-center items-center gap-y-4 lg:min-h-screen min-h-[100vh] sticky top-0 p-5">
            <FadeIn>
              <div className="p-8 xl:p-12 bg-teal-800 rounded-md">
                <div className="relative z-10 py-4 xl:py-10 gap-8 w-[50vw] lg:w-full flex flex-col justify-center items-center">
                  <div className="relative">
                    <h3 className="relative z-10 text-center text-xl font-light brightness-200">
                      About Me
                    </h3>
                    <div className="bg-teal-900 absolute top-[55%] left-[5%] h-3 w-24"></div>
                  </div>
                  <div className="flex justify-center rounded-full">
                    <img
                      className="shadow-[7px_7px_rgba(1,1,1,0.3)] object-cover h-24 w-24 sm:h-40 sm:w-40 xl:h-60 xl:w-60 rounded-3xl"
                      src="/profile/profile.png"
                      alt=""
                    />
                  </div>
                  <p className="font-extralight text-sm xl:text-base w-full sm:w-2/3 lg:w-full 2xl:w-2/3 brightness-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga obcaecati autem at accusamus placeat amet molestias!
                    Aliquid, porro? Ea nam perspiciatis sint eaque tempore
                    voluptatem vitae aut nesciunt ipsum fuga?
                  </p>
                  <a
                    className="shadow-[7px_7px_rgba(1,1,1,0.3)] text-xs sm:text-sm bg-teal-600 text-white rounded-md p-2 transition ease-in-out hover:shadow-[5px_5px_rgba(1,1,1,0.3)] hover:bg-teal-700 w-24 sm:w-28 text-center"
                    target="_blank"
                    href="https://drive.google.com/file/d/1cRnVaBv8efdOWdKaeNSY1OKNAbj6jCi8/view?usp=sharing"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </div>
                <svg
                  className="absolute z-0 bottom-0 right-0 min-w-full  rounded-md"
                  viewBox="45 -5 200 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M141.184 19.2L190.753 96H91.6156L141.184 19.2Z"
                    fill="#134e4a"
                  />
                  <path
                    d="M171.711 38.4L208.061 96H135.36L171.711 38.4Z"
                    fill="#134e4a"
                  />
                  <path
                    d="M103.026 57.6L139.377 96H66.676L103.026 57.6Z"
                    fill="#134e4a"
                  />
                  <path
                    d="M228.947 0L281.82 96H176.074L228.947 0Z"
                    fill="#134e4a"
                  />
                  <path
                    d="M61.0526 0L113.926 96H8.1795L61.0526 0Z"
                    fill="#134e4a"
                  />
                </svg>
              </div>
            </FadeIn>
          </div>
        </section>
        <section className="lg:col-span-8 overflow-x-hidden">
          <section id="skills" className="p-4 lg:p-12">
            <FadeIn direction="right">
              <div className="flex flex-col justify-center items-center min-h-[50vh] p-4 lg:p-12">
                <div className="relative">
                  <h2 className="relative z-10 font-semibold text-stone-600 text-2xl lg:text-3xl pb-4 p-4 lg:p-8">
                    Skills
                  </h2>
                  <div className="bg-teal-400 absolute top-[55%] left-[27%] h-[10px] lg:h-3 w-[60px] lg:w-20"></div>
                </div>
                <div className="w-full 2xl:w-2/3 flex flex-row justify-center flex-wrap gap-5 xl:gap-8 p-4 pb-12 lg:p-8 lg:pb-12">
                  {technologies?.map((tech, i) => {
                    const { name, image } = tech;
                    return (
                      <div
                        className="flex flex-col justify-center items-center"
                        key={i}
                      >
                        <FadeIn direction="right" order={i}>
                          <Image
                            className="object-cover hover:animate-bounce w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 2xl:w-[88px] 2xl:h-[88px]"
                            src={image}
                            alt={name}
                            title={name}
                            width={80}
                            height={80}
                          ></Image>
                          <h4 className="text-xs md:text-sm font-extralight text-center">
                            {name}
                          </h4>
                        </FadeIn>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          </section>
          <svg
            className="max-h-[10vw] w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon fill=" rgb(245 245 244)" points="0,100 100,0 100,100" />
          </svg>
          <section id="projects" className="p-4 lg:p-12 bg-stone-100">
            <FadeIn direction="right">
              <div className="flex justify-center">
                <div className="relative w-fit">
                  <h2 className="relative z-10 font-semibold text-stone-600 text-2xl lg:text-3xl pb-12 p-4 text-center">
                    Recent Work
                  </h2>
                  <div className="bg-teal-400 absolute top-[38%] left-[11.5%] h-[10px] lg:h-3 w-[152px] lg:w-[186px]"></div>
                </div>
              </div>
            </FadeIn>
            <div className="grid gap-5 pb-10">
              {projects?.map((project, i) => {
                const {
                  title,
                  description,
                  type,
                  stack,
                  images,
                  urlProject,
                  urlGithub,
                  note,
                } = project;
                return (
                  <FadeIn key={i} direction="right">
                    <article className="flex flex-col gap-x-10 sm:flex-row lg:flex-col xl:flex-row p-4 lg:p-8 rounded-md">
                      <div className="basis-1/3 flex flex-col order-2 sm:order-1 lg:order-2 xl:order-1">
                        <div className="basis-2/3 pb-5 pt-5 sm:pt-0">
                          <h4 className="text-lg uppercase">{type}</h4>
                          <h2 className="text-3xl md:text-4xl py-2">{title}</h2>
                          <div className="flex flex-wrap gap-1">
                            {stack.map((name, k) => {
                              return (
                                <span
                                  className="px-2 py-1 rounded-full bg-stone-500 text-white text-sm cursor-default"
                                  key={k}
                                >
                                  {name}
                                </span>
                              );
                            })}
                          </div>
                          <p className="pt-4 text-base font-light text-stone-500">
                            {description}
                          </p>
                          {note && (
                            <p className="pt-2 text-sm text-stone-700">
                              Note: {note}
                            </p>
                          )}
                        </div>
                        <div className="basis-1/3 flex gap-3 sm:gap-5 relative justify-center sm:justify-normal items-end">
                          {urlProject && (
                            <a
                              target="_blank"
                              className="shadow-[7px_7px_rgba(1,1,1,0.3)] text-xs sm:text-sm bg-teal-500 text-white rounded-md p-2 transition ease-in-out hover:shadow-[5px_5px_rgba(1,1,1,0.3)] hover:bg-teal-600 w-24 sm:w-28 text-center"
                              rel="noopener noreferrer"
                              href={urlProject}
                            >
                              View Project
                            </a>
                          )}
                          <a
                            target="_blank"
                            className="shadow-[7px_7px_rgba(1,1,1,0.3)] text-xs sm:text-sm bg-cyan-500 text-white rounded-md p-2 transition ease-in-out hover:shadow-[5px_5px_rgba(1,1,1,0.3)] hover:bg-cyan-600 w-24 sm:w-28 text-center"
                            rel="noopener noreferrer"
                            href={urlGithub}
                          >
                            Source Code
                          </a>
                        </div>
                      </div>
                      <div className="basis-2/3 order-1 sm:order-2 lg:order-1 xl:order-2 flex justify-center cursor-pointer w-full rounded-md py-5">
                        <ProjectSlideshow
                          images={images}
                          urlProject={urlProject ? urlProject : urlGithub}
                        ></ProjectSlideshow>
                      </div>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </section>
          <svg
            className="max-h-[10vw] w-full bg-stone-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon fill="white" points="0,100 100,0 100,100" />
          </svg>
          <section id="contact" className="p-4 lg:p-12">
            <FadeIn direction="right">
              <ContactForm></ContactForm>
            </FadeIn>
          </section>
          <svg
            className="max-h-[10vw] w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon fill="#292524" points="0,100 100,0 100,100" />
          </svg>
          <ScrollToTop></ScrollToTop>
          <Footer></Footer>
        </section>
      </div>
    </main>
  );
}
