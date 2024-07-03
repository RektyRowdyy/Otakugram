import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CardSlider.css'
import { CustomArrows } from "../../../constants.jsx";
import { animeData } from "../../../constants.jsx";


export default function CardSlider() {

    //Slider Settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <CustomArrows arrowType="next" />,
        prevArrow: <CustomArrows arrowType="prev" />,
        dotsClass: 'slick-dots custom-slick-dots',
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };

    return (
        <>

            <div className="w-100 relative">
                <div className=" -mt-28 mb-10">
                    <h1 className="z-10 absolute text-white text-3xl ml-3 top-[-50px] flex cardHeader">
                        New On <img className="h-9 w-auto ml-2 -mr-0.5" src="Otakugram Logo.png" alt="Otakugram Logo" />takugram
                    </h1>
                    <Slider {...settings} className="absolute newOtaku">
                        {animeData.map((d) => (
                            <div key={d.animeName} className="text-white h-[400px] flex justify-center">
                                <img src={d.animePoster} alt={d.animeName} className="h-[400px] w-auto object-cover" />
                            </div>
                        ))}
                    </Slider >
                </div>
            </div>

        </>
    )

}