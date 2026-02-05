import { words } from "../../../constants/index"
import GSAPScrollBehaviorAbout from "../../../utils/gsapScrollBehaviorAbout"
import PortraitAbout from "./PortraitAbout";
import CarouselAbout from "./CarouselAbout";

import { useInView } from "../../../hooks/useInView";


// Images
import portraitFormal from '../../../assets/images/portrait-formal.png'
import family from '../../../assets/images/family.jpeg'

import graduation from "../../../assets/images/graduation.jpeg"
import knightHacks from "../../../assets/images/knighhacks.jpeg"
import graduationFamily from "../../../assets/images/graduation-family.jpeg"
import hackathon from "../../../assets/images/hackthon.jpeg"

import molly from "../../../assets/images/molly.jpeg"
import mollyAsking from "../../../assets/images/molly-asking.jpeg"
import mollyBeer from "../../../assets/images/molly-beer.jpeg"
import mollyCar from "../../../assets/images/molly-car.jpeg"
import mollyCute from "../../../assets/images/molly-cute.jpeg"
import mollyNice from "../../../assets/images/molly-nice.jpeg"
import mollyPerspective from "../../../assets/images/molly-perspective.jpeg"
import mollyPurple from "../../../assets/images/molly-purple.jpeg"
import mollyTree from "../../../assets/images/molly-tree.jpeg"

export default function About() {

    GSAPScrollBehaviorAbout();

    let introduction = "As stated before, my name is Alex D. Reyes, and I’m a Computer Science graduate from the University of Central Florida. I collaborated with the U.S. Space Force to develop AskPolaris, an AI-powered IT solution tool, and I also served as a Teaching Assistant for UCF’s Senior Design course, where I helped students manage their capstone projects. Outside of tech, I enjoy listening to music, playing video games, exploring game development, playing football, archery, and spending quality time with friends and family.";

    const { ref, inView } = useInView<HTMLDivElement>(0.1); // 20% visible = active

    return(
        <div id="welcome" className="h-fit mt-20 flex-col justify-items-center scroll-mt-14 max-sm:h-fit max-sm:mb-15">

            <div className="w-250 h-fit mt-13 text-2xl text-white gsap-about-top max-sm:w-auto max-sm:mb-20">

                <div className="w-full h-8 mb-5 items-center justify-center text-center overflow-hidden max-sm:overflow-visible max-sm:h-fit max-sm:pb-5  ">
                    <div className="flex justify-center relative bottom-[5px] font-bold text-3xl text-white max-sm:flex-col max-sm:items-center">
                        
                        <div className="h-fit w-fit max-sm:pb-5">Welcome To My Portfolio! &nbsp;</div>

                        <div className="h-8 w-auto max-sm:overflow-hidden">
                            Made With &nbsp;

                            <span className="slide">
                                <span className="wrapper">
                                    {words.map((word) => (
                                        <span key={word.text} className="flex items-center gap-2 pb-2">
                                            <img src={word.imgPath} className="h-6" alt={word.text}></img>

                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>                       
                        </div>
                    </div>
                </div>
 
                <p className="flex-col text-2xl/9 max-sm:pl-6 max-sm:pr-6">{introduction}</p>
            </div>

            {/*Portrait Section*/}
            <div className="w-full flex justify-evenly pt-10 pb-5  max-sm:flex-col max-sm:justify-center max-sm:items-center">
   
                <div className="gsap-about-left">
                    <PortraitAbout portrait={portraitFormal} title="Formal" body="Old Picture from 2016." />
                </div>

                <div className="gsap-about-right">
                    <PortraitAbout portrait={family} title="Arrival" body="First Day as an international student." />
                </div>

            </div>

            {/*About Me Section*/}
            <div id="about" className="h-22 w-250 pt-30 pb-40 scroll-mt-[-70px] flex-col justify-center text-center items-center content-center text-white max-sm:pt-0 max-sm:mb-0  max-sm:w-auto">
                <div className="w-auto gsap-about-top">
                    <p className="text-4xl pb-5">About Me</p>
                    <p className="w-full text-2xl/9 mx-auto text-center">Here’s a little bit about my life and background.</p>
                </div>
            </div>

            {/*Graduation Section*/}
            <div className="w-full flex justify-evenly text-white mt-10 mb-20 max-sm:flex-col max-sm:gap-0 max-sm:justify-center max-sm:items-center gsap-about-down">         
                <div className="gsap-about-left">
                    <PortraitAbout portrait={graduation} title="Graduation" body="Graduated from University of Central Florida with a B.S. in Computer Science." />    
                </div>

                <div className="w-[50%] min-w-100 gsap-about-right max-sm:w-auto">
                    <p className="text-5xl text-center pb-10">Graduation</p>

                    <p className="text-2xl/9 px-20 max-sm:px-6">In December 2025, I graduated from the University of Central Florida (UCF) with a B.S. in Computer Science. During my time at UCF, I focused on fullstack development and gained experience supporting teams and building real projects. I served as a Teaching Assistant for the Senior Design course, and I also won first place in one category at the UCF Knight Hacks hackathon.</p>
                </div>
            </div>

            {/*Knight Hacks Section*/}
            <div className="w-full flex justify-evenly text-white mt-10 mb-20 max-sm:flex-col max-sm:gap-0 max-sm:justify-center max-sm:items-center gsap-about-top-portrait">         
                <div className="w-[50%] min-w-100 gsap-about-left-portrait max-sm:w-auto">
                    <p className="text-5xl text-center pb-10">KnightHacks</p>

                    <p className="text-2xl/9 px-20 max-sm:px-6">I was part of Knight Hacks, where I served as a Workshop Director and mentor. I helped run events, led workshops to teach technical topics, and supported other students as they learned and built projects. Through the club, I also strengthened my network while contributing to a more engaged and collaborative community.</p>
                </div>

                <div className="gsap-about-right-portrait max-sm:mt-10">
                    <PortraitAbout portrait={knightHacks} title="KnightHacks" body="2026 KnightHacks banquet event." />    
                </div>
            </div>

            {/*Hackathon Section*/}
            <div className="w-full flex justify-evenly text-white mt-10 mb-20 max-sm:flex-col max-sm:gap-0 max-sm:justify-center max-sm:items-center gsap-about-down">         
                <div className="gsap-about-left">
                    <PortraitAbout portrait={hackathon} title="Hackathon" body="Me and my team Knight Hacks 8. Winners 1st place Morgan&Morgan Challenge." />    
                </div>

                <div className="w-[50%] min-w-100 gsap-about-right max-sm:w-auto">
                    <p className="text-5xl text-center pb-10">Hackathon</p>
                    <p className="text-2xl/9 px-20 max-sm:px-6">Throughout my time at UCF, I participated in several hackathons to challenge myself and compete alongside talented students from across the country. I took part in hackathons such as ShellHacks and Knight Hacks, where I strengthened my teamwork, problem solving, and rapid development skills. At Knight Hacks 8, my team earned first place in a Morgan & Morgan challenge, winning us the $4,000 prize.</p>
                </div>
            </div>

            {/*Family Section*/}
            <div className="w-full flex justify-evenly text-white mt-10 mb-20 max-sm:flex-col max-sm:gap-0 max-sm:justify-center max-sm:items-center gsap-about-top-portrait">         
                <div className="w-[50%] min-w-100 gsap-about-left-portrait max-sm:w-auto">
                    <p className="text-5xl text-center pb-10">Family</p>

                    <p className="text-2xl/9 px-20 max-sm:px-6">This is my family. They sacrificed so much to help me become the professional I am today, and I’m committed to doing everything I can to take care of them. I’ll keep working hard, earning my place wherever I need to, so I can support them the way they’ve supported me. I love them deeply.</p>
                </div>

                <div className="gsap-about-right-portrait">
                    <PortraitAbout portrait={graduationFamily} title="Family" body="Me celebrating my graduation with my family." />    
                </div>
            </div>

            {/*Molly Section*/}
            <div className="w-full flex justify-evenly text-white mt-10 mb-20 max-sm:flex-col max-sm:gap-0 max-sm:justify-center max-sm:items-center gsap-about-down">         
                <div className="gsap-about-left">
                    <PortraitAbout portrait={molly} title="Molly" body="A precious member of my family." />    
                </div>
                <div className="w-[50%] min-w-100 gsap-about-right max-sm:w-auto">
                    <p className="text-5xl text-center pb-10">Dearly Beloved</p>

                    <p className="text-2xl/9 px-20 max-sm:px-6">She’s a precious member of our family. Her name is Molly, and she joined us around 2020. She’s a Maltese and has the sweetest personality. She only drinks cold water and won’t eat unless her meal includes cooked chicken. She also loves sleeping in the air conditioning preferably on a comfy bed.</p>
                </div>
            </div>

            {/*Carrousel Section*/}
            <div className="h-22 w-auto flex-col justify-center text-center items-center content-center text-white max-sm:pb-20 max-sm:pt-30">
                <div className="gsap-about-top">
                    <p className="text-4xl pb-5">Molly Showcase</p>
                </div>
            </div>

            <div className="carousel-banner gsap-about-top-portrait max-sm:mt-0">
                <div 
                    className="carousel-slider" 
                    ref={ref}
                    style={{"--quantity": 8, animationPlayState: inView ? "running" : "paused"} as React.CSSProperties}
                >
                    <CarouselAbout index="1" portrait={mollyPurple} title="Molly Purple" body="Molly with a nice purple ribbon." />  
                    <CarouselAbout index="2" portrait={mollyAsking} title="Molly Asking" body="Molly asking for a treat." />  
                    <CarouselAbout index="3" portrait={mollyBeer} title="Molly Beer" body="Molly joining the party." />  
                    <CarouselAbout index="4" portrait={mollyCar} title="Molly Car" body="Molly going to the salon." />    
                    <CarouselAbout index="5" portrait={mollyNice} title="Molly Cute" body="Molly looking cute." />   
                    <CarouselAbout index="6" portrait={mollyTree} title="Molly Tree" body="Molly with a beautiful macuelizo tree." />
                    <CarouselAbout index="7" portrait={mollyPerspective} title="Molly Perspective" body="Molly from a unique perspective." />
                    <CarouselAbout index="8" portrait={mollyCute} title="Molly pretty" body="Molly looking pretty." />
                </div>
            </div>
     
        </div>
    )
}