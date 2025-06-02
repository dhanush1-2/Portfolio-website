'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Project {
    title: string
    description: string
    technologies: string[]
    metrics: string[]
    github?: string
    image?: string
}

const projects: Project[] = [
    {
        title: "Finance Article Q&A App",
        description: "A Streamlit-based Q&A tool that processes financial articles and answers user queries using a RAG system.",
        technologies: ["Python", "Streamlit", "FAISS", "LangChain", "Hugging Face", "Groq LLM"],
        metrics: [
            "Integrated advanced LLM capabilities",
            "Implemented robust error handling",
            "Built efficient content scraping system"
        ],
        github: "https://github.com/dhanush1-2/Finance-Article-Question-Answer-Application.git"
    },
    {
        title: "Face Recognition Attendance System",
        description: "Real-time facial recognition system for automated attendance tracking using computer vision.",
        technologies: ["Python", "OpenCV", "Flask", "KNN", "Haar Cascades"],
        metrics: [
            "95% recognition accuracy",
            "Real-time face detection and recognition",
            "Automated CSV-based attendance tracking",
            "Web interface for attendance management"
        ],
        github: "https://github.com/dhanush1-2/Face-Recognition-Attendance"
    },
    {
        title: "Car Rental System",
        description: "Full-stack car rental platform with booking management and user authentication.",
        technologies: ["Flask", "Python", "SQL", "HTML/CSS", "Bootstrap"],
        metrics: [
            "Implemented secure user authentication",
            "Built booking management system",
            "Designed responsive UI"
        ],
        github: "https://github.com/dhanush1-2/car_rental-flask"
    },
    {
        title: "Netflix Content Analysis",
        description: "Comprehensive analysis of Netflix viewing patterns to improve content recommendations.",
        technologies: ["Python", "Pandas", "Tableau", "Seaborn", "Scikit-Learn"],
        metrics: [
            "35% increase in viewership",
            "20% improvement in recommendation engagement",
            "15% reduction in model error"
        ]
    },
    {
        title: "Paint App - Android",
        description: "Android drawing application with various painting tools and features.",
        technologies: ["Android Studio", "Java", "XML", "Android SDK"],
        metrics: [
            "Multiple drawing tools implementation",
            "Color picker integration",
            "Save/load functionality"
        ],
        github: "https://github.com/dhanush1-2/Paint-app-android-studio"
    },
    {
        title: "Chrome Dino Game Clone",
        description: "Recreation of the popular Chrome dinosaur game with additional features.",
        technologies: ["C", "Graphics Library", "Game Development"],
        metrics: [
            "Implemented game physics",
            "Added score tracking",
            "Created obstacle generation system"
        ],
        github: "https://github.com/dhanush1-2/Dino-Game"
    },
    {
        title: "Machine Learning Projects",
        description: "Collection of ML projects including classification, regression, and clustering implementations.",
        technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
        metrics: [
            "Implemented various ML algorithms",
            "Performed data preprocessing and analysis",
            "Created visualization dashboards"
        ],
        github: "https://github.com/dhanush1-2/ML-Project"
    }
]

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-secondary mb-4">Featured Projects</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Showcasing my expertise in data science, machine learning, and software development
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-secondary mb-3">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-primary-600 mb-2">Key Metrics:</h4>
                                    <ul className="space-y-1">
                                        {project.metrics.map((metric, i) => (
                                            <li key={i} className="text-sm text-gray-600 flex items-center">
                                                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                                                {metric}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-primary-600 mb-2">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-primary-600 hover:text-primary-700"
                                    >
                                        View on GitHub
                                        <svg
                                            className="w-4 h-4 ml-1"
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
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects 