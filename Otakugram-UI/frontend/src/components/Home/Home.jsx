import { FaChevronRight , FaChevronLeft  } from "react-icons/fa";
import "./Home.css"
import { useState } from "react";


export default function Home() {

    const slides = [
        {url: "src/assets/img/hero-background-1.jpeg", title: 'One Piece'},
        {url: "src/assets/img/hero-background-2.jpg", title: 'Haikyuu'},
        {url: "src/assets/img/hero-background-3.jpg", title: 'Naruto'},
        {url: "src/assets/img/hero-background-4.png", title: 'Kaguya Sama'},
        {url: "src/assets/img/hero-background-5.jpg", title: 'AOT'},
    ]

    let [current,setCurrent] = useState(0);

    let previousSlide = () => {
        if(current === 0) setCurrent(slides.length-1);
        else setCurrent(current-1);
    }

    let nextSlide = () => {
        if(current === slides.length-1) setCurrent(0);
        else setCurrent(current+1);
    }


    return(
        <>
        <div className="hero">
            <div className="hero-image-div transition ease-out duration-400" 
            style={{
                transform: `translateX(-${current*20}%)`
            }}>
                {slides.map((slide, index) => (
                    <img src={slide.url} alt="hero-background" className="hero-image" />
                ))}
            </div>
            <div className="hero-slider h-full w-full justify-between items-center flex px-10 text-3xl">
                <button onClick={previousSlide}> <FaChevronLeft /> </button>
                <button onClick={nextSlide}> <FaChevronRight /> </button>
            </div>
            
        </div>
        </>
    )
}