import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/* eslint-disable react/no-unescaped-entities */

const Donate = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      
    });
  }, []);

  return (
    <div
      className="flex min-h-screen items-center justify-center py-12 px-6"
      data-aos="fade-up"
    >
      <div
        className="max-w-xl text-center p-8 rounded-lg bg-gray-900"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-semibold text-white mb-4" data-aos="fade-down">
          Make a Difference
        </h2>
        <p className="text-lg font-light text-gray-300 mb-6" data-aos="fade-up">
          Support Guineans Succeeding in America (GSA) as we empower our community through education and professional excellence.
          Your donation fuels our mission, providing vital resources and networking opportunities for students and professionals.
        </p>
        <p className="text-lg font-light text-gray-300 mb-6" data-aos="fade-up">
          Together, let's build a brighter future. Donate now and be a part of our journey to success!
        </p>
        <button
          className="px-6 py-3 bg-orange-400 text-white font-semibold rounded-full hover:bg-orange-500 transition duration-300 ease-in-out"
          data-aos="pulse"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Donate;
