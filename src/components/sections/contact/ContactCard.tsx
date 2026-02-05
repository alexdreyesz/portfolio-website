import { useInView } from "../../../hooks/useInView";

interface ContactCardProps{
    icon: string;
    title: string;
    detail: string;
}

export default function ContactCard({icon, title, detail}: ContactCardProps) {

    const { ref, inView } = useInView<HTMLDivElement>(0.2); // 20% visible = active

    return(
        <div 
            className={`h-20 w-full p-5 flex rounded-2xl backdrop-blur-md bg-white/0 interactive-animation ${inView ? "glowing-border" : "glow-disabled"}`}
            ref={ref}
            style={{
                animationPlayState: inView ? "running" : "paused"
            }}
        >
            <img src={icon} className="h-10 w-10" alt={`${title} Icon`} />

            <div className="pl-5 relative bottom-1 flex flex-col text-white">
                <p className="!cursor-pointer">{title}</p>
                <p className="!cursor-pointer">{detail}</p>
            </div>
        </div>
    );
}