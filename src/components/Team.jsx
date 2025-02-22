import godie from "../assets/godie.png";
function Team() {
  const teamMembers = [
    {
      name: "Fenton Mwangi",
      role: "Chief Executive Officer",
      image: "/assets/ceo.jpg",
    },
    {
      name: "Godfrey Maina",
      role: "Chief Operating Officer",
      image: godie,
    },
  ];

  return (
    <section className='bg-background text-text min-h-screen flex flex-col justify-center items-center px-6 py-12'>
      <h1 className='text-4xl font-bold text-primary mb-6'>Meet Our Team</h1>
      <div className='max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className='bg-gray-800 p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105'
          >
            <img
              src={member.image}
              alt={member.name}
              className='w-50 h-50 mx-auto rounded-full mb-4 object-cover object-top'
            />
            <h2 className='text-2xl font-semibold text-highlight'>
              {member.name}
            </h2>
            <p className='text-lg text-primary'>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
