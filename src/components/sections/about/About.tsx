import { words } from "../../../constants/index"
import GSAPScrollBehaviorAbout from "../../../utils/gsapScrollBehaviorAbout"
import PortraitAbout from "./PortraitAbout";
import CarouselAbout from "./CarouselAbout";


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

    return(
        <div id="welcome" className="h-fit mt-20flex-col justify-items-center scroll-mt-14 max-sm:h-fit max-sm:mb-15">

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
                    <PortraitAbout portrait={family} title="Arrival" body="First Day as an international student" />
                </div>

            </div>

            {/*About Me Section*/}
            <div id="about" className="h-22 w-auto pt-30 pb-40 scroll-mt-[-70px] flex-col justify-center text-center items-center content-center text-white max-sm:pb-70">
                <div className="gsap-about-top">
                    <p className="text-4xl pb-5">About Me</p>
                    <p className="w-[80%] text-2xl/9 mx-auto text-center">Here’s a bit about my background, interests, and what drives me as a developer.</p>
                </div>
            </div>

            {/*Graduation Section*/}
            <div className="w-full flex justify-center gap-40 text-white pb-20 mt-10 mb-10 max-sm:flex-col max-sm:justify-center max-sm:items-center gsap-about-down">         
                <div className="gsap-about-left">
                    <PortraitAbout portrait={graduation} title="Graduation" body="Graduated from University of Central Florida with a B.S. in Computer Science." />    
                </div>

                <div className="w-[40%] min-w-100 gsap-about-right">
                    <p className="text-5xl text-center pb-10">Graduated from CS</p>

                    <p className="text-2xl/9 px-20">In December 2025, I graduated from the University of Central Florida (UCF) with a B.S. in Computer Science. During my time at UCF, I focused on fullstack development and gained experience supporting teams and building real projects. I served as a Teaching Assistant for the Senior Design course, and I also won first place in one category at the UCF Knight Hacks hackathon.</p>
                </div>
            </div>

            {/*Family Section*/}
            <div className="w-full flex justify-center gap-40 text-white pb-20 mt-10 mb-10 max-sm:flex-col max-sm:justify-center max-sm:items-center gsap-about-top-portrait">         
                <div className="w-[40%] min-w-100 gsap-about-left-portrait">
                    <p className="text-5xl text-center pb-10">Family</p>

                    <p className="text-2xl/9 px-20">Me and my family on graduation day. The journey came with plenty of challenges, but I pushed through each one and I’m proud to have finally earned my degree.</p>
                </div>

                <div className="gsap-about-right-portrait">
                    <PortraitAbout portrait={knightHacks} title="Family" body="This is my family with me on my graduation day." />    
                </div>
            </div>

            {/*Graduation Section*/}
            <div className="w-full flex justify-center gap-40 text-white pb-20 mt-10 mb-10 max-sm:flex-col max-sm:justify-center max-sm:items-center gsap-about-down">         
                <div className="gsap-about-left">
                    <PortraitAbout portrait={hackathon} title="Graduation" body="Graduated from University of Central Florida with a B.S. in Computer Science." />    
                </div>

                <div className="w-[40%] min-w-100 gsap-about-right">
                    <p className="text-5xl text-center pb-10">Graduated from CS</p>

                    <p className="text-2xl/9 px-20">In December 2025, I graduated from the University of Central Florida (UCF) with a B.S. in Computer Science. During my time at UCF, I focused on fullstack development and gained experience supporting teams and building real projects. I served as a Teaching Assistant for the Senior Design course, and I also won first place in one category at the UCF Knight Hacks hackathon.</p>
                </div>
            </div>

            {/*Family Section*/}
            <div className="w-full flex justify-center gap-40 text-white pb-20 mt-10 mb-10 max-sm:flex-col max-sm:justify-center max-sm:items-center gsap-about-top-portrait">         
                <div className="w-[40%] min-w-100 gsap-about-left-portrait">
                    <p className="text-5xl text-center pb-10">Precious family member Molly</p>

                    <p className="text-2xl/9 px-20">She is My precious dog. She was a part of our family on 2020.</p>
                </div>

                <div className="gsap-about-right-portrait">
                    <PortraitAbout portrait={graduationFamily} title="Molly" body="She is My precious dog. She was a part of our family on 2020." />    
                </div>
            </div>

            {/*Graduation Section*/}
            <div className="w-full flex justify-center gap-40 text-white pb-20 mt-10 mb-10 max-sm:flex-col max-sm:justify-center max-sm:items-center gsap-about-down">         
                <div className="gsap-about-left">
                    <PortraitAbout portrait={molly} title="Graduation" body="Graduated from University of Central Florida with a B.S. in Computer Science." />    
                </div>

                <div className="w-[40%] min-w-100 gsap-about-right">
                    <p className="text-5xl text-center pb-10">Graduated from CS</p>

                    <p className="text-2xl/9 px-20">In December 2025, I graduated from the University of Central Florida (UCF) with a B.S. in Computer Science. During my time at UCF, I focused on fullstack development and gained experience supporting teams and building real projects. I served as a Teaching Assistant for the Senior Design course, and I also won first place in one category at the UCF Knight Hacks hackathon.</p>
                </div>
            </div>

            {/*Carrousel Section*/}
            <div className="carousel-banner">
                <div className="carousel-slider" style={{"--quantity": 8} as React.CSSProperties}>
                    <CarouselAbout index="1" portrait={mollyPurple} title="Molly Purple" body="Molly with a nice purple ribbon" />  
                    <CarouselAbout index="2" portrait={mollyAsking} title="Molly Asking" body="Molly asking for a treat" />  
                    <CarouselAbout index="3" portrait={mollyBeer} title="Molly Beer" body="Molly joining the party" />  
                    <CarouselAbout index="4" portrait={mollyCar} title="Molly Car" body="Molly going to the salon" />    
                    <CarouselAbout index="5" portrait={mollyNice} title="Molly Nice" body="Molly looking nice" />   
                    <CarouselAbout index="6" portrait={mollyTree} title="Molly Tree" body="Molly with a beautiful macuelizo tree" />
                    <CarouselAbout index="7" portrait={mollyPerspective} title="Molly Perspective" body="Molly from a unique perspective" />
                    <CarouselAbout index="8" portrait={mollyCute} title="Molly Cute" body="Molly looking cute" />
                </div>
            </div>
     
        </div>
    )
}