import React from "react";
import { FaMobileAlt, FaLaptopCode } from "react-icons/fa";

function Services() {
  return (
    <section className="bg-background min-h-screen text-text py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">Our Services</h2>
        <p className="text-secondary text-lg mb-12">
          We specialize in cutting-edge digital solutions tailored to your needs.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mobile App Development */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg transition transform hover:scale-105">
            <FaMobileAlt className="text-5xl text-highlight mb-4" />
            <h3 className="text-2xl font-semibold text-white">Mobile App Development</h3>
            <p className="text-gray-300 mt-3">
              We build intuitive, high-performance mobile applications for iOS and Android.
            </p>
          </div>

          {/* Website Development */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg transition transform hover:scale-105">
            <FaLaptopCode className="text-5xl text-highlight mb-4" />
            <h3 className="text-2xl font-semibold text-white">Website Development</h3>
            <p className="text-gray-300 mt-3">
              We create sleek, responsive, and user-friendly websites tailored to your business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
