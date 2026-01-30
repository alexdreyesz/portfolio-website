import { words } from "../../../constants/index"
import GSAPScrollBehaviorAbout from "../../../utils/gsapScrollBehaviorAbout"


// Images
import portraitFormal from '../../../assets/images/portrait-formal.png'
import family from '../../../assets/images/family.jpeg'

import molly from "../../../assets/images/molly.jpeg"

import graduation from "../../../assets/images/graduation.jpeg"

export default function About() {

    GSAPScrollBehaviorAbout();

    let introduction = "As stated before, my name is Alex D. Reyes, and I’m a Computer Science graduate from the University of Central Florida. I collaborated with the U.S. Space Force to develop AskPolaris, an AI-powered IT solution tool, and I also served as a Teaching Assistant for UCF’s Senior Design course, where I helped students manage their capstone projects. Outside of tech, I enjoy listening to music, playing video games, exploring game development, playing football, archery, and spending quality time with friends and family.";

    return(
        <div id="welcome" className="h-fit mt-20 flex-col justify-items-center scroll-mt-12 max-sm:h-fit max-sm:mb-15">

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

            <div className="w-full flex justify-evenly mt-10 mb-10 max-sm:flex-col max-sm:justify-center max-sm:items-center">
   
                <div className="gsap-about-left-portrait">
                    <div className="relative h-120 w-auto rounded-2xl glowing-border max-sm:h-fit max-sm:w-auto max-sm:mb-20 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={portraitFormal} className="w-full h-full object-fill relative rounded-2xl max-sm:h-[55vh] max-sm:w-auto"/>
                    </div>
                </div>

                <div className="gsap-about-right-portrait">
                    <div className="relative h-120 w-auto glowing-border rounded-2xl max-sm:h-fit max-sm:w-auto max-sm:mb-20 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={family} className="w-full h-full object-fill relative rounded-2xl max-sm:h-[30.5vh] max-sm:w-auto"/>
                    </div>
                </div>

            </div>

            

            <div id="about" className="h-22 w-auto pt-30 pb-40 flex-col justify-center text-center items-center content-center text-white gsap-skills-top max-sm:pb-70">
                <p className="text-4xl pb-5">About Me</p>
                <p className="w-[80%] text-2xl/9 mx-auto text-center">Here’s a bit about my background, interests, and what drives me as a developer.</p>
            </div>
                                
            {/*Molly Section*/}
            <div className="w-full flex justify-evenly text-white pb-20 mt-10 mb-10 max-sm:flex-col max-sm:justify-center max-sm:items-center gsap-about-down">         
                <div className="relative h-120 w-auto rounded-2xl glowing-border gsap-about-left max-sm:h-fit max-sm:w-auto max-sm:mb-20">
                    <img src={molly} className="w-full h-full object-fill relative rounded-2xl max-sm:h-[55vh] max-sm:w-auto"/>
                </div>

                <div className="w-[30%] min-w-100">
                    <p className="text-5xl gsap-about-right text-center pb-10">Molly</p>

                    <p className="text-2xl/9 gsap-about-right">She is My precious dog. She was a part of our family on 2020.</p>
                </div>

            </div>

            {/*Molly Section*/}
            <div className="w-full flex justify-evenly text-white pb-20 mt-10 mb-10 max-sm:flex-col max-sm:justify-center max-sm:items-center gsap-about-top">         
                <p className="w-[30%] min-w-100 text-2xl/9 gsap-about-left">Here’s a bit about my background, interests, and what drives me as a developer.</p>
                
                <div className="relative h-120 w-auto rounded-2xl glowing-border gsap-about-right max-sm:h-fit max-sm:w-auto max-sm:mb-20">
                    <img src={molly} className="w-full h-full object-fill relative rounded-2xl max-sm:h-[55vh] max-sm:w-auto"/>
                </div>
            </div>
     
        </div>
    )
}