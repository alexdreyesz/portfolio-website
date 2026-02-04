import { useState } from 'react';
import logo from '../assets/icons/logo/kingz.png'
import PlayMusic from './common/audio/PlayMusic'

// Header For Porfolio Website 
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        // Header Container 
        <header className="h-12 fixed z-50 inset-x-0 top-0 bg-blue-100/70 flex justify-between items-center">

            <div className="w-full h-full z-[-1] absolute right-[0px] top-[-1px] backdrop-blur-md bg-white/0"></div>

            <a href="#home">
                <img src={logo} className="relative left-6 h-12 w-auto hover:scale-120 animate-spin-custom" alt="Kingz Logo"/>
            </a>

            <nav className="relative right-8 flex space-x-18 max-sm:hidden">
                <a className="cursor-pointer interactive-animation" href="#home"><p className="hover:scale-110">Home</p></a>
                <a className="cursor-pointer interactive-animation" href="#welcome"><p className="hover:scale-110">Welcome</p></a>
                <a className="cursor-pointer interactive-animation" href="#about"><p className="hover:scale-110">About</p></a>
                <a className="cursor-pointer interactive-animation" href="#career"><p className="hover:scale-110">Career</p></a>
                <a className="cursor-pointer interactive-animation" href="#projects"><p className="hover:scale-110">Projects</p></a>
                <a className="cursor-pointer interactive-animation" href="#skills"><p className="hover:scale-110">Skills</p></a>
                <a className="cursor-pointer interactive-animation" href="#contact"><p className="hover:scale-110">Contact</p></a>
                <PlayMusic/>
            </nav>

            <div className="md:hidden relative right-3"><PlayMusic /></div>

            <div className="md:hidden relative right-6 flex">            
                <button onClick={() => setIsOpen(!isOpen)} className="text-xl font-bold focus:outline-none">
                ☰
                </button>

                {isOpen && (
                <div className="absolute right-[-24px] top-[29px] mt-2 w-48 bg-blue-100/70 shadow-md z-49">
                    <div className="w-full h-full z-[-1] absolute right-[0px] top-[-1px] backdrop-blur-md bg-white/0"></div>
                    <a href="#home" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(!isOpen)}>Home</a>
                    <a href="#welcome" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(!isOpen)}>Welcome</a>
                    <a href="#about" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(!isOpen)}>About</a>
                    <a href="#career" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(!isOpen)}>Career</a>
                    <a href="#projects" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(!isOpen)}>Projects</a>
                    <a href="#skills" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(!isOpen)}>Skills</a>
                    <a href="#contact" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(!isOpen)}>Contact</a>
                </div>
                )}
            </div>
        </header>
    )
}

export default Header