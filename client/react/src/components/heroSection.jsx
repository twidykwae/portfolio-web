import React from "react";

export default function Hero() {
    return (
        <section id="home" className=" bg-black text-white min-h-screen">
            <div className="flex items-center justify-between px-32 py-16 lg:py-32 mb-0">
                <div className="flex-1 max-w-2xl">
                    <div className="mb-8">
                        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-light leading-none">
                            Twidy Kelvin
                        </h1>
                        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-none text-blue-500">
                            Kwae
                        </h1>
                    </div>
          
                    <p className="text-lg text-gray-300 mb-16 max-w-lg font-thin">
                        CS student <span className="text-white font-medium">Information Systems Concentration.</span> Cybersecurtiy & Data Science Minor
                    </p>
                    
                    <div className="flex space-x-16 text-sm">
                        <div>
                            <div className="text-gray-500 mb-2 tracking-wider uppercase font-semibold">SCHOOL</div>
                            <div className="text-white font-thin">Taylor University</div>
                        </div>
                        <div>
                            <div className="text-gray-500 mb-2 tracking-wider uppercase font-semibold">CONTACT</div>
                            <div className="text-white font-thin">twidy_kwae@taylor.edu || twidykwae20@gmail.com</div>
                        </div>   
                    </div>
                </div>
                    <div className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0">
                        <div className="relative">
                            <div className="w-80 h-80 lg:w-96 lg:h-96 overflow-hidden outline-none">
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

