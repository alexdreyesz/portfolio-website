export default function ContactMessage() {

    return(
        <div className="h-full w-full border-5 rounded-2xl backdrop-blur-md bg-white/0 glowing-border">
            <div>
                <p>Name</p>
                <form>
                    <input type="text" placeholder="Your Name" />
                </form>
            </div>

            <div>
                <p>Email</p>
                <form>
                    <input type="text" placeholder="your.email@example.com" />
                </form>
            </div>

            <div>
                <p>Message</p>
                <form>
                    <input type="text" placeholder="Tell me about your project or inquiry" />
                </form>
            </div>

            <div>
                <button className="h-12 w-32 mt-5 mb-5 rounded-2xl backdrop-blur-md bg-white/0 glowing-border text-white hover:scale-105 transition-all duration-300">Send Message</button>
            </div>
        </div>
    );
}