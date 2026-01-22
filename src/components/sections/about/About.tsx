import { words, languages, frameworks, libraries, developmentTools, designTools, databases, AILLM, professional } from "../../../constants/index"
import portraitFormal from '/src/assets/images/portrait-formal.png'
import family from '/src/assets/images/family.jpeg'

import IconShowCaseAbout from "./IconShowCaseAbout";

import GSAPScrollBehaviorAbout from "../../../utils/gsapScrollBehaviorAbout"

export default function About() {

    GSAPScrollBehaviorAbout();

    return(
        <div id="about" className="h-500 mt-20 flex-col justify-items-center scroll-mt-12 max-sm:h-fit max-sm:mb-15">
            
            <div className="w-full flex justify-evenly mt-10 mb-10 max-sm:flex-col max-sm:justify-center max-sm:items-center">
               
                <div className="relative h-120 w-auto overflow-hidden rounded-lg gsap-about-left max-sm:h-fit max-sm:w-auto max-sm:mb-20 border-4 ">
                    <img src={portraitFormal} className="w-full h-full object-fill relative rounded-lg max-sm:h-[55vh] max-sm:w-auto"/>
                </div>

                <div className="relative h-120 w-auto overflow-hidden rounded-lg gsap-about-right max-sm:h-fit">
                    <img src={family} className="w-full h-full object-fill relative rounded-lg max-sm:h-[30.5vh] max-sm:w-auto"/>
                </div>

            </div>

            <div className="w-250 h-fit mt-13 text-2xl text-white gsap-about-top max-sm:w-auto">

                <div className="w-full h-8 mb-5 items-center justify-center text-center overflow-hidden max-sm:overflow-visible max-sm:h-fit max-sm:pb-5  ">
                    <div className="flex justify-center relative bottom-[5px] font-bold text-3xl text-white max-sm:flex-col max-sm:items-center">
                        
                        <div className="h-fit w-fit max-sm:pb-5">Welcome To My Portfolio! &nbsp;</div>

                        <div className="h-8 w-auto max-sm:overflow-hidden">
                            Made With &nbsp;

                            <span className="slide">
                                <span className="wrapper">
                                    {words.map((word) => (
                                        <span key={word.text} className="flex items-center gap-2 pb-2">
                                            <img src={word.imgPath} className="h-6" alt={word.text}>
                                            </img>

                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>                       
                        </div>
                    </div>
                </div>
 
                <p className="flex-col text-2xl/9 max-sm:pl-6 max-sm:pr-6">As stated before my name is Alex D. Reyes, and I am a Computer Science student at the University of Central Florida. I am currently collaborating with U.S. Space Force to develop AskPolaris, an AI-powered IT solution tool. Some of my hobbies are listening to music, playing video games, game development, playing football, archery, and spending quality time with friends and family.</p>
            </div>
            
            <IconShowCaseAbout 
                CategoryName="Languages"
                CategoryObject={languages}
                GSAPDirection="down"
            />

            <IconShowCaseAbout 
                CategoryName="Frameworks"
                CategoryObject={frameworks}
                GSAPDirection="down"
            />

            <IconShowCaseAbout 
                CategoryName="Libraries"
                CategoryObject={libraries}
                GSAPDirection="down"
            />

            <IconShowCaseAbout 
                CategoryName="Development Tools"
                CategoryObject={developmentTools}
                GSAPDirection="down"
            />

            <IconShowCaseAbout 
                CategoryName="Design Tools"
                CategoryObject={designTools}
                GSAPDirection="down"
            />

            <IconShowCaseAbout 
                CategoryName="Databases"
                CategoryObject={databases}
                GSAPDirection="down"
            />

            <IconShowCaseAbout 
                CategoryName="AI & LLMs"
                CategoryObject={AILLM}
                GSAPDirection="down"
            />

            <IconShowCaseAbout 
                CategoryName="Professional"
                CategoryObject={professional}
                GSAPDirection="down"
            />
        </div>
    )
}