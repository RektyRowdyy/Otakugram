import CardSlider from "./CardSlider/CardSlider";
import LatestAnimeSlider from "./LatestAnimeSlider/LatestAnimeSlider";
import "./Home.css"

export default function Home() {

    return (
        <>

            {/* Latest Anime Slider */}
            <LatestAnimeSlider />

            {/* New On Otakugram */}
            <CardSlider />

        </>
    )
}