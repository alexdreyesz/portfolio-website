import ContactCard from "./ContactCard"



export default function Contact() {



    return(
        <div id="contact" className="h-fit scroll-mt-[10px] pb-30 pt-10">
            <div className="h-22 w-auto pb-35 flex-col justify-center text-center items-center content-center text-white max-sm:pb-70">
                <p className="text-4xl pb-5">Contact</p>
                <p className="w-[80%] text-2xl/9 mx-auto text-center">Don't hesitate to reach out to me for any inquiries or collaborations.</p>
            </div>

            <div className="flex justify-center gap-40">
                <div className=" w-[30%] flex flex-col gap-10">
                    <div className="h-fit w-full flex-col text-white">
                        <p className="text-4xl pb-5">Let's Connect</p>
                        <p className="text-xl/8">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the following channels.</p>
                    </div>
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />
                </div>
                
                <div className="w-[30%] flex flex-col gap-10 rounded-2xl backdrop-blur-md bg-white/0 glowing-border">

                </div>
            </div> 
        </div>
    );
}