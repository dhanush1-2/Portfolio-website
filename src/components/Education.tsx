'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Education {
    school: string
    degree: string
    period: string
    gpa: string
    location: string
}

const educationData: Education[] = [
    {
        school: "Indiana University Bloomington",
        degree: "Masters in Data Science",
        period: "Aug 2024 – May 2026",
        gpa: "GPA: 3.71/4.00",
        location: "Bloomington, Indiana"
    },
    {
        school: "Bangalore Institute of Technology",
        degree: "B.E. in Computer Science and Engineering",
        period: "Aug 2020 – May 2024",
        gpa: "CGPA: 8.51/10",
        location: "Bangalore, India"
    }
]

const Education = () => {
    return (
        <section id="education" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Education</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Academic journey in Computer Science and Data Science
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.school}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{edu.school}</h3>
                                    <p className="text-primary-600 font-semibold mt-1">{edu.degree}</p>
                                    <p className="text-gray-600 mt-1">{edu.location}</p>
                                </div>
                                <div className="mt-4 md:mt-0 md:text-right">
                                    <p className="text-gray-600">{edu.period}</p>
                                    <p className="text-primary-600 font-medium mt-1">{edu.gpa}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center space-x-2 text-primary-600">
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12zm1-7a1 1 0 11-2 0 1 1 0 012 0zm-1-4a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>Currently pursuing Masters in Data Science</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Education 