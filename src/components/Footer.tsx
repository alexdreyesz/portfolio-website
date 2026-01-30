import gmailIcon from '../assets/icons/contact/gmail-icon-white.png'
import github from '../assets/icons/contact/github.png'
import linkedin from '../assets/icons/contact/linkedin.png'
import resume from '../assets/icons/contact/resume.png'
import resumePdf from '../assets/documents/AlexReyes_Resume.pdf'

import bonk from '../assets/sound/bonk.mp3'
import frog from '../assets/sound/frog-laughing.mp3'
import king from '../assets/sound/Im Gonna Be King Of The Pirates!.mp3'

import PlayAudio from './common/audio/playAudio'

function Footer() {
    return(
        <footer className="h-24 footer-background flex justify-between items-center max-sm:h-50 max-sm:flex-col max-sm:justify-evenly max-sm:items-center max-sm:text-center">
            
            <div className="relative left-8 flex text-white max-sm:left-0">Thank you for visiting!! <PlayAudio source={frog}><p className="interactive-animation hover:scale-115 hover:animate-ping cursor-pointer">&nbsp;:D</p></PlayAudio></div>

            <div className="relative right-1 flex space-x-12 max-sm:space-x-15">
    
                <a href="https://github.com/alexdreyesz" target="_blank" rel="noopener noreferrer">
                    <img src={github} className="h-8 w-auto interactive-animation hover:scale-115" alt="Github Link"/>
                </a>
                
                <a href="https://www.linkedin.com/in/alexdreyesz/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} className="h-8 w-auto interactive-animation hover:scale-115" alt="LinkedIn Link"/>
                </a>

                <a href={resumePdf} target="_blank" rel="noopener noreferrer">
                    <img src={resume} className="h-8.5 w-auto interactive-animation hover:scale-115" alt="Resume Link"/>
                </a>

                <a href="mailto:alexdreyesz@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={gmailIcon} className="h-8.5 w-auto interactive-animation  hover:scale-115" alt="Email Link"/>
                </a>
            </div>

            <div className="relative right-8 flex text-white max-sm:right-0"><PlayAudio source={bonk}><p className="hover:scale-80 hover:animate-spin cursor-pointer">©&nbsp;</p></PlayAudio>2025 Alex<PlayAudio source={king}><p className="hover:scale-120 hover:animate-bounce cursor-pointer">&nbsp;D.&nbsp;</p></PlayAudio> Reyes</div>
            
        </footer>
    )
}

export default Footer