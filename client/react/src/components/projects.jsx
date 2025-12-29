import React from "react";

export default function Projects() {

    const projects = [
        {
            name: "NBA Win Probability Prediction ML Model ",
            description: "•	Developed and evaluated a logistic regression classifier to estimate NBA win probabilities using the 2025/26 data, achieving 95% prediction accuracy and 94% recall",
            image: "/Screenshot 2025-12-26 224016.png",
            link: "https://github.com/twidykwae/nba-win-probability-predictor"
        },
        {
            name: "UniCore",
            description: "UniCore is a campus-focused platform that helps students connect, find lost items, share prayer requests, and build community in one place",
            image: "/Screenshot 2025-12-26 224016.png",
            link: "https://www.github.com/twidykwae/new_proj"
        },
        {
            name: "AI Battleship Player",
            description: "Built a C++ game AI using minimax and heuristics with probabilistic targeting, achieving a 90% win rate against competing AI",
            image: "/Screenshot 2025-08-18 170553.png",
            link: "https://www.github.com/twidykwae"
        },
    ]
  return (
    <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-8 py-16">
            <h2 className="text-3xl font-bold mb-12 relative inline-block">
                Projects
                <span className="absolute left-0 bottom-10 h-1 bg-white w-0 animate-expand mt-10"></span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project, index) => (
                <a 
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative card bg-black border border-gray-900 w-72 shadow-md group overflow-hidden rounded-xl"
                >
                {project.image && (
                    <figure className="w-full h-48 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                        />
                    </figure>
                )}
                <div className="card-body text-white p-4">
                    <h2 className="card-title text-xl font-semibold mb-2">{project.name}</h2>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
                </a>
            ))}
            </div>
        </div>
    </section>
  )
}
