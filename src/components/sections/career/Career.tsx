import { cards } from "../../../constants/index"
import CareerCard from "./CareerCard"

import Badge3D from "../../common/3d-models/3DBadge"

import GSAPScrollBehaviorCareer from "../../../utils/gsapScrollBehaviorCareer"

export default function Career() {

    const isMobile = () => window.innerWidth <= 768; // sm: 640 md: 768

    GSAPScrollBehaviorCareer();

    return (
        <div id="career" className="h-fit scroll-mt-[-30px] mt-25">

            <div className="h-22 w-250 pb-45 flex-col mx-auto justify-center text-center items-center content-center text-white gsap-career-title max-sm:pb-90">
                <p className="text-4xl pb-5">Career</p>
                <p className="w-full text-2xl/9 mx-auto text-center">These are some of the highlights of my career journey. I’ve been fortunate to pursue higher education and to collaborate with incredible companies, individuals, and teams.</p>
            </div>
            
            {/* Hillsborough Section */}
            <div className="pt-20 pl-20 flex gsap-career-card-left max-sm:flex-col max-sm:justify-center max-sm:align-center max-sm:items-center">
                <CareerCard
                    imgUrl={cards.hillsborough.imgUrl}
                    date={cards.hillsborough.date}
                    title={cards.hillsborough.title}
                    location={cards.hillsborough.location}
                    description={cards.hillsborough.description}
                    size={"h-23"}
                />

                {/* Badge 3D Model Master Sword */}
                {!isMobile() && (
                   <div className="ml-auto mr-40 max-sm:pt-30 max-sm:pb-30">
                        <Badge3D
                            badge3DURL="/models/badges/master-sword-compressed.glb"
                            positionXYZ={{ x: 0, y: 0, z: -1 }}
                            rotationXYZ={{ x: 1.4, y: -0.5, z: 0 }}
                            animationXYZ={{x: 0.00, y: 0.002, z: 0.005}}
                        />
                   </div> 
                )}
                
                {isMobile() && (
                   <div className="mx-auto pt-10 relative right-10 h-100 w-[100%]">
                        <Badge3D
                            badge3DURL="/models/badges/master-sword-compressed.glb"
                            positionXYZ={{ x: 0, y: 0, z: -2 }}
                            rotationXYZ={{ x: 1.4, y: -0.5, z: 0 }}
                            animationXYZ={{x: 0.00, y: 0.002, z: 0.005}}
                        />
                   </div> 
                )}
            </div>

            {/* XIME Section */}
            <div className="pt-20 pr-20 flex justify-end gsap-career-card-right max-sm:pt-10 max-sm:flex-col max-sm:justify-center max-sm:align-center max-sm:items-center">
                
                {!isMobile() && (
                    <div className="ml-30 mr-auto max-sm:order-1 max-sm:pt-30 max-sm:pb-15 max-sm:ml-20 max-sm:relative max-sm:right-3 max-sm:bottom-8">
                        <Badge3D
                            badge3DURL="/models/badges/digimon-digivice-compressed.glb"
                            positionXYZ={{ x: 0, y: 0, z: -430 }}
                            rotationXYZ={{ x: 0, y: 9.5, z: -0.005 }}
                            animationXYZ={{x: 0, y: 0.004, z: 0}}
                        />
                    </div>
                )}

                {/* Badge 3D Digimon Digivice */}
                {isMobile() && (
                    <div className="order-1 mx-auto pt-10 relative left-10 h-100 w-[100%]">
                        <Badge3D
                            badge3DURL="/models/badges/digimon-digivice-compressed.glb"
                            positionXYZ={{ x: 0, y: 0, z: -430 }}
                            rotationXYZ={{ x: 0, y: 9.5, z: -0.005 }}
                            animationXYZ={{x: 0, y: 0.004, z: 0}}
                        />
                    </div>
                )}
                
                <div className="max-sm:relative max-sm:left-20">
                    <CareerCard
                        imgUrl={cards.xime.imgUrl}
                        date={cards.xime.date}
                        title={cards.xime.title}
                        location={cards.xime.location}
                        description={cards.xime.description}
                        size={"h-12"}
                    />
                </div>
            </div>

            {/* UCF Section */}
            <div className="pt-20 pl-20 flex gsap-career-card-left max-sm:pt-10 max-sm:flex-col max-sm:justify-center max-sm:align-center max-sm:items-center max-sm:relative max-sm:right-20">
                
                <div className="max-sm:relative max-sm:left-20 max-sm:pb-10">
                    <CareerCard
                        imgUrl={cards.ucf.imgUrl}
                        date={cards.ucf.date}
                        title={cards.ucf.title}
                        location={cards.ucf.location}
                        description={cards.ucf.description}
                        size={"h-20"}
                    />
                </div>

                {/* Badge 3D Model Star Compass  */}
                {!isMobile() && (
                    <div className="ml-auto mr-35 max-sm:pt-30 max-sm:pb-30 max-sm:relative max-sm:left-15">
                        <Badge3D
                            badge3DURL="/models/badges/star-compass-compressed.glb"
                            positionXYZ={{ x: 0, y: 0, z: 1 }}
                            rotationXYZ={{ x: 0, y: 0, z: 0 }}
                            animationXYZ={{x: 0.003, y: 0.002, z: 0.001}}
                        />
                    </div>
                )}

                {isMobile() && (
                    <div className="mx-auto relative left-10 h-100 w-[100%]">
                        <Badge3D
                            badge3DURL="/models/badges/star-compass-compressed.glb"
                            positionXYZ={{ x: 0, y: 0, z: 1 }}
                            rotationXYZ={{ x: 0, y: 0, z: 0 }}
                            animationXYZ={{x: 0.003, y: 0.002, z: 0.001}}
                        />
                    </div>
                )}

            </div>
            
            {/* Space Force Section */}
            <div className="pt-20 pr-20 flex justify-end gsap-career-card-right max-sm:pt-10 max-sm:flex-col max-sm:justify-center max-sm:align-center max-sm:items-center">
                
                {!isMobile() && (
                    <div className="ml-30 mr-auto max-sm:order-1 max-sm:pt-30 max-sm:pb-15 max-sm:ml-20 max-sm:relative max-sm:right-4">
                        <Badge3D
                            badge3DURL="/models/badges/gomu-gomu-no-mi-compressed.glb"
                            positionXYZ={{ x: 0, y: -25, z: -240 }}
                            rotationXYZ={{ x: 0, y: 1, z: 0 }}
                            animationXYZ={{x: 0, y: 0.004, z: 0}}
                        />
                    </div>                   
                )}

                {/* Badge 3D Model Gomu Gomu No Mi */}
                {isMobile() && (
                    <div className="order-1 mx-auto relative left-10 h-100 w-[100%]">
                        <Badge3D
                            badge3DURL="/models/badges/gomu-gomu-no-mi-compressed.glb"
                            positionXYZ={{ x: 0, y: -25, z: -240 }}
                            rotationXYZ={{ x: 0, y: 1, z: 0 }}
                            animationXYZ={{x: 0, y: 0.004, z: 0}}
                        />
                    </div>                   
                )}
                

                <div className="max-sm:relative max-sm:left-20 max-sm:pb-10">
                    <CareerCard
                        imgUrl={cards.spaceForce.imgUrl}
                        date={cards.spaceForce.date}
                        title={cards.spaceForce.title}
                        location={cards.spaceForce.location}
                        description={cards.spaceForce.description}
                        size={"h-22"}
                    />
                </div>
            </div>

            {/* UCF Section */}
            <div className="pt-20 pl-20 flex gsap-career-card-left max-sm:pt-10 max-sm:flex-col max-sm:justify-center max-sm:align-center max-sm:items-center max-sm:relative max-sm:right-20">
                
                <div className="max-sm:relative max-sm:left-20 max-sm:pb-10">
                    <CareerCard
                        imgUrl={cards.seniorDesign.imgUrl}
                        date={cards.seniorDesign.date}
                        title={cards.seniorDesign.title}
                        location={cards.seniorDesign.location}
                        description={cards.seniorDesign.description}
                        size={"h-20"}
                    />
                </div>

                {/* Badge 3D Model Grubbed Trapped */}
                {!isMobile() && (
                    <div className="ml-auto mr-35 max-sm:pt-30 max-sm:pb-30 max-sm:relative max-sm:left-15">
                        <Badge3D
                            badge3DURL="/models/badges/grub-trapped.glb"
                            positionXYZ={{ x: 0, y: -3.3, z: -10 }}
                            rotationXYZ={{ x: 0.4, y: 0, z: 0 }}
                            animationXYZ={{x: 0, y: 0.004, z: 0}}
                        />
                    </div>
                )}

                {isMobile() && (
                    <div className="mx-auto relative left-10 h-100 w-[100%]">
                        <Badge3D
                            badge3DURL="/models/badges/grub-trapped.glb"
                            positionXYZ={{ x: 0, y: -3.3, z: -10 }}
                            rotationXYZ={{ x: 0.3, y: 0, z: 0 }}
                            animationXYZ={{x: 0, y: 0.004, z: 0}}
                        />
                    </div>
                )}

            </div>

        </div>
    )
}


/* 

{!isMobile() && (
                   
)}

{isMobile() && (
                   
)}

*/