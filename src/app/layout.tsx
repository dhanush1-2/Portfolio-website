import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto-mono',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Dhanush Chandra Shekar - Data Scientist',
    description: 'Data Science graduate student at Indiana University Bloomington with expertise in machine learning, data analysis, and AI.',
    keywords: ['Data Science', 'Machine Learning', 'AI', 'Portfolio', 'Indiana University'],
    authors: [{ name: 'Dhanush Chandra Shekar' }],
    viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${robotoMono.variable} scroll-smooth`}>
            <body className="font-sans antialiased bg-white text-gray-800">
                <div className="flex flex-col min-h-screen">
                    <main className="flex-grow">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
} 