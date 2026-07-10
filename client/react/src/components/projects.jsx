import React from "react";

const projects = [
    {
        name: "NBA Win Probability Prediction",
        description: "Developed and evaluated a logistic regression classifier estimating NBA win probabilities on the 2025/26 dataset, achieving 95% prediction accuracy and 94% recall.",
        image: "/Screenshot 2025-12-28 234408.png",
        link: "https://github.com/twidykwae/nba-win-probability-predictor",
    },
    {
        name: "Three-Point Evolution",
        description: "Analyzed 47 seasons of NBA data to trace how the three-point line reshaped the game, pairing statistical analysis with a narrative data-visualization walkthrough.",
        image: null,
        link: "https://github.com/twidykwae",
    },
    {
        name: "AI Battleship Player",
        description: "Built a C++ game AI using probabilistic targeting and Monte Carlo simulation, achieving an 80% win rate against competing agents.",
        image: "/Screenshot 2025-08-18 170553.png",
        link: "https://www.github.com/twidykwae",
    },
    {
        name: "Common Lisp Expert System",
        description: "Implemented a rule-based expert system in Common Lisp using backward chaining inference to prove logical goals and generate step-by-step explanations of its reasoning.",
        image: "/Screenshot 2026-02-22 031013.png",
        link: "https://github.com/Mach417/cos280-expert-system",
    },
    {
        name: "UniCore",
        description: "A campus platform that helps students connect, find lost items, share prayer requests, and build community in one place.",
        image: "/Screenshot 2025-12-26 224016.png",
        link: "https://www.github.com/twidykwae/new_proj",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="bg-ink text-paper">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-paper">
                    Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block bg-ink border border-divider w-full max-w-sm sm:w-72 overflow-hidden rounded-xl transition-colors duration-200 hover:border-accent focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
                        >
                            {project.image && (
                                <figure className="w-full h-48 overflow-hidden m-0">
                                    <img
                                        src={project.image}
                                        alt={`${project.name} screenshot`}
                                        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                                        loading="lazy"
                                    />
                                </figure>
                            )}
                            <div className="p-4">
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-paper group-hover:text-accent transition-colors duration-200">
                                    {project.name}
                                </h3>
                                <p className="text-paper-dim text-xs sm:text-sm font-light leading-relaxed text-pretty">
                                    {project.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
