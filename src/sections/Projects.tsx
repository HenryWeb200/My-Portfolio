import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real World Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="md:pt-12 md:px-10 lg:pt-16 lg:px-20 pl-8 pt-8 pr-8 pb-0 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-500 to-sky-300 inline-flex gap-2 font-semibold font-sm tracking-widest text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>

                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex text-sm md:text-base gap-2 text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="font-semibold text-gray-950 h-12 w-full md:w-auto bg-white rounded-xl inline-flex items-center justify-center gap-2 mt-8 px-6">
                      <span>Visit Live Site</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>

                <div className="lg:relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="lg:mt-0 mt-8 -mb-4 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
