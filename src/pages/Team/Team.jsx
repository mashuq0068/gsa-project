import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

const Team = () => {
  const [boardMembers, setBoardMembers] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/members.json');
        if (!response.ok) {
          throw new Error('Failed to fetch team data.');
        }
        const data = await response.json();
        setBoardMembers(data); 
      } catch (error) {
        setError(error.message);
        console.error('Error fetching members data:', error);
      }
    };

    fetchData();
  }, []);

  // Separate members by type
  const executiveBoard = boardMembers.filter(member => member.type === 'executiveBoard');
  const boardOfDirectors = boardMembers.filter(member => member.type === 'boardOfDirectors');

  return (
    <div className="bg-gray-900 max-w-7xl mx-auto my-24 text-white p-8">
      {/* Error Handling */}
     

      {/* Executive Board Section */}
      <section className="mb-16">
        <h2 className="text-3xl lg:text-4xl font-medium mb-12 text-center">Executive Board</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executiveBoard.map(member => (
            <div key={member.id} className=" p-6 rounded-lg shadow-md transition">
              <img src={member.photo} alt={member.name} className="max-w-[242px] w-full h-full object-cover max-h-[325px] mb-4" />
              <h3 className="font-semibold uppercase">{member.name}</h3>
              <p className="text-gray-300 mt-5 font-light">{member.position}</p>
              <Link
                to={`/team/${member.id}`}
                className="inline-block bg-orange-400 text-white py-2 px-6 rounded-full mt-4 text-center"
              >
                Read Bio
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Board of Directors Section */}
      <section>
        <h2 className="text-3xl lg:text-4xl font-medium mb-6 text-center">Board of Directors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardOfDirectors.map(member => (
            <div key={member.id} className=" p-6 rounded-lg shadow-md transition">
              <img src={member.photo} alt={member.name} className="max-w-[242px] w-full h-full object-cover max-h-[325px] mb-4" />
              <h3 className="font-semibold uppercase">{member.name}</h3>
              <p className="text-gray-300 mt-5 font-light">{member.position}</p>
              <Link
                to={`/team/${member.id}`}
                className="inline-block bg-orange-400 text-white py-2 px-6 rounded-full mt-4 text-center"
              >
                Read Bio
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
