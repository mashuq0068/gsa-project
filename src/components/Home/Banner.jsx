const Banner = () => {
    return (
      <div
        className="relative flex justify-center items-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/banner.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 space-y-6">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-shadow-lg mb-6">
            Guineans Succeeding in America
          </h1>
  
          {/* Subheading */}
          <p className="text-lg sm:text-xl font-medium max-w-2xl mb-8">
            Empowering the Guinean community through education and professional development.
          </p>
  
          {/* Buttons */}
          <div className="flex flex-col items-center space-y-6 sm:space-y-8">
            <a
              href="/about-us"
              className="bg-orange-400 text-white py-3 px-8 rounded-full text-lg sm:text-xl transition duration-300 ease-in-out transform hover:bg-orange-600 hover:scale-105 hover:shadow-xl"
            >
              Learn More
            </a>
            <a
              href="/donate"
              className="bg-orange-400 text-white py-3 px-8 rounded-full text-lg sm:text-xl transition duration-300 ease-in-out transform hover:bg-orange-600 hover:scale-105 hover:shadow-xl"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  