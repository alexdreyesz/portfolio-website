import GalaxyBackground from '../../../../public/images/galaxy-background.png';
import './2Dbackground.css';

export default function Background2D() {
    return (
        <div className="fixed top-0 left-0 z-[-100] w-screen h-screen overflow-hidden">
            <div
                className="background2D animate-sphere-rotate"
                style={{ backgroundImage: `url(${GalaxyBackground})` }}
            />
        </div>
    );
}