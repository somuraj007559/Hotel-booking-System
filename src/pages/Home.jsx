import HeroSection from '../components/HeroSection';
import HotelCard from '../components/HotelCard';
import { hotelsData } from '../data/hotelsData';
import { Link } from 'react-router-dom';

const Home = () => {
  // Get featured hotels (first 6)
  const featuredHotels = hotelsData.slice(0, 6);

  const roomTypes = [
    {
      name: 'Standard Room',
      description: 'Comfortable room with essential amenities',
      price: '₹2,000',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800'
    },
    {
      name: 'Deluxe Room',
      description: 'Spacious room with premium features',
      price: '₹3,500',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800'
    },
    {
      name: 'Suite',
      description: 'Luxury suite with separate living area',
      price: '₹5,500',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800'
    },
    {
      name: 'Presidential Suite',
      description: 'Ultimate luxury with panoramic views',
      price: '₹10,000',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Hotels Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Hotels
            </h2>
            <p className="text-gray-600 text-lg">
              Discover our handpicked selection of premium accommodations
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/hotels"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              View All Hotels
            </Link>
          </div>
        </div>
      </section>

      {/* Room Types Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Room Types
            </h2>
            <p className="text-gray-600 text-lg">
              Choose from a variety of comfortable accommodations
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roomTypes.map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-3">{room.description}</p>
                  <p className="text-2xl font-bold text-blue-600">{room.price}/night</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/rooms"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Explore All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                About HotelBook
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                Welcome to HotelBook, your trusted partner in finding the perfect accommodation
                for your travels across India. We offer a curated selection of hotels, resorts,
                and boutique properties that cater to every taste and budget.
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                Whether you're planning a romantic getaway, a family vacation, or a business trip,
                we have the perfect stay waiting for you. Our platform makes it easy to compare
                prices, read reviews, and book your ideal hotel with just a few clicks.
              </p>
              <p className="text-gray-600 text-lg">
                With over 50 premium properties across India, we ensure that every booking
                experience is seamless and memorable. Start your journey with us today!
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
                alt="Hotel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

