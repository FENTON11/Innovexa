import { services } from "../data";
import Card from "../components/Card";
function Services() {
  return (
    <section className="bg-background min-h-screen text-text py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">Our Services</h2>
        <p className="text-secondary text-lg mb-12">
          We specialize in cutting-edge digital solutions tailored to your needs.
        </p>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2'>
          {services.map((service, index) => (
            <div
              key={service.id}
              className=' flex gap-2 even:last:hidden group'
            >
              <div className=' p-4'>
                <Card index={index}>
                  <div className='flex items-center gap-2'>
                    <service.icon className='text-3xl text-highlight' />
                    <h3 className='text-2xl font-semibold text-white'>
                      {service.title}
                    </h3>
                  </div>
                  <p className='text-gray-300 mt-3'>{service.description}</p>
                </Card>
              </div>
              <div
                className={`relative hidden md:flex justify-center  items-start z-50 ${
                  index % 2 !== 0 && "md:hidden"
                }`}
              >
                <div className=' cursor-pointer p-3 rounded-full  bg-primary group-hover:bg-highlight'>
                  {" "}
                </div>
                <div className=' absolute h-full z-50 bg-primary w-[.2rem] cursor-pointer group-hover:bg-highlight'></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
