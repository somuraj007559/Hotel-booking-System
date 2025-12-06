import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Find Your Perfect Stay
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8">
          Discover luxury hotels and resorts across India
        </p>
        <Link
          to="/hotels"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

