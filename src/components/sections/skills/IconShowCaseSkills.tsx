interface IconShowCasePrompts {
    CategoryName: string,
    CategoryObject: { iconPath: string; text: string }[],
    GSAPDirection: string,
}

import { useState } from "react";

export default function IconShowCaseSkills( { CategoryName, CategoryObject, GSAPDirection }: IconShowCasePrompts ) {
    
    const [hovered, setHovered] = useState<number | null>(null);
    
    return(
        <div className={`w-250 h-fit flex-col mt-10 text-2xl text-white gsap-skills-${GSAPDirection} max-sm:w-auto max-sm:pl-6 max-sm:pr-6 max-sm:justify-self-start`}>
            <p>{CategoryName}:</p>
            <div className="flex flex-wrap flex-row pt-2 gap-3 max-sm:gap-10 max-sm:pb-10">
                
            {CategoryObject.map((icon: { iconPath: string, text: string}, index: number) => (
                <div key={index} className="relative flex-col justify-center items-center">
                    <img
                    className="h-14 animation-rotate-y mt-2"
                    src={icon.iconPath}
                    alt={icon.text}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    />

                    {hovered === index && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-1 border-gray-800 mt-1 px-2 py-1 rounded-lg backdrop-blur-md bg-white/0 text-white text-sm z-10">
                        {icon.text}
                    </div>
                    )}
                </div>
            ))}
            </div>
        </div>
    );
}