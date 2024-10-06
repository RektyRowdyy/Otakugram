import { BsDashLg } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LatestAnimeSlider.css"
import { CustomArrows } from "../../../constants.jsx";
import { latestAnimeSlides } from "../../../constants.jsx";

// Creating Custom Dot
const CustomDot = ({ onClick }) => {
    return (
        <BsDashLg onClick={onClick}>
        </BsDashLg>
    )
}

export default function LatestAnimeSlider() {

    //Slider Settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomArrows arrowType="next" />,
        prevArrow: <CustomArrows arrowType="prev" />,
        dotsClass: 'slick-dots hero-custom-slick-dots',
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        customPaging: function(i) {
            return <CustomDot key={i} index={i} />
        }
    };

    return(
        <>
            <div>
                <div>
                    <Slider className="hero" {...settings} >
                        {latestAnimeSlides.map((slide, index) => (
                            <img key={slide.title} src={slide.url} alt="hero-background" className="hero-image" />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}