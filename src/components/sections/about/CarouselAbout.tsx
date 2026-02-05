import { useRef, useState } from "react";
import { useInView } from "../../../hooks/useInView";

interface CarouselProps {
    index: string,
    portrait: string,
    title: string,
    body: string,
}

export default function CarouselAbout({ index,portrait, title, body }: CarouselProps) {
    const [hovered, setHovered] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const { ref, inView } = useInView<HTMLDivElement>(0.2); // 20% visible = active

    return (
        <div  
            className={`relative h-120 w-auto flex rounded-2xl max-sm:h-fit max-sm:w-auto max-sm:mb-20 hover:scale-105 transition-transform duration-300 ease-in-out carousel-slider-item ${inView ? "glowing-border" : "glow-disabled"}`}

            ref={ref}
            style={ {"--position": index, animationPlayState: inView ? "running" : "paused"} as React.CSSProperties }

            onMouseEnter={() => {
            setHovered(true); 
            }} 
            
            onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => {
                    setHovered(false);    
                }, 100);
            }}
        >
            <img src={portrait} className="w-full h-full object-fill relative rounded-2xl max-sm:h-100"/>

            { hovered && (
                <div className="text-white">
                    <div className="h-full w-full absolute inset-0 z-1 rounded-2xl transition-colors duration-300 ease-in-out bg-black/35"></div>

                    <div className="absolute bottom-3 left-3 right-3 z-2 flex flex-col justify-start text-white overflow-hidden items-start text-left">
                        <div className="h-fit w-fit border-1 border-white rounded-2xl backdrop-blur-md bg-white/0 px-3 py-1 mb-2">
                            <p className="text-left">{title}</p>
                        </div>

                        <div className="h-fit w-full text-wrap overflow-hidden">
                            <p className="text-left">{body}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}