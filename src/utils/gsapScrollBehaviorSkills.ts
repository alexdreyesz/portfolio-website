import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export default function GSAPScrollBehaviorSkills() {
    useGSAP(() => {
        gsap.utils.toArray(".gsap-skills-left").forEach((card) => {
            gsap.from(card as HTMLElement, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: "left left",
                duration: 1.75,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card as HTMLElement,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            });
        });

        gsap.utils.toArray(".gsap-skills-right").forEach((card) => {
            gsap.from(card as HTMLElement, {
                xPercent: 100,
                opacity: 0,
                transformOrigin: "right right",
                duration: 1.75,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card as HTMLElement,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            });
        });

        gsap.utils.toArray(".gsap-skills-top").forEach((text) => {
            gsap.from(text as HTMLElement, {
                yPercent: 50,
                opacity: 0,
                transformOrigin: "bottom bottom",
                duration: 1.75,
                ease: "power2.out",
                scrollTrigger: {
                trigger: text as HTMLElement,
                start: "top 80%",
                toggleActions: "play none none reverse",
                }
            });
        });

        gsap.utils.toArray(".gsap-skills-down").forEach((text) => {
            gsap.from(text as HTMLElement, {
                yPercent: -40,
                opacity: 0,
                transformOrigin: "top top",
                duration: 1.75,
                ease: "power1.out",
                scrollTrigger: {
                trigger: text as HTMLElement,
                start: "top 80%",
                toggleActions: "play none none reverse",
                }
            });
        });

    }, []);
};