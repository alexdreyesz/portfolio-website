import Typewriter from 'typewriter-effect'

function Home() {
    return (
        <div className="flex-col text-center items-center pt-6 font-bold text-3xl text-white ">
            
            <p className=""> My Name Is Alex D. Reyes </p>

            <div className="mt-5">
                <Typewriter
                    options={{
                        strings: ['I am a Computer Science graduate from UCF, and', 'I will Be King Of The Software Engineers 👒😃'],
                        autoStart: true,
                        loop: true,
                        cursor: '|',
                        delay:50,
                        deleteSpeed:40,
                        
                    }}
                />
            </div>
        </div>
     
    )
}

export default Home