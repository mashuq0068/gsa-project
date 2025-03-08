import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Achievements = () => {
  const achievements = [
    {
      number: "75+",
      description:
        "Tailored consultations to empower newcomers to pursue US education, achieving their academic aspirations.",
    },
    {
      number: "80+",
      description:
        "Facilitated the enrollment of newcomers in English as a Second Language (ESL) programs.",
    },
    {
      number: "700+",
      description:
        "Gathered 700+ attendees at our 4th Networking Conference, fostering invaluable connections.",
    },
  ];
  useEffect(() => {
    Aos.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      
    });
  }, []);

  return (
    <div className="bg-gray-900 relative min-h-screen flex flex-col items-center justify-center px-5 text-center">
      <div className="absolute -top-10 lg:top-10 left-0 right-0 h-[5px] bg-orange-400"></div>{" "}
      {/* Top Border */}
      <h2 className="text-5xl font-semibold  text-white mb-12">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl">
        {achievements.map((achievement, index) => (
          <div
          data-aos="fade-left"
            key={index}
            className="rounded-2xl  p-8 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="md:text-6xl text-3xl font-bold text-white  mb-4">
              {achievement.number}
            </h3>
            <p className=" text-lg text-white font-light">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
      <Link
      data-aos="fade-down"
        to="/programs"
        className="bg-orange-400 text-white py-3 px-8 rounded-full  transition duration-300 ease-in-out transform hover:bg-orange-600 hover:scale-105 hover:shadow-xl"
      >
        Our Programs
      </Link>
    </div>
  );
};

export default Achievements;
