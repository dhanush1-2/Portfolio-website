'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface SkillCategory {
    name: string
    skills: string[]
}

const skillCategories: SkillCategory[] = [
    {
        name: "Languages",
        skills: ["Python", "SQL", "R"]
    },
    {
        name: "Libraries & Frameworks",
        skills: ["Pandas", "NumPy", "Scikit-Learn", "StatsModels", "Seaborn", "Matplotlib", "TensorFlow", "Keras"]
    },
    {
        name: "Data Platforms & Tools",
        skills: ["Snowflake", "Tableau", "Power BI"]
    },
    {
        name: "Analytics & ML Techniques",
        skills: [
            "A/B Testing",
            "Regression",
            "Classification",
            "Clustering",
            "Feature Engineering",
            "Predictive Modeling",
            "KPI Development",
            "Attribution Modeling"
        ]
    },
    {
        name: "Data Engineering",
        skills: [
            "ETL Pipelines",
            "Data Cleaning",
            "Data Transformation",
            "SQL Joins",
            "Window Functions",
            "Data Aggregation"
        ]
    },
    {
        name: "Statistics",
        skills: [
            "Hypothesis Testing",
            "Time Series Analysis",
            "ANOVA",
            "MSE Analysis",
            "Recursive Feature Elimination (RFE)"
        ]
    }
]

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical Skills</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive expertise in data science, machine learning, and analytics
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-bold text-primary-600 mb-4">{category.name}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200 hover:border-primary-500 transition-colors duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills 