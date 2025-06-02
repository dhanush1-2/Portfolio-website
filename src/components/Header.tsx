'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Header = () => {
    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-shrink-0"
                    >
                        <Link href="/" className="text-xl font-bold text-secondary">
                            Dhanush CS
                        </Link>
                    </motion.div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {navItems.map((item) => (
                                <motion.div
                                    key={item.name}
                                    whileHover={{ y: -2 }}
                                    className="relative group"
                                >
                                    <Link
                                        href={item.href}
                                        className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="https://www.linkedin.com/in/dhanush-chandra-shekar-228a00258"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700"
                        >
                            LinkedIn
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="https://github.com/dhanush1-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700"
                        >
                            GitHub
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="/Dhanush_ChandraShekar_Resume.pdf"
                            download="Dhanush_ChandraShekar_Resume.pdf"
                            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                        >
                            Download Resume
                        </motion.a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header 