import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";

export default function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();
    const [theme, setTheme] = useState("dark");
    const toggleIconRef = useRef(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const initialTheme = savedTheme || "dark";
        setTheme(initialTheme);
        applyTheme(initialTheme);
    }, []);

    const applyTheme = (nextTheme) => {
        const root = document.documentElement;
        if (nextTheme === "light") {
            root.classList.add("theme-light");
        } else {
            root.classList.remove("theme-light");
        }
    };

    const toggleTheme = () => {
        const prevTheme = theme;
        const nextTheme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        localStorage.setItem("theme", nextTheme);

        const bgElements = Array.from(
            document.querySelectorAll(".bg-black, .bg-gray-900, .bg-gray-800, .bg-gray-700")
        ).map((el) => ({
            el,
            from: getComputedStyle(el).backgroundColor
        }));
        const textElements = Array.from(
            document.querySelectorAll(".text-white, .text-gray-400, .text-gray-300")
        ).map((el) => ({
            el,
            from: getComputedStyle(el).color
        }));
        const borderElements = Array.from(
            document.querySelectorAll(".border-gray-900, .border-gray-800, .border-gray-700")
        ).map((el) => ({
            el,
            from: getComputedStyle(el).borderColor
        }));

        applyTheme(nextTheme);

        window.setTimeout(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    bgElements.forEach(({ el }) => gsap.set(el, { clearProps: "backgroundColor" }));
                    textElements.forEach(({ el }) => gsap.set(el, { clearProps: "color" }));
                    borderElements.forEach(({ el }) => gsap.set(el, { clearProps: "borderColor" }));
                    if (toggleIconRef.current) {
                        gsap.set(toggleIconRef.current, { clearProps: "transform" });
                    }
                }
            });
            bgElements.forEach(({ el, from }) => {
                const to = getComputedStyle(el).backgroundColor;
                tl.fromTo(el, { backgroundColor: from }, { backgroundColor: to, duration: 0.5, ease: "power2.out" }, 0);
            });
            textElements.forEach(({ el, from }) => {
                const to = getComputedStyle(el).color;
                tl.fromTo(el, { color: from }, { color: to, duration: 0.5, ease: "power2.out" }, 0);
            });
            borderElements.forEach(({ el, from }) => {
                const to = getComputedStyle(el).borderColor;
                tl.fromTo(el, { borderColor: from }, { borderColor: to, duration: 0.5, ease: "power2.out" }, 0);
            });
            if (toggleIconRef.current) {
                tl.fromTo(
                    toggleIconRef.current,
                    { rotate: 0, scale: 1 },
                    { rotate: prevTheme === "dark" ? 180 : -180, scale: 1.15, duration: 0.5, ease: "power2.out" },
                    0
                );
            }
        }, 0);
    };

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
        if (location.pathname !== "/") {
            window.location.href = `/#${sectionId}`;
            return;
        }
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
                <Link to="/" className="text-lg">Twidy Kwae</Link>

                <div className="relative flex items-center gap-4" ref={menuRef}>
                    <button
                        onClick={toggleTheme}
                        className="text-white hover:text-blue-500 transition focus:outline-none"
                        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {theme === "dark" ? (
                            <svg
                                ref={toggleIconRef}
                                className="w-5 h-5 transition-transform duration-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                            </svg>
                        ) : (
                            <svg
                                ref={toggleIconRef}
                                className="w-5 h-5 transition-transform duration-300 rotate-90"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M12 4.75a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 0112 4.75zM12 18.75a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zM4.75 12a.75.75 0 01-.75-.75v-.5a.75.75 0 011.5 0v.5A.75.75 0 014.75 12zM18.75 12a.75.75 0 01-.75-.75v-.5a.75.75 0 011.5 0v.5a.75.75 0 01-.75.75zM6.47 6.47a.75.75 0 01-1.06-1.06l.35-.35a.75.75 0 011.06 1.06l-.35.35zM17.18 17.18a.75.75 0 01-1.06-1.06l.35-.35a.75.75 0 011.06 1.06l-.35.35zM17.53 6.47a.75.75 0 01-1.06 0l-.35-.35a.75.75 0 011.06-1.06l.35.35a.75.75 0 010 1.06zM6.82 17.18a.75.75 0 01-1.06 0l-.35-.35a.75.75 0 011.06-1.06l.35.35a.75.75 0 010 1.06zM12 7a5 5 0 100 10 5 5 0 000-10z" />
                            </svg>
                        )}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex flex-col items-end space-y-1.5 focus:outline-none z-50 text-white"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>

                    {isMenuOpen && (
                        <div className="fixed right-6 top-20 w-56 max-h-[calc(100vh-6rem)] overflow-y-auto bg-gray-900 border border-gray-800 rounded-lg shadow-lg z-50">
                            <ul className="py-2">
                                <li>
                                    <a 
                                        href="/#home" 
                                        className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-blue-500 transition"
                                        onClick={(e) => handleNavClick(e, 'home')}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="/#about" 
                                        className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-blue-500 transition"
                                        onClick={(e) => handleNavClick(e, 'about')}
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="/#experience" 
                                        className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-blue-500 transition"
                                        onClick={(e) => handleNavClick(e, 'experience')}
                                    >
                                        Experience & Proj.
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="/#contact" 
                                        className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-blue-500 transition"
                                        onClick={(e) => handleNavClick(e, 'contact')}
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        to="/photography"
                                        className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-blue-500 transition"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Photography
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}