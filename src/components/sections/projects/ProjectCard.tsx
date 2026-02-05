import IconShowCaseProject from "./IconShowCaseProject";
import { useState, useEffect } from "react";
import { useInView } from "../../../hooks/useInView";

interface ProjectCardProps {
    thumbnail: string;
    imgUrl: string;
    link: string,
    title: string;
    date: string;
    description: string;
    technologies:  { text: string; badgeUrl: string }[];
    size: string;
    extra: string;
}

export default function ProjectCards({thumbnail, imgUrl, link, date, title, description, technologies, size, extra}: ProjectCardProps) {
    const [delayedInView, setDelayedInView] = useState(false);
    const { ref, inView } = useInView<HTMLDivElement>(0.1); // 20% visible = active

    useEffect(() => {
        if (inView) {
            const id = setTimeout(() => setDelayedInView(true), 1750);
            return () => clearTimeout(id);
        } else {
            setDelayedInView(false);
        }
    }, [inView]);
    
    return (
        <div  
            className={`min-h-215 h-fit w-100 rounded-2xl border-1 border-gray-800 hover:scale-105 transition-transform duration-300 ease-in-out !cursor-pointer ${delayedInView ? "glowing-border" : "glow-disabled overflow-hidden"}`}
            ref={ref}
            style={{
            animationPlayState: inView ? "running" : "paused"
            }}
        >
            <div className="h-full w-full rounded-2xl text-white content-center items-center !cursor-pointer !overflow-hidden">
                
                <div className={`w-full h-full z-[-1] absolute rounded-2xl backdrop-blur-md bg-white/0 ${inView ? "" : "bottom-[1px]"}`}></div>
                
                <div className="h-50 w-full overflow-hidden rounded-t-2xl">
                    <img src={thumbnail} className="w-full h-full object-cover"/>   
                </div>
            
                <div className=" flex">
                    <div className="h-30 w-30 ml-2 mr-4 flex justify-center items-center content-center">
                        <img
                        src={imgUrl}
                        className={`${size} w-auto animation-rotate-y ${extra}`}
                        style={{
                        animationPlayState: inView ? "running" : "paused"
                        }}
                    />
                    </div>

                    <div className="w-fit relative top-1 right-1 flex-col justify-center items-center content-center">
                        <p className="text-[22px] mb-2 !cursor-pointer">{date}</p>
                        <p className="text-[22px] font-bold mt-1 mb-1 flex !cursor-pointer">{title}</p>
                    </div>
                </div>

                <p className="h-fit w-auto ml-6 mr-6 mt-2 mb-3 text-base/7 !cursor-pointer">{description}</p>

                <a href={link} target="_blank" rel="noopener noreferrer" className="ml-6">
                    <button className="border-1 border-white rounded-2xl p-1 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <p className="text-[10px] !cursor-pointer">Learn More</p>
                    </button>
                </a>

                <p className="h-fit w-auto text-xl font-bold ml-6 mt-5 mb-1 !cursor-pointer">Tech Stack</p>

                <IconShowCaseProject
                    CategoryObject={technologies}
                />

            </div>
        </div>
    );
}