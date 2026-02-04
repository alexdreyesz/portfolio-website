import { useInView } from "../../../hooks/useInView";

interface CareerCardProps {
    imgUrl: string;
    date: string;
    title: string;
    location: string;
    description: string;
    size: string;
}

export default function CareerCard({imgUrl, date, title, location, description, size}: CareerCardProps) {
    
    const { ref, inView } = useInView<HTMLDivElement>(0.2); // 20% visible = active
    
    return (
        <div className="h-fit w-150 rounded-2xl border-1 border-gray-800 max-sm:w-auto max-sm:relative max-sm:right-[12%] glowing-border hover:scale-105 transition-transform duration-300 ease-in-out"
            ref={ref}
            style={{
                animationPlayState: inView ? "running" : "paused"
            }}
        >
            <div className="relative left-1.5 bottom-0.5 grid grid-rows-2 text-white content-center items-center">
                
                <div className="w-full h-full z-[-1] absolute right-[6px] top-[2px]  rounded-2xl  backdrop-blur-md bg-white/0"></div>

                <div className="mt-3 flex">
                    <div className="h-30 w-30 ml-2 mr-4 flex justify-center items-center content-center">
                        <img src={imgUrl} className={`${size} w-auto animation-rotate-y`}/>
                    </div>

                    <div className="w-fit flex-col justify-center items-center content-center">
                        <p className="">{date}</p>
                        <p className="text-[22px] font-bold mt-1 mb-1">{title}</p>
                        <p className="">{location}</p>
                    </div>
                </div>

                <p className="h-fit w-auto ml-6 mr-6 mb-6 text-base/7">{description}</p>
            </div>
        </div>
    );
}