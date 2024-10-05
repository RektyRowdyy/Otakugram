import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaSearch } from "react-icons/fa";
import { MdRecommend } from "react-icons/md";
import { HiTrendingUp } from "react-icons/hi";

//Navigation data for Header
export const headerNavigation = [
    { name: 'Home', to: '/' },
    {
      name: 'Anime', to: '#', items: [
        { name: 'Anime Search', description: 'Find your Favourite Hen... I mean Anime', icon: FaSearch, to: '/anime' },
        { name: 'Latest Anime', description: 'Take a look at the latest shows this season', icon: HiTrendingUp, to: '#' },
        { name: 'Our Recommendations', description: 'Can never go wrong with them', icon: MdRecommend, to: '#' },
      ]
    },
]

//Function to Create Custom Arrows
export function CustomArrows(props) {

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

//Static Latest Anime data for Hero Banner
export const latestAnimeSlides = [
    { url: "src/assets/img/hero-background-1.jpeg", title: 'One Piece' },
    { url: "src/assets/img/hero-background-2.jpg", title: 'Haikyuu' },
    { url: "src/assets/img/hero-background-3.jpg", title: 'Naruto' },
    { url: "src/assets/img/hero-background-4.png", title: 'Kaguya Sama' },
    { url: "src/assets/img/hero-background-5.jpg", title: 'AOT' },
];

//Static Anime Data for CardSlider
export const animeData = [
    {
        animeName: "Konosuba: God's Blessing on this Wonderful World! Season 3",
        animePoster: "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/KonoSuba_season_3_KV.jpg/220px-KonoSuba_season_3_KV.jpg"
    },
    {
        animeName: "Kaiju No. 8",
        animePoster: "https://m.media-amazon.com/images/M/MV5BMzUxOTBlNzMtYzAyZi00MDNhLWE3OGUtYWQ5MzQyZGE1OGYwXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg"
    },
    {
        animeName: "Demon Slayer: Kimetsu no Yaiba - Hashira Training Arc",
        animePoster: "https://external-preview.redd.it/demon-slayer-kimetsu-no-yaiba-hashira-training-arc-key-v0-kzF5PLizTqBTnOFso1DEJukmy_xpRadY8cb-krYapUI.jpg?auto=webp&s=4f418a53adaec2e1ce92b79db04b36f5fe7fe891"
    },
    {
        animeName: "That Time I Got Reincarnated as a Slime Season 3",
        animePoster: "https://sportshub.cbsistatic.com/i/2023/12/16/9714724a-4b29-4e28-8b4f-c2501ba5e265/that-time-i-got-reincarnated-as-a-slime-season-3-poster.jpg?auto=webp&width=1200&height=1698&crop=0.707:1,smart"
    },
    {
        animeName: "Mushoku Tensei: Jobless Reincarnation Season 2",
        animePoster: "https://sportshub.cbsistatic.com/i/2023/12/20/5aea5b0d-7fad-47e3-9256-57d220a29301/jobless-reincarnation-poster.jpg?auto=webp&width=848&height=1200&crop=0.707:1,smart"
    },
    {
        animeName: "Mission: Yozakura Family",
        animePoster: "https://m.media-amazon.com/images/M/MV5BMzk2MmNlZjAtNmZjNy00M2Y3LTgxYmQtM2VjMGQ5NTIyM2Y0XkEyXkFqcGdeQXVyNjA5MDIyMzU@._V1_.jpg"
    },
    {
        animeName: "Jellyfish Can't Swim in the Night",
        animePoster: "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2024/03/jellyfishcantswiminthenight_keyvisual-scaled.jpeg?ssl=1"
    },
    {
        animeName: "Black Butler: Public School Arc",
        animePoster: "https://m.media-amazon.com/images/M/MV5BZTdmMjZhZGUtNmMxNS00OWU1LWExNDItYjZiYjFhMGVjMzYyXkEyXkFqcGdeQXVyMTM1OTg5NzY5._V1_FMjpg_UX1000_.jpg"
    },
    {
        animeName: "My Hero Academia Season 7",
        animePoster: "https://sportshub.cbsistatic.com/i/2023/12/10/6f2347fe-aa4c-4327-8993-6b9ac7ed6592/my-hero-academia-season-7.jpg?auto=webp&width=900&height=1200&crop=0.75:1,smart"
    },
    {
        animeName: "Mashle: Magic and Muscles Season 2",
        animePoster: "https://external-preview.redd.it/mashle-magic-and-muscles-season-2-key-visual-v0-50FPrD9vU9pPnf03NRGUU7cTBh2vV2oQM0pY0iyd4fM.jpg?width=640&crop=smart&auto=webp&s=b7fa1915da67607582ac44aa723f32193beacd8e"
    }
];
