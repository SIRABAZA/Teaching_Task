import React from "react";
import appStore from "../assets/app-store.svg";
import playStore from "../assets/play-store.svg";

export default function Hero() {
  return (
    <section className="py-12 px-4 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Hero text content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Start Your Child's Learning Journey
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Discover the perfect way to nurture your child's skills and
            creativity
          </p>

          <div className="flex flex-col items-center md:items-start gap-6">
            {/* Book session button */}
            <a
              href="#contact"
              className="px-12 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              Book Free Session
            </a>

            <p className="text-lg font-semibold text-gray-700 mt-4">
              Download our mobile app
            </p>

            {/* App download buttons - using placeholder images */}
            <div className="flex gap-4">
              <a
                href="#app-store"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90 transition-opacity"
              >
                <img
                  src={appStore}
                  alt="Download on the App Store"
                  width={150}
                />
              </a>
              <a
                href="#play-store"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90 transition-opacity"
              >
                <img src={playStore} alt="Get it on Google Play" width={150} />
              </a>
            </div>
          </div>
        </div>

        {/* Hero image - placeholder from placeholder.com */}
        <div className="order-1 md:order-2">
          <img
            src="https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg"
            alt="Children enjoying educational activities"
            className="w-full max-w-md mx-auto md:max-w-none rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
