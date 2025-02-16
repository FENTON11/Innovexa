import React from "react";

function Quote() {
  return (
    <section className="bg-background text-text min-h-screen flex flex-col items-center px-6 py-12">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">Get a Free Quote</h1>
        <p className="text-lg text-secondary mb-8">
          Tell us about your project, and we’ll get back to you with a customized quote.
        </p>
      </div>

      {/* Quote Form */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-highlight mb-4">Request a Quote</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-primary rounded-md bg-background text-text focus:outline-none focus:ring-2 focus:ring-highlight"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-primary rounded-md bg-background text-text focus:outline-none focus:ring-2 focus:ring-highlight"
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="p-3 border border-primary rounded-md bg-background text-text focus:outline-none focus:ring-2 focus:ring-highlight"
          />
          <select className="p-3 border border-primary rounded-md bg-background text-text focus:outline-none focus:ring-2 focus:ring-highlight">
            <option value="">Select a Service</option>
            <option value="mobile-app-development">Mobile App Development</option>
            <option value="website-development">Website Development</option>
          </select>
          <textarea
            rows="5"
            placeholder="Project Description"
            className="p-3 border border-primary rounded-md bg-background text-text focus:outline-none focus:ring-2 focus:ring-highlight"
          ></textarea>
          <button
            type="submit"
            className="bg-highlight text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-primary"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}

export default Quote;
