import React from "react";

const experiences = [
    {
        position: "Founder",
        company: "Cadence",
        location: "Remote",
        duration: "June 2026 to Present",
        description: [
            "Built and launched Cadence with the Anthropic API, an academic planning platform that turns a student's uploaded syllabi into a personalized semester plan with deadlines, workload heatmaps, and coaching",
            "Grew to 200+ users across top universities and $1,000 in revenue as a sophomore, owning product, engineering, and go-to-market end to end"
        ]
    },
    {
        position: "Software Developer Intern",
        company: "Aprize PBC",
        location: "Upland, Indiana",
        duration: "June 2026 to August 2026",
        description: [
            "Built and analyzed Donor Insight Reports sold to clients, translating raw entity and transaction data into actionable fundraising intelligence",
            "Designed and implemented a medallion database architecture in Microsoft Fabric, building ETL pipelines across public IRS data and private company data sources",
            "Migrated the production database from Supabase to Delta Lake on OneLake, transferring and validating 30M+ rows and expanding capacity to support 10M+ rows for entity and transaction resolution at scale",
            "Built and debugged relationship and entity-resolution pipelines, identifying and resolving data quality issues"
        ]
    },
    {
        position: "Technology Specialist",
        company: "Taylor University Center for Innovation and Excellence",
        location: "Upland, Indiana",
        duration: "May 2026 to Present",
        description: [
            "Run CRM operations in HubSpot, managing contact data and event communication for campus and entrepreneurship programs",
            "Build and maintain event registration forms for Center for Innovation and Excellence (CIE) programs",
            "Collaborate with the CIE team to ideate and execute new entrepreneurship events"
        ]
    },
    {
        position: "Field First Technician",
        company: "Taylor University IT",
        location: "Upland, Indiana",
        duration: "March 2025 to June 2026",
        description: [
            "Delivered technical support to 2000+ students, faculty, and staff, troubleshooting hardware, software, and network issues with a 95% resolution rate",
            "Managed incident tickets in TeamDynamix and automated workstation deployment and configuration with Bash scripts, cutting setup time by 40%",
            "Diagnosed network connectivity issues, ran system diagnostics, and maintained endpoint security compliance"
        ]
    },
    {
        position: "Peer Tutor",
        company: "Taylor University",
        location: "Upland, Indiana",
        duration: "February 2025 to Present",
        description: [
            "Provide one-on-one tutoring in Statistics, Introduction to Computational Solving with Python, Music Theory, and Calculus, helping students improve their grades and understanding"
        ]
    },
    {
        position: "STEM Tutor",
        company: "NexGen Educational Hub",
        location: "Accra, Ghana",
        duration: "April 2024 to August 2024",
        description: [
            "Instructed 100+ students ages 6 to 15 on building and programming robots with Lego EV3 and Scratch",
            "Created weekly robotics challenges to build problem-solving skills, creativity, and confidence in STEM"
        ]
    }
];

const research = [
    {
        pill: "In progress · 2026",
        title: "Flight software for a student-built CubeSat",
        meta: "Taylor University Computer Science and Engineering · undergraduate research",
        prose:
            "Developing software for a student-built CubeSat under faculty supervision, contributing to a collaborative research publication. The work spans mission software for a small satellite platform, from onboard data handling to ground-communication routines.",
        links: [
            { label: "Project record", href: "https://pillars.taylor.edu/cse-faculty-student-projects/1/" }
        ]
    },
    {
        pill: "March 2025",
        title: "Speech recognition for the endangered Evenki language",
        meta: "LightSys Code-A-Thon · Android / Kotlin · MFCC + DTW",
        prose:
            "Built a speech-recognition pipeline using MFCC feature extraction and Dynamic Time Warping for an Android language-learning app targeting Evenki, an endangered language spoken by indigenous communities across Russia and China. Shipped to Google Play and RuStore as a real-user-facing tool.",
        links: [
            { label: "Repository", href: "https://github.com/twidykwae" }
        ]
    }
];

function TimelineDot() {
    return (
        <span
            aria-hidden="true"
            className="absolute left-[7px] md:left-1/2 top-1.5 md:top-2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-ink"
        />
    );
}

function DatePill({ children }) {
    return (
        <div className="pl-9 md:pl-0 md:pr-12 md:text-right mb-3 md:mb-0 md:pt-1">
            <span className="inline-block rounded-full border border-divider-soft px-3 py-1 text-xs sm:text-sm text-paper-soft tabular-nums font-light">
                {children}
            </span>
        </div>
    );
}

function TimelineList({ children }) {
    return (
        <ol className="relative mt-8 sm:mt-10">
            <span
                aria-hidden="true"
                className="absolute left-[7px] md:left-1/2 top-2 bottom-2 w-px bg-divider md:-translate-x-1/2"
            />
            {children}
        </ol>
    );
}

function ExperienceItem({ item }) {
    return (
        <li className="relative mb-8 sm:mb-10 md:grid md:grid-cols-2 md:gap-x-12 md:items-start">
            <TimelineDot />
            <DatePill>{item.duration}</DatePill>
            <div className="pl-9 md:pl-12">
                <div className="rounded-xl border border-divider bg-ink-deep p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-paper leading-snug">
                        {item.position}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-paper-soft font-light">
                        {item.company} · {item.location}
                    </p>
                    <ul className="mt-4 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-2 text-paper-dim font-light marker:text-paper-faint">
                        {item.description.map((line, i) => (
                            <li key={i} className="text-pretty">{line}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    );
}

function ResearchItem({ item }) {
    return (
        <li className="relative mb-8 sm:mb-10 md:grid md:grid-cols-2 md:gap-x-12 md:items-start">
            <TimelineDot />
            <DatePill>{item.pill}</DatePill>
            <div className="pl-9 md:pl-12">
                <div className="rounded-xl border border-divider bg-ink-deep p-5 sm:p-6">
                    <h4 className="text-lg sm:text-xl font-semibold text-paper leading-snug text-balance">
                        {item.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-paper-soft font-light">{item.meta}</p>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-paper-dim font-light text-pretty">
                        {item.prose}
                    </p>
                    {item.links.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                            {item.links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-paper hover:text-accent font-medium transition-colors duration-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
                                >
                                    {link.label}
                                    <svg
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1.75}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-3 h-3"
                                    >
                                        <path d="M7 17L17 7M9 7h8v8" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </li>
    );
}

export default function Experience() {
    return (
        <section id="experience" className="bg-ink text-paper">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-paper">Experience</h2>

                <TimelineList>
                    {experiences.map((item, i) => (
                        <ExperienceItem key={i} item={item} />
                    ))}
                </TimelineList>

                <div id="research" className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-divider">
                    <h3 className="text-2xl sm:text-3xl font-bold text-paper">Research</h3>
                    <p className="mt-3 max-w-2xl text-sm sm:text-base text-paper-soft font-light leading-relaxed text-pretty">
                        Long-form technical work outside the classroom, listed alongside my experience.
                    </p>

                    <TimelineList>
                        {research.map((item, i) => (
                            <ResearchItem key={i} item={item} />
                        ))}
                    </TimelineList>
                </div>
            </div>
        </section>
    );
}
