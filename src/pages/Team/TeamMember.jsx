import Aos from "aos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TeamMember = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);


  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await fetch("/data/members.json");
console.log(response);
        if (!response.ok) {
          throw new Error("Failed to fetch member data.");
        }
        const data = await response.json();
        const foundMember = data.find((m) => m.id === parseInt(id));
        setMember(foundMember);
      } catch (error) {
        
        console.error("Error fetching member data:", error);
      }
    };

    fetchMember();
  }, [id]);

    useEffect(() => {
      Aos.init({
        duration: 1000, 
        easing: 'ease-in-out', 
        
      });
    }, []);
  return (
    <div className="bg-gray-900 mt-24 text-white p-8">
    
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">
          {/* Left Side - Text Content */}
          <div data-aos="fade-left" className="flex-1">
            <h2 className="text-xl uppercase font-semibold">{member?.name}</h2>
            <p className="text-lg font-light mt-2">{member?.position}</p>
            <p className="mt-6  mb-4  text-gray-300  leading-relaxed font-light">{member?.description}</p>
          </div>

          {/* Right Side - Image */}
          <div data-aos="fade-right" className="w-[300px] md:w-[300px] flex-shrink-0">
            <img
              src={member?.photo}
              alt={member?.name}
              className="w-full h-auto object-cover shadow-lg"
            />
          <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="px-4 py-2 cursor-pointer rounded-md bg-orange-400 hover:bg-orange-600 mt-12"
          >
            Linkedin
          </button>
        </a>
          </div>
        </div>
      
    </div>
  );
};

export default TeamMember;
