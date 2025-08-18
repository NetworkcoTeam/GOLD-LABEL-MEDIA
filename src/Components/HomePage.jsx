import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section
          id="home"
          className="flex-grow flex items-center justify-center px-4 md:px-16 py-20"
        >
          <div className="md:w-1/2 bg-black bg-opacity-50 backdrop-blur-sm p-6 rounded-xl space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-200 italic">
              GOLD LABEL MEDIA
            </h1>
            <p className="text-lg md:text-xl">
              Welcome to Gold Label Media — where ideas meet impact.
              We’re not just your marketing agency, we’re your growth partners.
              At the heart of everything we do is a commitment to creativity,
              strategy, impact, and results.
              We don’t do boring. Whether you are building a brand, launching a campaign, or in need of logo designs,
              we bring fresh thinking, digital expertise, and effective strategies.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
