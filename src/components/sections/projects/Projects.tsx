import { projects } from "../../../constants/index"
import ProjectCard from "./ProjectCard"

import GSAPScrollBehaviorProject from "../../../utils/gsapScrollBehaviorProject"

export default function Projects() {
    
    GSAPScrollBehaviorProject();
    
    return (
        <div id="projects" className="h-fit mt-30 scroll-mt-12 max-sm:h-fit max-sm:pb-25">

            <div className="h-22 w-250 mx-auto pb-30 flex-col justify-center text-center items-center content-center text-white gsap-projects-top max-sm:pb-70">
                <p className="text-4xl pb-5">Projects</p>
                <p className="w-full text-2xl/9 mx-auto text-center">Below are some of the most impactful projects that reflect the skills and experience I’ve developed throughout my journey.</p>
            </div>

            {/* First Row */}
            <div className="flex justify-evenly max-sm:flex-col max-sm:justify-center max-sm:items-center"> 
                {/* AskPolaris */}
                <div className="pt-20 gsap-projects-left">
                    <ProjectCard
                        thumbnail={projects.askPolaris.thumbnail}
                        imgUrl={projects.askPolaris.imgUrl}
                        link={projects.askPolaris.link}    
                        title={projects.askPolaris.title}
                        date={projects.askPolaris.date}
                        description={projects.askPolaris.description}
                        technologies={projects.askPolaris.technologies}
                        size={"h-20"}
                        extra={""}
                    />
                </div>

                {/* SimplyLaw */}
                <div className="pt-20 gsap-projects-top">
                    <ProjectCard
                        thumbnail={projects.simplyLaw.thumbnail}
                        imgUrl={projects.simplyLaw.imgUrl}
                        link={projects.simplyLaw.link}    
                        title={projects.simplyLaw.title}
                        date={projects.simplyLaw.date}
                        description={projects.simplyLaw.description}
                        technologies={projects.simplyLaw.technologies}
                        size={"h-20"}
                        extra={"invert"}
                    />
                </div>

                {/* neighborly */}
                <div className="pt-20 gsap-projects-right">
                    <ProjectCard    
                        thumbnail={projects.neighborly.thumbnail}
                        imgUrl={projects.neighborly.imgUrl}
                        link={projects.neighborly.link}    
                        title={projects.neighborly.title}
                        date={projects.neighborly.date}
                        description={projects.neighborly.description}
                        technologies={projects.neighborly.technologies}
                        size={"h-22"}
                        extra={""}
                    />
                </div>
            </div>

            {/* First Row */}
            <div className="flex justify-evenly max-sm:flex-col max-sm:justify-center max-sm:items-center"> 
                {/* mainLine */}
                <div className="pt-20 gsap-projects-left">
                    <ProjectCard
                        thumbnail={projects.mainLine.thumbnail}
                        imgUrl={projects.mainLine.imgUrl}
                        link={projects.mainLine.link}    
                        title={projects.mainLine.title}
                        date={projects.mainLine.date}
                        description={projects.mainLine.description}
                        technologies={projects.mainLine.technologies}
                        size={"h-20"}
                        extra={""}
                    />
                </div>

                {/* UCF Guessr */}
                <div className="pt-20 gsap-projects-top">
                    <ProjectCard
                        thumbnail={projects.ucfGuessr.thumbnail}
                        imgUrl={projects.ucfGuessr.imgUrl}
                        link={projects.ucfGuessr.link}    
                        title={projects.ucfGuessr.title}
                        date={projects.ucfGuessr.date}
                        description={projects.ucfGuessr.description}
                        technologies={projects.ucfGuessr.technologies}
                        size={"h-20"}
                        extra={""}
                    />
                </div>

                {/* Portfolio Website */}
                <div className="pt-20 gsap-projects-right">
                    <ProjectCard    
                        thumbnail={projects.portfolio.thumbnail}
                        imgUrl={projects.portfolio.imgUrl}
                        link={projects.portfolio.link}    
                        title={projects.portfolio.title}
                        date={projects.portfolio.date}
                        description={projects.portfolio.description}
                        technologies={projects.portfolio.technologies}
                        size={"h-22"}
                        extra={"invert"}
                    />
                </div>
            </div>

            {/* ThirdRow */}
            <div className="flex justify-evenly max-sm:flex-col max-sm:justify-center max-sm:items-center">
                {/* Codelaboration */}
                <div className="pt-20 gsap-projects-left">
                    <ProjectCard
                        thumbnail={projects.codelaboration.thumbnail}
                        imgUrl={projects.codelaboration.imgUrl}
                        link={projects.codelaboration.link}    
                        title={projects.codelaboration.title}
                        date={projects.codelaboration.date}
                        description={projects.codelaboration.description}
                        technologies={projects.codelaboration.technologies}
                        size={"h-22"}
                        extra={""}
                    />
                </div>

                {/* Contact Hub */}
                <div className="pt-20 gsap-projects-right">
                    <ProjectCard
                        thumbnail={projects.contactHub.thumbnail}
                        imgUrl={projects.contactHub.imgUrl}
                        link={projects.contactHub.link}    
                        title={projects.contactHub.title}
                        date={projects.contactHub.date}
                        description={projects.contactHub.description}
                        technologies={projects.contactHub.technologies}
                        size={"h-20"}
                        extra={""}
                    />
                </div> 
            </div>

        </div>
    )
}