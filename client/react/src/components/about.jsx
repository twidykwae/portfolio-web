import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-black text-white flex justify-center items-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 min-h-[60vh]">
      <div className="max-w-3xl text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 md:mb-20">
        <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
          I'm <span className="font-semibold text-white">Twidy Kwae</span>. I'm studying Computer Science at Taylor University with a concentration in Artificial Intelligence and Machine Learning and minors in Cybersecurity and Data Science. I am deeply interested in AI, Multi-Context Protocols(MCP), and the way intelligent systems can interact seamlessly across different environments and integrate real-world data to enhance user experiences. My work mixes backend and frontend development,
          with a focus on building secure, scalabale, and user-friendly applications. I am also currently the Social Media Manager for Taylor University's Black Student Union, where I handle content creation, audience engagement, and digital marketing strategies to boost our online presence. Looking forward, my goal is to keep advancing my technical expertise while exploring innovative applications of AI and MCP in real-world scenarios, growing both personally and professionally in the tech industry, and as a leader as well and building a strong foundation for a long term career in AI Engineering and Data Science.
        </p>

        <div className="flex justify-center pt-6 sm:pt-8 md:pt-11">
          <a
            href="/my_resume.pdf"
            target="_blank"
            className="flex items-center gap-2 bg-white text-black border border-black px-6 sm:px-8 py-2 rounded-3xl font-medium hover:bg-green-400 transition text-sm sm:text-base"
          >
            <span>Resume</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-black"
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
