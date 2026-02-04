interface IconShowCasePrompts {
    CategoryObject: { text: string, badgeUrl: string }[],
}

import { useState } from "react";

export default function IconShowCase( { CategoryObject }: IconShowCasePrompts ) {
    
    const [hovered, setHovered] = useState<number | null>(null);
    
    return(
            <div className="flex flex-wrap flex-row pt-2 gap-3 ml-6 mr-6 mb-7"> 
                {CategoryObject.map((icon: { text: string, badgeUrl: string }, index: number) => (
                    <div key={index} className="relative flex-col justify-center items-center">
                        <img
                        className="h-14 animation-rotate-y mt-2"
                        src={icon.badgeUrl}
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
   
    );
}