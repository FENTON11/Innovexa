import React from "react";

function Contact() {
  return (
    <section className="bg-background text-text min-h-screen flex flex-col items-center px-6 py-12">
      <div className="max-w-5xl w-full text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">Get in Touch</h1>
        <p className="text-lg text-secondary mb-8">
          Have a project in mind? Let's build something amazing together!
        </p>
      </div>

      {/* Contact Form & Info Section */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-highlight mb-4">Send us a Message</h2>
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
            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-3 border border-primary rounded-md bg-background text-text focus:outline-none focus:ring-2 focus:ring-highlight"
            ></textarea>
            <button
              type="submit"
              className="bg-highlight text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-primary"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold text-highlight">Contact Information</h2>
          <p className="text-primary">
            📍 <strong>Location:</strong> Nairobi, Kenya
          </p>
          <p className="text-primary">
            📧 <strong>Email:</strong> contact@innovexa.com
          </p>
          <p className="text-primary">
            📞 <strong>Phone:</strong> +254 706 502 923
          </p>
          <p className="text-primary">
            🕒 <strong>Working Hours:</strong> Mon - Fri, 9 AM - 5 PM
          </p>

          {/* Google Map */}
          <div className="mt-4">
            <iframe
              title="Innovexa Location"
              className="w-full h-48 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.022438041746!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d4a474a9fd%3A0x5b46a65a377f2362!2sNairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
