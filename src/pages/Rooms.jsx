const Rooms = () => {
  const roomTypes = [
    {
      name: 'Standard Room',
      description: 'Comfortable room with essential amenities including Wi-Fi, TV, and private bathroom. Perfect for solo travelers or couples.',
      price: 2000,
      size: '25 sqm',
      beds: '1 Double Bed',
      capacity: '2 Guests',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800',
      amenities: ['Wi-Fi', 'TV', 'AC', 'Private Bathroom', 'Room Service']
    },
    {
      name: 'Deluxe Room',
      description: 'Spacious room with premium features including a work desk, minibar, and enhanced amenities. Ideal for business travelers.',
      price: 3500,
      size: '35 sqm',
      beds: '1 King Bed',
      capacity: '2 Guests',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800',
      amenities: ['Wi-Fi', 'TV', 'AC', 'Minibar', 'Work Desk', 'Private Bathroom', 'Room Service']
    },
    {
      name: 'Suite',
      description: 'Luxury suite with separate living area, premium furnishings, and exclusive amenities. Perfect for families or extended stays.',
      price: 5500,
      size: '60 sqm',
      beds: '1 King Bed + Sofa Bed',
      capacity: '4 Guests',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800',
      amenities: ['Wi-Fi', 'TV', 'AC', 'Living Area', 'Minibar', 'Work Desk', 'Private Bathroom', 'Room Service', 'Balcony']
    },
    {
      name: 'Presidential Suite',
      description: 'Ultimate luxury with panoramic views, separate bedroom and living areas, premium amenities, and personalized service.',
      price: 10000,
      size: '100 sqm',
      beds: '1 King Bed + Additional Bed',
      capacity: '6 Guests',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800',
      amenities: ['Wi-Fi', 'TV', 'AC', 'Living Area', 'Dining Area', 'Minibar', 'Work Desk', 'Private Bathroom', 'Jacuzzi', 'Balcony', 'Butler Service', 'Room Service']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Room Types</h1>
          <p className="text-xl text-blue-100">
            Choose the perfect accommodation for your stay
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {roomTypes.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{room.name}</h2>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{room.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Size</p>
                      <p className="font-semibold text-gray-800">{room.size}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Beds</p>
                      <p className="font-semibold text-gray-800">{room.beds}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Capacity</p>
                      <p className="font-semibold text-gray-800">{room.capacity}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="font-semibold text-blue-600 text-xl">₹{room.price.toLocaleString()}/night</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Amenities</h3>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;

