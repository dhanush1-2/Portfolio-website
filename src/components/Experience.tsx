'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Experience {
    company: string
    role: string
    period: string
    location: string
    achievements: string[]
    github?: string
}

const experiences: Experience[] = [
    {
        company: "Enterprise Building Training Solutions (EBTS)",
        role: "Data Science Intern",
        period: "Oct 2023 – Nov 2023",
        location: "Bangalore, India",
        achievements: [
            "Built a real-time facial recognition attendance system using Flask, OpenCV, and KNN, achieving 95% accuracy",
            "Used Haar cascades for face detection and a KNN classifier for identity recognition",
            "Automated CSV-based attendance tracking and implemented a file-based data system",
            "Designed a responsive web interface for attendance marking"
        ],
        github: "https://github.com/dhanush1-2/Face-Recognition-Attendance.git"
    }
]

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Professional Experience</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Building real-world solutions with data science and machine learning
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                                    <p className="text-primary-600 font-semibold mt-1">{exp.role}</p>
                                    <p className="text-gray-600 mt-1">{exp.location}</p>
                                </div>
                                <p className="text-gray-600 mt-2 md:mt-0 md:text-right">{exp.period}</p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-gray-800">Key Achievements:</h4>
                                <ul className="space-y-3">
                                    {exp.achievements.map((achievement, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                            className="flex items-start space-x-3"
                                        >
                                            <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary-500" />
                                            <span className="text-gray-700">{achievement}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {exp.github && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="mt-6"
                                >
                                    <a
                                        href={exp.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700"
                                    >
                                        <span>View Project on GitHub</span>
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </a>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience 