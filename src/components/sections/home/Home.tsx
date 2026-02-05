import Title from "./HomeTitle"
import Sunny from "../../common/3d-models/Sunny"
import Cherokee from "../../common/3d-models/Cherokee"
import Earth from "../../common/3d-models/Earth"

function Home() {
    return (
        <section id="home" className="h-screen pt-12 relative overflow-hidden scroll-mt-12">

            <div className="absolute w-full flex justify-end max-sm:top-70">
                <div className="h-100 w-100 relative left-135 bottom-10 z-[-1] max-sm:left-103">
                    <Cherokee/>
                </div>

                <div className="h-100 w-100 relative left-50 bottom-25 z-[-2]">
                    <Earth/>
                </div>
            </div>

            <Title/>

            <div className="h-full w-auto pb-8 flex justify-center items-center content-center">
                <div className="h-full w-auto absolute top-50 max-sm:top-80">
                    <Sunny/>
                </div>
            </div>

        </section>
    )
}

export default Home