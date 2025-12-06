import { hotelsData } from '../data/hotelsData';

const Gallery = () => {
  // Collect all gallery images from hotels
  const allImages = [];
  hotelsData.forEach((hotel) => {
    hotel.gallery.forEach((image) => {
      allImages.push({ image, hotelName: hotel.name });
    });
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-blue-100">
            Explore beautiful images from our hotels
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {allImages.map((item, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.hotelName}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-semibold">{item.hotelName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

