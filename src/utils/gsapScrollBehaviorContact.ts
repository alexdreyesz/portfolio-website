import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export default function GSAPScrollBehaviorcontact() {
    useGSAP(() => {
        gsap.utils.toArray(".gsap-contacts-left").forEach((card) => {
            gsap.from(card as HTMLElement, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: "left left",
                duration: 1.75,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card as HTMLElement,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                }
            });
        });
    
        gsap.utils.toArray(".gsap-contacts-right").forEach((card) => {
            gsap.from(card as HTMLElement, {
                xPercent: 100,
                opacity: 0,
                transformOrigin: "rightright",
                duration: 1.75,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card as HTMLElement,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                }
            });
        });
    
        gsap.utils.toArray(".gsap-contacts-top").forEach((text) => {
            gsap.from(text as HTMLElement, {
                yPercent: 50,
                opacity: 0,
                transformOrigin: "bottom bottom",
                duration: 1.75,
                ease: "power2.out",
                scrollTrigger: {
                trigger: text as HTMLElement,
                start: "top 110%",
                toggleActions: "play none none reverse",
                }
            });
        });
    }, []);
};