import React, { useState, useEffect, useRef } from "react";

export default function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Smooth scroll to section function
    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        setIsMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Account for fixed navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            // Smooth scroll with easing animation
            const startPosition = window.pageYOffset;
            const distance = offsetPosition - startPosition;
            const duration = 800; // milliseconds
            let start = null;

            const animateScroll = (timestamp) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const percentage = Math.min(progress / duration, 1);
                
                // Easing function for smooth deceleration (ease-out cubic)
                const ease = 1 - Math.pow(1 - percentage, 3);
                
                window.scrollTo(0, startPosition + distance * ease);
                
                if (progress < duration) {
                    requestAnimationFrame(animateScroll);
                }
            };

            requestAnimationFrame(animateScroll);
        }
    };

    return (
        <nav className="bg-black text-white p-7 fixed w-full z-50 shadow-md font-thin"> 
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-lg">Twidy Kwae</div>

                <div className="relative" ref={menuRef}>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex flex-col items-end space-y-1.5 focus:outline-none z-50"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>

                    {isMenuOpen && (
                        <div className="absolute right-0 mt-4 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-lg z-50">
                            <ul className="py-2">
                                <li>
                                    <a 
                                        href="#home" 
                                        className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-blue-500 transition"
                                        onClick={(e) => handleNavClick(e, 'home')}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#about" 
                                        className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-blue-500 transition"
                                        onClick={(e) => handleNavClick(e, 'about')}
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#experience" 
                                        className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-blue-500 transition"
                                        onClick={(e) => handleNavClick(e, 'experience')}
                                    >
                                        Experience & Proj.
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#contact" 
                                        className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-blue-500 transition"
                                        onClick={(e) => handleNavClick(e, 'contact')}
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}