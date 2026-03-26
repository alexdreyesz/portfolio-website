import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function GSAPScrollBehaviorCareer() {
    useGSAP(() => {
        gsap.utils.toArray(".gsap-career-card-left").forEach((card) => {
            gsap.from(card as HTMLElement, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: "left left",
                duration: 1.75,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card as HTMLElement,
                    start: "top 65%",
                    toggleActions: "play none none reverse",
                }
            });
        });

        gsap.utils.toArray(".gsap-career-card-right").forEach((card) => {
            gsap.from(card as HTMLElement, {
                xPercent: 100,
                opacity: 0,
                transformOrigin: "right right",
                duration: 1.75,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card as HTMLElement,
                    start: "top 65%",
                    toggleActions: "play none none reverse",
                }
            });
        });

        gsap.utils.toArray(".gsap-career-title").forEach((text) => {
            gsap.from(text as HTMLElement, {
                yPercent: 50,
                opacity: 0,
                transformOrigin: "bottom bottom",
                duration: 1.75,
                ease: "power1.out",
                scrollTrigger: {
                trigger: text as HTMLElement,
                start: "top 100%",
                toggleActions: "play none none reverse",
                }
            });
        });


    }, []);
};