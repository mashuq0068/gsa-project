import Aos from "aos";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const SingleProgram = () => {
    const images = [
        { id: 1, src: "/images/features/feature1.jpg", description: "" },
        { id: 2, src: "/images/features/feature2.jpg", description: "" },
       
      ];
       const [currentIndex, setCurrentIndex] = useState(0);

       useEffect(() => {
        Aos.init({
          duration: 1000, 
          easing: 'ease-in-out', 
          
        });
      }, []);
      
       
    return (
       <div className="max-w-7xl lg:p-0 p-8 mx-auto">
         {/* 🔥 New Business Marquee */}
      <Marquee speed={70} gradient={false} className="mt-36 mb-12 text-white py-2 text-xl font-semibold">
        🚀 New Business Updates • Stay Connected • Exciting Opportunities Ahead • Join Us Today!
      </Marquee>

         <div className="grid grid-cols-1 gap-12  md:grid-cols-3 text-white">
            
            {/* GSA Speaker Series */}
            <section data-aos="fade-up"  className="">
              <h2 className="text-orange-400 font-semibold mb-4 ">GSA Speaker Series</h2>
              <p className=" mb-4 text-sm text-gray-300 font-light leading-relaxed">
              The GSA Speaker Series is central to our commitment to fostering knowledge and insight. Through one-on-one or small group discussions, we engage speakers from diverse fields such as Finance, Technology, Medicine, Engineering, and more. This series delves into the intricacies of different professions, offering valuable perspectives on trending topics in professional and self-development. It empowers student members to make informed decisions and provides professionals with a deeper understanding of their chosen fields. Check our social media for upcoming series. Do you know a person who is highly knowledgeable about a specific topic that we should interview for our next GSA Speaker Series? Submit a recommendation
              </p>
              
            </section>
      
            {/* GSA Social Mixers */}
            <section data-aos="fade-up" className="">
              <h2 className="text-orange-400 font-semibold mb-4 ">GSA Social Mixers</h2>
              <p className=" mb-4 text-sm text-gray-300 font-light leading-relaxed">
              GSA Social Mixers serve as dynamic gatherings for professionals to forge connections in an informal setting. These in-person meetups, often hosted at local businesses, offer a casual environment where attendees have the flexibility to join and depart within the time frame of the scheduled event. Designed to be convenient and strengthen bonds among our members, these gatherings are dedicated to building lasting professional relationships and fostering community connections. Check our social media for upcoming meetups. Sign up for our next Social Mixer here.
              </p>
            </section>
      
            {/* Professional Development Resources */}
            <section data-aos="fade-up" className="">
              <h2 className="text-orange-400 font-semibold mb-4 ">Professional Development Resources</h2>
              <p className=" mb-4 text-sm text-gray-300 font-light leading-relaxed">
              Access a wealth of professional development resources in GSA’s Library. From resume templates to insightful videos covering critical topics, GSA aims to provide members with essential tools for success. Coming soon!
              </p>
            </section>
      
            {/* GSA Professional Network */}
            <section data-aos="fade-up">
              <h2 className="text-orange-400 font-semibold mb-4 ">GSA Professional Network</h2>
              <p className="  mb-4 text-sm text-gray-300 font-light leading-relaxed">
              Join our LinkedIn Professional Group to expand your horizons. Stay connected, share resources, and collaborate for collective growth. Together, we aspire to improve daily and champion each other's success with GSA. Every connection and shared resource contribute to the collective advancement of Guinean professionals, propelling us to new heights. Link to join the group coming soon!
              </p>
              <Link
                to="/linkedin-group"
                className="inline-block bg-orange-500 text-white py-2 px-6 rounded-full mt-4  mx-auto"
              >
                Join
              </Link>
            </section>
          </div>
           <div  className="relative w-full flex flex-col justify-center items-center">
                    <div  className="relative w-full sm:w-[500px] max-h-[400px] overflow-hidden">
                      <img
                       className="w-full h-full flex transition-transform duration-700 ease-in-out"
                       style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                       
                        src={images[currentIndex].src}
                        alt={`Slide ${currentIndex + 1}`}
                      />
                    </div>
                  
          
                    {/* Left Icon */}
                    <div className="absolute left-0 lg:left-[25%] top-1/2 transform -translate-y-1/2 cursor-pointer text-white sm:text-xl md:text-2xl">
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
                    <div className="absolute right-0 lg:right-[25%] top-1/2 transform -translate-y-1/2 cursor-pointer text-white sm:text-xl md:text-2xl">
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
       </div>
    );
};

export default SingleProgram;
