import { useInView } from "../../../hooks/useInView";

export default function ContactMessage() {

    const { ref, inView } = useInView<HTMLDivElement>(0.2); // 20% visible = active

    return(
        <div 
            className={`h-full w-full p-10 flex flex-col justify-evenly gap-5 backdrop-blur-md bg-white/0 hover:scale-105 transition-transform duration-300 ease-in-out ${inView ? "glowing-border" : "glow-disabled"}`}
            ref={ref}
            style={{
                animationPlayState: inView ? "running" : "paused"
            }}
        >
            <div className="flex flex-col gap-2 text-white">
                <p>Name</p>
                <form className="w-full border-2 rounded-2xl border-white p-3">
                    <input type="text" placeholder="Your Name" className="h-full w-full outline-none"/>
                </form>
            </div>

            <div className="flex flex-col gap-2 text-white">
                <p>Email</p>
                <form className="w-full border-2 rounded-2xl border-white p-3">
                    <input type="text" placeholder="your.email@example.com"  className="h-full w-full outline-none"/>
                </form>
            </div>

            <div className="flex flex-col gap-2 text-white">
                <p>Message</p>
                <form className="h-fit w-full border-2 rounded-2xl border-white p-3">
                    <textarea placeholder="Tell me about your project or inquiry"  className="h-40 w-full resize-none outline-none"/>
                </form>
            </div>

            <div>
                <button className="h-15 w-full mt-5 mb-5 rounded-2xl font-bold bg-white hover:scale-105 transition-all duration-300 !cursor-pointer">Send Message</button>
            </div>
        </div>
    );
}