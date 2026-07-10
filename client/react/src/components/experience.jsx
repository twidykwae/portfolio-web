import React, { useState } from "react";

export default function Experience() {
    const [selected, setSelected] = useState(0);

    const experiences = [
        {
            company: "Cadence",
            position: "Founder",
            location: "Remote",
            duration: "June 2026 to Present",
            description: [
                "Built and launched Cadence with the Anthropic API, an academic planning platform that turns a student's uploaded syllabi into a personalized semester plan with deadlines, workload heatmaps, and coaching",
                "Grew to 200+ users across top universities and $1,000 in revenue as a sophomore, owning product, engineering, and go-to-market end to end"
            ],
            isActive: true
        },
        {
            company: "Aprize PBC",
            position: "Software Developer Intern",
            location: "Upland, Indiana",
            duration: "June 2026 to August 2026",
            description: [
                "Built and analyzed Donor Insight Reports sold to clients, translating raw entity and transaction data into actionable fundraising intelligence",
                "Designed and implemented a medallion database architecture in Microsoft Fabric, building ETL pipelines across public IRS data and private company data sources",
                "Migrated the production database from Supabase to Delta Lake on OneLake, transferring and validating 30M+ rows and expanding capacity to support 10M+ rows for entity and transaction resolution at scale",
                "Built and debugged relationship and entity-resolution pipelines, identifying and resolving data quality issues"
            ],
            isActive: false
        },
        {
            company: "Taylor University Center for Innovation and Excellence",
            position: "Technology Specialist",
            location: "Upland, Indiana",
            duration: "May 2026 to Present",
            description: [
                "Run CRM operations in HubSpot, managing contact data and event communication for campus and entrepreneurship programs",
                "Build and maintain event registration forms for Center for Innovation and Excellence (CIE) programs",
                "Collaborate with the CIE team to ideate and execute new entrepreneurship events"
            ],
            isActive: true
        },
        {
            company: "Taylor University IT",
            position: "Field First Technician",
            location: "Upland, Indiana",
            duration: "March 2025 to June 2026",
            description: [
                "Delivered technical support to 2000+ students, faculty, and staff, troubleshooting hardware, software, and network issues with a 95% resolution rate",
                "Managed incident tickets in TeamDynamix and automated workstation deployment and configuration with Bash scripts, cutting setup time by 40%",
                "Diagnosed network connectivity issues, ran system diagnostics, and maintained endpoint security compliance"
            ],
            isActive: false
        },
        {
            company: "Taylor University",
            position: "Peer Tutor",
            location: "Upland, Indiana",
            duration: "February 2025 to Present (Campus Employment)",
            description: [
                "Provide one-on-one tutoring in core courses like Statistics, Introduction to Computational Solving with Python, Music Theory and Calculus, resulting in students improving their grades and enhancing understanding in these courses"
            ],
            isActive: false
        },
        {
            company: "NexGen Educational Hub",
            position: "STEM Tutor",
            location: "Accra, Ghana",
            duration: "April 2024 to August 2024",
            description: [
                "Instructed 100+ students between the ages 6 to 15 on how to build and program robots with Lego EV3 and Scratch",
                "Created weekly interactive robotics challenges to boost children's problem-solving skills, and to enhance creativity, confidence in STEM and to inspire a passion for technology in general"
            ],
            isActive: false
        }
    ];

    return (
        <section id="experience" className="bg-ink text-paper">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">
                    Experience
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
                    <div className="md:col-span-4 md:border-r md:border-divider md:pr-8">
                        <h3 className="text-lg sm:text-xl font-semibold text-paper">
                            {experiences[selected].position}
                        </h3>
                        <p className="text-paper-soft text-sm sm:text-base font-light">
                            {experiences[selected].location}
                        </p>
                        <p className="text-paper-soft text-sm sm:text-base font-light">
                            {experiences[selected].duration}
                        </p>
                        <ul className="text-paper-dim mt-4 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-2 font-light marker:text-paper-faint">
                            {experiences[selected].description.map((item, index) => (
                                <li key={index} className="text-pretty">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 md:pl-8 overflow-x-auto pb-2 md:pb-0">
                        {experiences.map((exp, index) => (
                            <button
                                key={index}
                                onClick={() => setSelected(index)}
                                aria-pressed={selected === index}
                                className={`block text-left md:text-right w-full whitespace-nowrap md:whitespace-normal transition-colors duration-200 px-2 py-1 md:px-0 md:py-0 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm ${
                                    selected === index
                                        ? "text-paper font-semibold"
                                        : "text-paper-soft hover:text-accent font-light"
                                }`}
                            >
                                {exp.company}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
