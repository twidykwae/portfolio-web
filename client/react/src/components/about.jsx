import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-ink text-paper flex justify-center items-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 min-h-[60vh]">
      <div className="max-w-3xl text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 md:mb-20">
        <p className="text-paper-dim text-base sm:text-lg font-light leading-relaxed text-pretty">
          I'm Twidy Kwae, a Computer Science student at Taylor University concentrating in Artificial Intelligence and Machine Learning, with a minor in Data Science. I work at the intersection of data science, AI, and ML systems: turning large, messy datasets into models, and building the pipelines that run them. My aim is a career in the data science, AI, and machine learning field. Entrepreneurship pulls at me too: alongside Cadence, my academic planning product, I'm building a fitness clothing brand and a cologne brand, and I expect to keep starting things.
        </p>

        <div className="flex justify-center pt-6 sm:pt-8 md:pt-11">
          <a
            href="/my_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-paper text-ink border border-paper px-6 sm:px-8 py-2 rounded-3xl font-medium hover:bg-accent hover:text-ink hover:border-accent transition-colors duration-200 text-sm sm:text-base focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
          >
            <span>Resume</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
