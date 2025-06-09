'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Certification {
    title: string
    issuer: string
    date: string
    credentialLink: string
    badgeImage?: string
    skills: string[]
}

const certifications: Certification[] = [
    {
        title: "AWS Certified AI Practitioner",
        issuer: "Amazon Web Services (AWS)",
        date: "2024",
        credentialLink: "https://www.credly.com/badges/a22ef477-8ff9-4108-b5c4-0535b57cd41d/public_url",
        skills: [
            "Machine Learning",
            "Artificial Intelligence",
            "AWS AI Services",
            "Cloud Computing",
            "Data Analytics"
        ]
    }
]

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Certifications</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Professional certifications and achievements in technology and data science
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex flex-col h-full">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
                                <p className="text-primary-600 font-medium mb-1">{cert.issuer}</p>
                                <p className="text-gray-500 text-sm mb-4">{cert.date}</p>

                                <div className="mb-4 flex-grow">
                                    <h4 className="text-sm font-semibold text-gray-600 mb-2">Skills & Topics:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href={cert.credentialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-primary-600 hover:text-primary-700 mt-auto"
                                >
                                    <span>View Credential</span>
                                    <svg
                                        className="w-5 h-5 ml-1"
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
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications 