# Hotel Booking System

A complete hotel booking system website built with React, Vite, Tailwind CSS, and React Router.

## Features

- 🏨 **50 Hotels** - Browse through 50 carefully curated hotels across India
- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🔍 **Hotel Details** - Detailed information, amenities, and gallery for each hotel
- 📅 **Booking System** - Complete booking form with date selection and price calculation
- 🖼️ **Gallery** - Visual gallery showcasing hotel images
- 📞 **Contact Page** - Get in touch with the team

## Pages

1. **Home** - Hero section, featured hotels, room types preview, and about section
2. **Hotels** - Grid layout displaying all 50 hotels with pagination
3. **Hotel Details** - Individual hotel page with full details, amenities, and gallery
4. **Booking** - Booking form with validation and price calculation
5. **Rooms** - Detailed information about different room types
6. **Gallery** - Image gallery from all hotels
7. **Contact** - Contact form and information

## Components

- **Navbar** - Responsive navigation with mobile menu
- **HeroSection** - Eye-catching hero with call-to-action
- **Footer** - Contact info, links, and social media
- **HotelCard** - Reusable hotel card component

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Footer.jsx
│   │   └── HotelCard.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Hotels.jsx
│   │   ├── HotelDetails.jsx
│   │   ├── Booking.jsx
│   │   ├── Rooms.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── data/            # Data files
│   │   └── hotelsData.js
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

## Features in Detail

### Hotel Data
- 50 hotels with complete information
- Each hotel includes: name, location, image, rating, price, description, amenities, and gallery
- Images sourced from Unsplash

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Mobile menu for navigation
- Grid layouts adapt to screen size

### Animations
- Fade-in animations
- Hover effects on cards
- Smooth transitions
- Transform effects

## License

This project is open source and available for use.

