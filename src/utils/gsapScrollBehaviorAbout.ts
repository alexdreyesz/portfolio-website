import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export default function GSAPScrollBehaviorAbout() {
    useGSAP(() => {
        // non-portrait animations (all sizes)
        gsap.utils.toArray(".gsap-about-left").forEach((card) => {
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

        gsap.utils.toArray(".gsap-about-right").forEach((card) => {
            gsap.from(card as HTMLElement, {
                xPercent: 100,
                opacity: 0,
                transformOrigin: "right right",
                duration: 1.75,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card as HTMLElement,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                }
            });
        });

        gsap.utils.toArray(".gsap-about-top").forEach((text) => {
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

        gsap.utils.toArray(".gsap-about-down").forEach((text) => {
            gsap.from(text as HTMLElement, {
                yPercent: -40,
                opacity: 0,
                transformOrigin: "top top",
                duration: 1.75,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: text as HTMLElement,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                }
            });
        });

        const mm = gsap.matchMedia();

        // Desktop portrait animations
        mm.add("(min-width: 769px)", () => {
            gsap.utils.toArray(".gsap-about-top-portrait").forEach((text) => {
                gsap.from(text as HTMLElement, {
                    yPercent: 50,
                    opacity: 0,
                    transformOrigin: "bottom bottom",
                    duration: 1.75,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: text as HTMLElement,
                        start: "top 100%",
                        toggleActions: "play none none reverse",
                    }
                });
            });

            gsap.utils.toArray(".gsap-about-left-portrait").forEach((card) => {
                gsap.from(card as HTMLElement, {
                    xPercent: -100,
                    opacity: 0,
                    transformOrigin: "left left",
                    duration: 1.75,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card as HTMLElement,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    }
                });
            });

            gsap.utils.toArray(".gsap-about-right-portrait").forEach((card) => {
                gsap.from(card as HTMLElement, {
                    xPercent: 100,
                    opacity: 0,
                    transformOrigin: "right right",
                    duration: 1.75,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card as HTMLElement,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    }
                });
            });
        });

        // Mobile portrait animations
        mm.add("(max-width: 768px)", () => {
            gsap.utils.toArray(".gsap-about-top-portrait").forEach((text) => {
                gsap.from(text as HTMLElement, {
                    yPercent: 30,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: text as HTMLElement,
                        start: "top 120%",
                        toggleActions: "play none none reverse",
                    }
                });
            });

            gsap.utils.toArray(".gsap-about-left-portrait").forEach((card) => {
                gsap.from(card as HTMLElement, {
                    xPercent: -40,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card as HTMLElement,
                        start: "top 120%",
                        toggleActions: "play none none reverse",
                    }
                });
            });

            gsap.utils.toArray(".gsap-about-right-portrait").forEach((card) => {
                gsap.from(card as HTMLElement, {
                    xPercent: 40,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card as HTMLElement,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    }
                });
            });
        });

        return () => mm.revert();
    }, []);
};