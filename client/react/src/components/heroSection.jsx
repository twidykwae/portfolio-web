import React from "react";

export default function Hero() {
    return (
        <section id="home" className="bg-black text-white min-h-screen">
            <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32 py-16 lg:py-32 mb-0">
                <div className="flex-1 max-w-2xl w-full mb-8 lg:mb-0">
                    <div className="mb-6 sm:mb-8">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight">
                            Twidy Kelvin
                        </h1>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-blue-500">
                            Kwae
                        </h1>
                    </div>
          
                    <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 lg:mb-16 max-w-lg font-thin">
                        CS student <span className="text-white font-medium">Artificial Intelligence/Machine Learning Concentration.</span> Cybersecurtiy & Data Science Minor
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:space-x-8 lg:space-x-16 space-y-4 sm:space-y-0 text-xs sm:text-sm">
                        <div>
                            <div className="text-gray-500 mb-2 tracking-wider uppercase font-semibold">SCHOOL</div>
                            <div className="text-white font-thin">Taylor University</div>
                        </div>
                        <div>
                            <div className="text-gray-500 mb-2 tracking-wider uppercase font-semibold">CONTACT</div>
                            <div className="text-white font-thin break-words">twidy_kwae@taylor.edu || twidykwae20@gmail.com</div>
                        </div>   
                    </div>
                </div>
                <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0 w-full lg:w-auto">
                    <div className="relative">
                        <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden outline-none">
                            <img 
                                src="/light-bg.jpg" 
                                alt="Light"
                                className="w-full h-full object-contain outline-none select-none"
                                draggable="false"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

