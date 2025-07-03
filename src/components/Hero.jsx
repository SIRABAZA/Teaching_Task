import React from "react";
import appStore from "../assets/app-store.svg";
import playStore from "../assets/play-store.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="py-12 px-4 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Hero text content */}
        <motion.div
          className="order-2 md:order-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          >
            Start Your Child's Learning Journey
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          >
            Discover the perfect way to nurture your child's skills and
            creativity
          </motion.p>

          <div className="flex flex-col items-center md:items-start gap-6">
            {/* Book session button */}
            <motion.a
              href="#contact"
              className="px-12 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors text-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              onClick={() => {
                navigate("/teacher");
              }}
            >
              Book Free Session
            </motion.a>

            <motion.p
              className="text-lg font-semibold text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Download our mobile app
            </motion.p>

            {/* App download buttons - using placeholder images */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            >
              <motion.a
                href="#app-store"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <img
                  src={appStore}
                  alt="Download on the App Store"
                  width={150}
                />
              </motion.a>
              <motion.a
                href="#play-store"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <img src={playStore} alt="Get it on Google Play" width={150} />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero image - placeholder from placeholder.com */}
        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg"
            alt="Children enjoying educational activities"
            className="w-full max-w-md mx-auto md:max-w-none rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
