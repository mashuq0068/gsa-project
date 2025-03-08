import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useEffect, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Features = () => {
  const images = [
    { id: 1, src: "/images/features/feature1.jpg", description: "" },
    { id: 2, src: "/images/features/feature2.jpg", description: "" },
    {
      id: 3,
      src: "/images/features/feature3.jpeg",
      description:
        "Reconnect & Thrive: Nurturing Professional Relationships On November 11, 2023, in Midtown Manhattan, Guineans Succeeding in America held their first in-person event post-Covid-19. Isatou moderated a one-on-one discussion with Boubacar Diallo, VP banker and data scientist at Citi, who shared career insights. Attendees networked and exchanged ideas across various fields.",
    },
    {
      id: 4,
      src: "/images/features/feature4.jpeg",
      description:
        "GSA Fourth Annual Networking Conference Reflecting on the remarkable moments at GSA's fourth annual conference! Held at the City College of New York, our Employment and Entrepreneurship-themed event brought together students, job seekers, professionals and entrepreneurs for a day of inspiration and networking. At GSA, we persist in empowering the Guinean-American community through education and professional development.",
    },
    { id: 5, src: "/images/features/feature5.jpg", description: "" },
    { id: 6, src: "/images/features/feature6.jpeg", description: "" },
    { id: 7, src: "/images/features/feature7.jpeg", description: "" },
    { id: 8, src: "/images/features/feature8.jpg", description: "" },
    { id: 9, src: "/images/features/feature9.jpg", description: "" },
    { id: 10, src: "/images/features/feature10.jpg", description: "" },
    { id: 11, src: "/images/features/feature11.jpg", description: "" },
    { id: 12, src: "/images/features/feature12.jpg", description: "" },
    { id: 13, src: "/images/features/feature13.jpg", description: "" },
    { id: 14, src: "/images/features/feature14.jpg", description: "" },
    { id: 15, src: "/images/features/feature15.jpg", description: "" },
    { id: 16, src: "/images/features/feature16.jpg", description: "" },
    { id: 17, src: "/images/features/feature17.jpg", description: "" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); 

  return (
    <div className="bg-gray-900 lg:px-0 px-5 py-20">
      <div className="max-w-5xl mx-auto relative">
        {/* Main Swiper Slider */}
        <Swiper
          modules={[Navigation, Thumbs, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          // controller={{ control: thumbsSwiper }}
          thumbs={{ swiper: thumbsSwiper }}
          onSwiper={setMainSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full sm:w-[400px] h-[300px]"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  src={image.src}
                  alt={`Slide ${image.id}`}
                />
              </div>
              <p className="text-center max-w-[600px] text-white mt-8">
                {image.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="text-center mx-auto max-w-[600px] text-white mt-8">
  {images[activeIndex]?.description}
</p>

        {/* Navigation Arrows */}
        <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-white sm:text-xl md:text-2xl">
          <MdArrowBackIosNew className="text-white" size={20} />
        </div>
        <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-white sm:text-xl md:text-2xl">
          <MdArrowForwardIos className="text-white" size={20} />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="max-w-3xl mx-auto">
        <Swiper
          modules={[Thumbs]}
          watchSlidesProgress
          slidesPerView={7}
          spaceBetween={2}
          centeredSlides={true}
          slideToClickedSlide={true}
          loop={true}
          onSwiper={setThumbsSwiper}
          
          className="mt-4"
        >
          {images.map((image , index) => (
            <SwiperSlide key={image.id} className="cursor-pointer">
               <img
               src={image.src}
                className={`w-[60px] h-[45px] sm:w-[80px] sm:h-[60px] object-cover rounded-md transition ${
                  activeIndex === index
                    ? "border-2 border-white brightness-100"
                    : "border-2 border-transparent brightness-50"
                }`}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Features;
