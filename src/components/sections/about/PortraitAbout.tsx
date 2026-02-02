import { useRef, useState } from "react";

interface PortraitProps {
    portrait: string,
    title: string,
    body: string,
}

export default function PortraitAbout({ portrait, title, body }: PortraitProps) {
    const [hovered, setHovered] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    return (
        <div  
            className="relative h-120 w-auto flex rounded-2xl glowing-border max-sm:h-fit max-sm:w-auto max-sm:mb-20 hover:scale-105 transition-transform duration-300 ease-in-out" 

            onMouseEnter={() => {
            setHovered(true); 
            }} 
            
            onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => {
                    setHovered(false);    
                }, 100);
            }}
        >
            <img src={portrait} className="w-full h-full object-fill relative rounded-2xl max-sm:h-[55vh] max-sm:w-auto"/>

            { hovered && (
                <div className="text-white">
                    <div className="h-full w-full absolute inset-0 z-1 rounded-2xl transition-colors duration-300 ease-in-out bg-black/35"></div>

                    <div className="absolute bottom-3 left-3 right-3 z-2 text-white">
                        <div className="h-fit w-fit border-1 border-white rounded-2xl backdrop-blur-md bg-white/0 px-3 py-1 mb-2">
                            <p className="">{title}</p>
                        </div>

                        <div className="h-fit w-full text-wrap overflow-hidden">
                            <p className="">{body}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}