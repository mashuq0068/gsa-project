import Aos from 'aos';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/programs.json');
        if (!response.ok) {
          throw new Error('Failed to fetch team data.');
        }
        const data = await response.json();
        setPrograms(data); 
      } catch (error) {
        setError(error.message);
        console.error('Error fetching members data:', error);
      }
    };

    fetchData();
  }, []);

    useEffect(() => {
      Aos.init({
        duration: 1000, 
        easing: 'ease-in-out', 
        
      });
    }, []);

  return (
    <div className="bg-gray-900  mx-auto mt-24 text-white p-8">
      
      <section className="mb-16">
        <h2 className="text-3xl lg:text-4xl font-medium mb-12 text-center">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs.map(program => (
            <div data-aos="fade-up" key={program?.id} className=" p-6 rounded-lg shadow-md transition">
              <img src={program?.image} alt={program?.title} className="w-full h-[300px] object-cover  mb-4" />
              <h3 className=" text-orange-400  text-center">{program?.title}</h3>
              <p className=" mt-5 text-sm leading-relaxed text-gray-300 text-center font-light">{program?.shortDescription}</p>
              <Link
                to={`/programs/${program?.id}`}
                className="mt-5 flex justify-center w-max mx-auto bg-orange-400 text-white py-2 px-6 rounded-full text-center"
              >
               Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Programs;
