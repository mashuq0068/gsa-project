import { useState, useEffect } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"; // Import new icons

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
  const [currentId, setCurrentId] = useState(1);
  const [visibleThumbnails, setVisibleThumbnails] = useState(
    images.slice(0, 7)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setCurrentId((prevId) => (prevId === images.length - 1 ? 0 : prevId + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const startIdx = currentIndex;
    const endIdx = startIdx + 7;
    const updatedThumbnails = images.slice(startIdx, endIdx);
    setVisibleThumbnails(
      updatedThumbnails.length < 7
        ? [
            ...updatedThumbnails,
            ...images.slice(0, 7 - updatedThumbnails.length),
          ]
        : updatedThumbnails
    );
  }, [currentIndex, images]);

  const handleThumbnailClick = (index, id) => {
    setCurrentIndex(index);
    setCurrentId(id);
  };

  return (
    <div className="bg-gray-900 lg:px-0  py-20">
      <div className="max-w-5xl mx-auto relative">
        {/* Main Image with Description */}
        <div className="relative w-full flex flex-col justify-center items-center">
          <div className="relative w-full sm:w-[400px] h-[300px] overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-1500 ease-in-out transform"
              src={images[currentIndex].src}
              alt={`Slide ${currentIndex + 1}`}
            />
          </div>
          <p className="text-center max-w-[600px] text-white mt-8">
            {images[currentIndex].description}
          </p>

          {/* Left Icon */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-white sm:text-xl md:text-2xl">
            <MdArrowBackIosNew
              size={20}
              onClick={() =>
                setCurrentIndex(
                  currentIndex === 0 ? images.length - 1 : currentIndex - 1,
                  images[currentIndex].id
                )
              }
            />
          </div>

          {/* Right Icon */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-white sm:text-xl md:text-2xl">
            <MdArrowForwardIos
              size={20}
              onClick={() =>
                setCurrentIndex(
                  currentIndex === images.length - 1 ? 0 : currentIndex + 1
                )
              }
            />
          </div>
        </div>

        {/* Thumbnails */}
        <div className="overflow-x-hidden lg:px-0 px-5 lg:w-max mx-auto mt-8">
          <div className="flex space-x-4 md:overflow-x-hidden overflow-y-hidden sm:overflow-x-scroll md:space-x-6">
            {visibleThumbnails.map((image, index) => (
              <div
                key={index}
                className={`w-[60px] h-[45px] sm:w-[80px] sm:h-[60px] object-cover cursor-pointer transition duration-300 transform hover:scale-110 ${
                  index === currentIndex
                    ? "border-2 border-white"
                    : "bg-black/40"
                }  
    ${index !== currentIndex ? "opacity-70" : "opacity-100 border-3 border-white"}`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  className="w-full h-full object-cover"
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
