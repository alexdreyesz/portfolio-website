import linkedIdnIcon from '../../../assets/icons/badges/professional/linkedin.svg';

export default function ContactCard() {

    return(
        <div className="h-20 w-full p-5 flex rounded-2xl backdrop-blur-md bg-white/0 glowing-border">
            <img src={linkedIdnIcon} className="h-10 w-10" alt="LinkedIn Icon" />

            <div>
                <p className="text-white">Contact Card</p>
                <a><p></p></a>
            </div>
        </div>
    );
}