import CardService from "../Card/CardService";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from "../Card/ServiceCard";


export default function ServiceCarousels({services, index = 0}) {
    const settings = {
        className: "center",
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 3,
        dots: true,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        nextArrow: <NextArrow index={index} />,
        prevArrow: <PrevArrow index={index} />,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              rows: 5,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              rows: 4,
              slidesToScroll: 2,
              infinite: true,
            },
          },
    
          {
            breakpoint: 765,
            settings: {
              slidesToShow: 2,
              rows: 4,
              slidesToScroll: 2,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              rows:2,
              slidesToScroll: 2,
              infinite: true,
            },
          },
        ],
      };
      return (
        <Slider {...settings} className="w-full h-full ">
          {services.map((service, index) => (
            // <CardService key={index} title={service.title} desc={service.desc} />
            <ServiceCard key={index} title={service.title} desc={service.desc} img={service.img} />
          ))}
        </Slider>
      );
    }
    
    export function NextArrow(props) {
      const { className, style, onClick, index } = props;
      return (
        <div
          className={`flex justify-center absolute top-1/2 translate-y-[60%] z-50 ${
            index % 2 === 0 ? "lg:-left-20 -left-10 " : "lg:-right-20 -right-10"
          } `}
        >
          <button
            className="bg-purple-500 bg-opacity-60 hover:bg-purple-500 text-white font-bold md:py-2 md:px-4 rounded-full focus:outline-none focus:shadow-outline"
            onClick={onClick}
            style={{ ...style }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      );
    }
    
    export function PrevArrow(props) {
      const { className, style, onClick, index } = props;
      return (
        <div
          className={`flex justify-center absolute top-1/2 -translate-y-[60%] z-50 ${
            index % 2 === 0 ? "lg:-left-20 -left-10 " : "lg:-right-20 -right-10"
          } `}
        >
          <button
            className="bg-purple-500 bg-opacity-60 hover:bg-purple-500 text-white font-bold md:py-2 md:px-4 rounded-full focus:outline-none focus:shadow-outline"
            onClick={onClick}
            style={{ ...style }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
      );
    }