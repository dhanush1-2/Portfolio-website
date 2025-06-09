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
        title: "ChurnMaster Pro",
        description: "Production-ready ML system that predicts customer churn in the telecommunications industry with a user-friendly web interface for real-time predictions.",
        technologies: ["Python", "Scikit-learn", "Flask", "XGBoost", "CatBoost", "Bootstrap 5", "Pandas", "NumPy"],
        metrics: [
            "Built advanced ML pipeline with automated preprocessing",
            "Implemented multiple models (Random Forest, XGBoost, CatBoost)",
            "Created interactive web UI for instant predictions",
            "Developed comprehensive logging and monitoring system"
        ],
        github: "https://github.com/dhanush1-2/End-to-End-ML-Project.git"
    },
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
    }
]

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 via-white to-primary-50/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--color-primary-500),0.05),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(var(--color-primary-600),0.05),transparent_50%)]"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
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
                            className="group relative bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="p-6 relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-primary-600 transition-colors duration-300"
                                            aria-label="View on GitHub"
                                        >
                                            <svg
                                                className="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                                            </svg>
                                        </a>
                                    )}
                                </div>

                                <p className="text-gray-600 mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-primary-600 mb-3 flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        Key Achievements
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.metrics.map((metric, i) => (
                                            <li key={i} className="text-sm text-gray-600 flex items-start">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                                <span className="flex-1">{metric}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-primary-600 mb-3 flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                        Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full font-medium border border-primary-100 hover:bg-primary-100 transition-colors duration-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects