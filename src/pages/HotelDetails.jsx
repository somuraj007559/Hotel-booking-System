import { useParams, useNavigate } from 'react-router-dom';
import { hotelsData } from '../data/hotelsData';

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = hotelsData.find((h) => h.id === parseInt(id));

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Hotel not found</h2>
          <button
            onClick={() => navigate('/hotels')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Back to Hotels
          </button>
        </div>
      </div>
    );
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐');
    }
    if (hasHalfStar) {
      stars.push('⭐');
    }

    return stars.join('');
  };

  const handleBookRoom = () => {
    navigate(`/booking/${hotel.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Large Hotel Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{hotel.name}</h1>
          <p className="text-xl text-gray-200">📍 {hotel.location}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{hotel.description}</p>
            </div>

            {/* Location Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Location</h2>
              <p className="text-gray-600 text-lg mb-4">📍 {hotel.location}</p>
              <p className="text-gray-600">
                This beautiful hotel is located in the heart of {hotel.location}, offering easy
                access to local attractions, restaurants, and transportation hubs.
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotel.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <span className="text-blue-600">✓</span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotel.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-48 rounded-lg overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`${hotel.name} ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500 text-2xl mr-2">
                    {renderStars(hotel.rating)}
                  </span>
                  <span className="text-gray-600 text-lg">{hotel.rating}</span>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-6">
                  ₹{hotel.price.toLocaleString()}
                  <span className="text-lg text-gray-600 font-normal">/night</span>
                </div>
              </div>
              <button
                onClick={handleBookRoom}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-lg"
              >
                Book Room
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;

