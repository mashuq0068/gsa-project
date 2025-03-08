/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Aos from 'aos';
import { useEffect, useState } from 'react';

const AboutUs = () => {
  const [expandedValue, setExpandedValue] = useState('');

  const toggleValue = (value) => {
    setExpandedValue(expandedValue === value ? '' : value);
  };
  useEffect(() => {
    Aos.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      
    });
  }, []);
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10">
      <section  data-aos="fade-up" className="container mx-auto mt-24 text-center px-6">
        <h1 className="text-5xl font-medium mb-6">About Us</h1>
        <p className="md:max-w-3xl max-w-[300px] mb-4  text-gray-300 font-light leading-relaxed   w-max mx-auto">
        Guineans Succeeding in America (GSA) is a 501c(3) nonprofit organization with the mission to foster and nurture relationships between professionals and students of Guinean descent in the United States to promote academic and professional excellence.
        </p>
        <div className="mt-6 mx-auto max-w-3xl">
          <img 
          data-aos="zoom-in"
            src="/images/gsa-members.jpeg"
            alt="GSA Members"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      <section data-aos="fade-down" className="container mx-auto text-center px-6 mt-16">
        <h2 className="text-5xl font-medium mb-6">Our Vision</h2>
        <p className="max-w-2xl mx-auto  mb-4  text-gray-300 font-light leading-relaxed">
          GSA's vision is to elevate the social and economic status of Guineans and Africans in general across the United States.
        </p>
      </section>

      <section data-aos="fade-left" className="container mx-auto text-center px-6 mt-16">
        <h2 className="text-5xl font-semibold mb-6">Our Values</h2>
        <p className="max-w-3xl  mb-4  text-gray-300 font-light leading-relaxed    mx-auto  ">
          Our values center on fostering continual growth, inclusive collaboration, and celebrating collective achievements to empower our members.
        </p>
        <div className="max-w-xl mx-auto">
          <ValueItem
            title="Growth"
            isExpanded={expandedValue === 'growth'}
            onClick={() => toggleValue('growth')}
            content="We are dedicated to fostering an environment of continual growth and empowering individuals."
          />
          <ValueItem
            title="Collaboration"
            isExpanded={expandedValue === 'collaboration'}
            onClick={() => toggleValue('collaboration')}
            content="We value inclusive collaboration by uniting Guinean professionals and students while welcoming others."
          />
          <ValueItem
            title="Achievement"
            isExpanded={expandedValue === 'achievement'}
            onClick={() => toggleValue('achievement')}
            content="As a community, we find strength in shared achievements, reflecting a culture of excellence."
          />
        </div>
      </section>

      <section data-aos="fade-right" className="container mx-auto text-center px-6 mt-16">
        <h2 className="text-4xl font-semibold  mb-6">Our Beginning</h2>
        <p className="max-w-3xl  mb-4  text-gray-300 font-light leading-relaxedfont-light mx-auto ">
        In 2015, Abdourahamane Diallo — an ambitious Guinean — saw the need to help students on his campus access vital resources and information that will put them on a path to success in school and beyond. From there, the journey of the Guinean Students Association (GSA) began in 2015, with the creation of the very first chapter at Baruch College. That same year, the organization held its first annual conference at Medgar Evers College where professionals and students had the opportunity to network and share ideas on how to succeed in school and in their careers. At its inception, the organization was called Guinean Students Association and eventually expanded to different colleges within the City University of New York in 2017 and 2018. In 2019, the organization held one of its biggest annual networking conferences. At the conference, Guinean Students Association officially became Guineans Succeeding in America (GSA) to be inclusive of both students and professionals. With the new name, GSA created a path for both students and professionals to identify with the organization and its mission to foster and nurture relationships between professionals and students in the United States and provide resources that promote academic and professional excellence.
        </p>
      </section>
    </div>
  );
};

const ValueItem = ({ title, isExpanded, onClick, content }) => (
  <div className="mb-4">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center   border-b-2 text-center  text-2xl   border-white p-4  "
    >
      <p className='  text-center'>{title}</p>
      <span className={`transform font-light text-2xl cursor-pointer transition-transform `}>{isExpanded ? "-" : "+"}</span>
    </button>
    {isExpanded && (
      <div className=" font-light text-left text-gray-300 mt-4 mb-2  ">
        <p>{content}</p>
      </div>
    )}
  </div>
);

export default AboutUs;