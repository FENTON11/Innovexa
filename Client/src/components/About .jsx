function About() {
  return (
    <section className='bg-background text-text min-h-screen flex flex-col items-center px-6 py-12'>
      <div className='max-w-5xl w-full text-center'>
        <h1 className='text-4xl font-bold text-primary mb-6'>About Innovexa</h1>
        <p className='text-lg text-secondary mb-8'>
          Innovexa is a cutting-edge software development company dedicated to
          building innovative and scalable digital solutions. Our expertise lies
          in **web development, mobile app development, and UI/UX design**.
        </p>
      </div>

      {/* Company Vision & Mission */}
      <div className='max-w-6xl w-full grid md:grid-cols-2 gap-8'>
        <div className='bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105'>
          <h2 className='text-2xl font-semibold text-highlight'>Our Vision</h2>
          <p className='text-lg text-primary mt-2'>
            To be the leading tech solutions provider, transforming businesses
            through innovation and technology.
          </p>
        </div>

        <div className='bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105'>
          <h2 className='text-2xl font-semibold text-highlight'>Our Mission</h2>
          <p className='text-lg text-primary mt-2'>
            We aim to empower businesses and startups by delivering high-quality
            digital products that drive growth and success.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className='max-w-6xl w-full mt-12'>
        <h2 className='text-3xl font-bold text-primary text-center mb-6'>
          Our Core Values
        </h2>
        <div className='grid md:grid-cols-3 gap-6'>
          <div className='bg-gray-800 p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105'>
            <h3 className='text-xl font-semibold text-highlight'>Innovation</h3>
            <p className='text-primary mt-2'>
              We push boundaries to create cutting-edge solutions.
            </p>
          </div>

          <div className='bg-gray-800 p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105'>
            <h3 className='text-xl font-semibold text-highlight'>Excellence</h3>
            <p className='text-primary mt-2'>
              We deliver top-notch products with high performance and
              reliability.
            </p>
          </div>

          <div className='bg-gray-800 p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105'>
            <h3 className='text-xl font-semibold text-highlight'>
              Collaboration
            </h3>
            <p className='text-primary mt-2'>
              We believe in teamwork and partnerships for success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
