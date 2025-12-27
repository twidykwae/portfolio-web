import React, { useState }from "react";

export default function Experience(){

    const [selected, setSelected] = useState(0)

    const experiences = [
        {
            company: "Taylor University IT Helpdesk",
            position: "Field First Technician",
            location: "Upland, Indiana",
            duration: "May 2025 - Present (Campus Employment)",
            description: "Provide technical support for 100+ users, manage 50+ weekly tickets, and configure campus workstations using tools like Office 365, Ticketing System(Team Dynamix), Active Directory, and remote support utilities.",
            isActive: true
        },
        {
            company: "Taylor University",
            position: "Peer Tutor",
            location: "Upland, Indiana",
            duration: "February 2025 - Present (Campus Employment)",
            description: "Tutored students in calculus, helping 85% improve their grades by at least one letter and strengthen understanding of complex concepts",
            isActive: false
        },
        {
            company: "NexGen Educational Hub",
            position: "STEM Tutor",
            location: "Accra, Ghana",
            duration: "April 2024 - August 2024",
            description: "Taught 50+ students (ages 6–15) robotics, programming, and design, mentoring them through challenges that built problem-solving, creativity, and confidence in STEM.",
            isActive: false
        }
    ]

    return (
        <section id="experience" className=" bg-black text-white">
  <div className="max-w-7xl mx-auto px-8 py-16">
    <h2 className="text-3xl font-bold mb-12 relative inline-block">
        Experience
        <span className="absolute left-0 bottom-10 h-1 bg-white w-0 animate-expand mt-10"></span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
      
      {/* job details with vertical divider */}
      <div className="md:col-span-4 border-r border-gray-900 pr-8">
        <h3 className="text-xl font-semibold">
          {experiences[selected].position}
        </h3>
        <p className="text-gray-400">
          {experiences[selected].location}
        </p>
        <p className="text-gray-400">{experiences[selected].duration}</p>
        <p className="text-gray-400 mt-4">
          {experiences[selected].description}
        </p>
      </div>

      {/* list of companies */}
      <div className="flex flex-col space-y-4 pl-8">
        {experiences.map((exp, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`block text-right w-full transition-colors duration-200 ${
              selected === index
                ? "text-white font-semibold"
                : "text-gray-400 hover:text-blue-500"
            }`}
          >
            {exp.company}
          </button>
        ))}
      </div>
    </div>
  </div>
</section>

    )
}