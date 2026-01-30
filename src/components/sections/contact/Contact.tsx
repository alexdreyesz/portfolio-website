import ContactCard from "./ContactCard"
import ContactMessage from "./ContactMessage"

import gmail from '../../../assets/icons/contact/gmail-icon.svg';
import linkedInIcon from '../../../assets/icons/badges/professional/linkedin.svg';
import githubIcon from '../../../assets/icons/contact/github-icon-color.svg';
import resumeIcon from '../../../assets/icons/contact/resume-icon.png';
import resumePDF from '../../../assets/documents/AlexReyes_Resume.pdf';

import GSAPScrollBehaviorContact from "../../../utils/gsapScrollBehaviorContact"

export default function Contact() {

    GSAPScrollBehaviorContact();

    return(
        <div id="contact" className="h-fit scroll-mt-[50px] pb-30">
            <div className="h-22 w-auto pb-35 flex-col justify-center text-center items-center content-center text-white max-sm:pb-60 gsap-contacts-top">
                <p className="text-4xl pb-5">Contact</p>
                <p className="w-[80%] text-2xl/9 mx-auto text-center">Don't hesitate to reach out to me for any inquiries or collaborations.</p>
            </div>

            <div className="flex justify-center gap-40 max-sm:flex-col max-sm:items-center max-sm:gap-10">
                <div className="h-auto w-[30%] min-w-[300px] max-sm:min-w-[350px] flex flex-col gap-10 gsap-contacts-left">
                    <div className="h-fit w-full flex-col text-white">
                        <p className="text-4xl pb-5 max-sm:text-center">Let's Connect</p>
                        <p className="text-xl/8 max-sm:text-center">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the following channels.</p>
                    </div>
                    <a href="mailto:alexdreyesz@gmail.com" target="_blank"><ContactCard icon={gmail} title="Email" detail="alexdreyesz@gmail.com" /></a>
                    <a href="https://www.linkedin.com/in/alexdreyesz/" target="_blank"><ContactCard icon={linkedInIcon} title="LinkedIn" detail="linkedin.com/in/alexdreyesz" /></a>
                    <a href="https://github.com/alexdreyesz" target="_blank"><ContactCard icon={githubIcon} title="Github" detail="github.com/alexdreyesz" /></a>
                    <a href={resumePDF} target="_blank"><ContactCard icon={resumeIcon} title="Resume" detail="Check out my Resume" /></a>
                </div>
                
                <div className="h-auto w-[30%] min-w-[500px] max-sm:min-w-[350px] gsap-contacts-right">
                    <ContactMessage />
                </div>
            </div> 
        </div>
    );
}