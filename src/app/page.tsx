import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Certifications from '@/components/Certifications'

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Education />
        </>
    )
} 