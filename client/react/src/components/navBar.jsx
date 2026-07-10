import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const THEME_TRANSITION_MS = 280;

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();
    const [theme, setTheme] = useState("dark");

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
        const nextTheme = theme === "dark" ? "light" : "dark";
        const root = document.documentElement;
        root.classList.add("theme-transitioning");
        setTheme(nextTheme);
        localStorage.setItem("theme", nextTheme);
        applyTheme(nextTheme);
        window.setTimeout(() => {
            root.classList.remove("theme-transitioning");
        }, THEME_TRANSITION_MS + 40);
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

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape" && isMenuOpen) setIsMenuOpen(false);
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [isMenuOpen]);

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        setIsMenuOpen(false);
        if (location.pathname !== "/") {
            window.location.href = `/#${sectionId}`;
            return;
        }
        const element = document.getElementById(sectionId);
        if (!element) return;

        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) {
            window.scrollTo({ top: offsetPosition, behavior: "auto" });
            return;
        }

        const startPosition = window.pageYOffset;
        const distance = offsetPosition - startPosition;
        const duration = 800;
        let start = null;

        const animateScroll = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);
            const ease = 1 - Math.pow(1 - percentage, 3);
            window.scrollTo(0, startPosition + distance * ease);
            if (progress < duration) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "research", label: "Research" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav className="bg-ink text-paper p-7 fixed w-full z-50 font-light">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link
                    to="/"
                    className="text-lg tracking-tight focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
                >
                    Twidy Kwae
                </Link>

                <div className="relative flex items-center gap-4" ref={menuRef}>
                    <button
                        onClick={toggleTheme}
                        className="text-paper hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm p-1"
                        aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                    >
                        {theme === "dark" ? (
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                            </svg>
                        ) : (
                            <svg
                                className="w-5 h-5"
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
                        className="flex flex-col items-end space-y-1.5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm p-1 z-50 text-paper hover:text-accent transition-colors duration-200"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="primary-menu"
                    >
                        <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>

                    {isMenuOpen && (
                        <div
                            id="primary-menu"
                            role="menu"
                            className="fixed right-6 top-20 w-56 max-h-[calc(100vh-6rem)] overflow-y-auto bg-divider border border-divider-soft rounded-lg z-50"
                        >
                            <ul className="py-2">
                                {navLinks.map((link) => (
                                    <li key={link.id}>
                                        <a
                                            href={`/#${link.id}`}
                                            role="menuitem"
                                            className="block px-4 py-2 text-paper hover:bg-divider-soft hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:bg-divider-soft focus-visible:text-accent"
                                            onClick={(e) => handleNavClick(e, link.id)}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <Link
                                        to="/cadence"
                                        role="menuitem"
                                        className="block px-4 py-2 text-paper hover:bg-divider-soft hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:bg-divider-soft focus-visible:text-accent"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Cadence
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/photography"
                                        role="menuitem"
                                        className="block px-4 py-2 text-paper hover:bg-divider-soft hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:bg-divider-soft focus-visible:text-accent"
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
    );
}
