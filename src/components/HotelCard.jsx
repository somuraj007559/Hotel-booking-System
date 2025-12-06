import { Link } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
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

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in">
      <div className="relative h-48 overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{hotel.name}</h3>
        <p className="text-gray-600 mb-2">📍 {hotel.location}</p>
        <div className="flex items-center mb-3">
          <span className="text-yellow-500 mr-2">{renderStars(hotel.rating)}</span>
          <span className="text-gray-600">{hotel.rating}</span>
        </div>
        <p className="text-2xl font-bold text-blue-600 mb-4">
          ₹{hotel.price.toLocaleString()}/night
        </p>
        <Link
          to={`/hotel/${hotel.id}`}
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;

