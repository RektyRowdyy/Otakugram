import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { BsDashLg } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LatestAnimeSlider.css"


// Function to Create Custom Arrows
function CustomArrows(props) {

    const { className, style, onClick, arrowType } = props;

    if (arrowType === 'next') {
        return (
            <FaChevronRight
                className={className}
                style={{ ...style, color: "white", right: "1%", zIndex: 1, height: "30px" }}
                onClick={onClick}
            />
        );
    }
    else if (arrowType === 'prev') {
        return (
            <FaChevronLeft
                className={className}
                style={{ ...style, color: "white", left: "1%", zIndex: 1, height: "30px" }}
                onClick={onClick}
            />
        );
    }
}

// Creating Custom Dot
const CustomDot = ({ onClick }) => {
    return (
        <BsDashLg onClick={onClick}>
        </BsDashLg>
    )
}

export default function LatestAnimeSlider() {

    const slides = [
        { url: "src/assets/img/hero-background-1.jpeg", title: 'One Piece' },
        { url: "src/assets/img/hero-background-2.jpg", title: 'Haikyuu' },
        { url: "src/assets/img/hero-background-3.jpg", title: 'Naruto' },
        { url: "src/assets/img/hero-background-4.png", title: 'Kaguya Sama' },
        { url: "src/assets/img/hero-background-5.jpg", title: 'AOT' },
    ]

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
                        {slides.map((slide, index) => (
                            <img key={slide.title} src={slide.url} alt="hero-background" className="hero-image" />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}