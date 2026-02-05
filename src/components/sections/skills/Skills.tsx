import { languages, frameworks, libraries, developmentTools, designTools, databases, AILLM, professional } from "../../../constants/index"

import IconShowCaseSkills from "./IconShowCaseSkills";

import GSAPScrollBehaviorSkills from "../../../utils/gsapScrollBehaviorSkills"

export default function Skills() {

    GSAPScrollBehaviorSkills();

    return(
        <div id="skills" className="h-fit mt-25 flex-col justify-items-center scroll-mt-12 max-sm:h-fit max-sm:mb-15">

            <div className="h-22 w-250 pb-40 flex-col justify-center text-center items-center content-center text-white gsap-skills-top max-sm:pb-70 max-sm:w-auto">
                <p className="text-4xl pb-5">Skills</p>
                <p className="w-full text-2xl/9 mx-auto text-center">Here are the key skills that best represent the experience I’ve built through my academic and professional journey.</p>
            </div>
            
            <IconShowCaseSkills
                CategoryName="Languages"
                CategoryObject={languages}
                GSAPDirection="down"
            />

            <IconShowCaseSkills 
                CategoryName="Frameworks"
                CategoryObject={frameworks}
                GSAPDirection="down"
            />

            <IconShowCaseSkills 
                CategoryName="Libraries"
                CategoryObject={libraries}
                GSAPDirection="down"
            />

            <IconShowCaseSkills
                CategoryName="Development Tools"
                CategoryObject={developmentTools}
                GSAPDirection="down"
            />

            <IconShowCaseSkills 
                CategoryName="Design Tools"
                CategoryObject={designTools}
                GSAPDirection="down"
            />

            <IconShowCaseSkills 
                CategoryName="Databases"
                CategoryObject={databases}
                GSAPDirection="down"
            />

            <IconShowCaseSkills 
                CategoryName="AI & LLMs"
                CategoryObject={AILLM}
                GSAPDirection="down"
            />

            <IconShowCaseSkills 
                CategoryName="Professional"
                CategoryObject={professional}
                GSAPDirection="down"
            />
        </div>
    )
}