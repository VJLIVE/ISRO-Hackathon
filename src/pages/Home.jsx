import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';

export default function Home() {
    return (
        <div className="min-h-screen relative text-white bg-black z-10 overflow-x-hidden">
            <ParticleBackground />

            {/* Hero */}
            <section className="flex flex-col items-center justify-center px-4 py-24 text-center relative z-10">
                <motion.h1
                    className="text-5xl font-extrabold mb-4 tracking-wide"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    MOSDAC Help Bot
                </motion.h1>

                <motion.p
                    className="text-lg text-gray-300 max-w-2xl mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Navigate the universe of satellite data with ease. Our intelligent assistant helps you discover real-time data, documents, and insights — instantly.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <Link to="/chat">
                        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-lg hover:bg-indigo-700 transition">
                            Launch Bot 🚀
                        </button>
                    </Link>
                </motion.div>
            </section>

            {/* Features */}
            <FadeInSection>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20 mb-20">
                    <FeatureCard title="🛰 Satellite Products" description="Browse data from satellites and instruments curated by MOSDAC." />
                    <Link to="/docs">
                        <FeatureCard title="📚 Documentation" description="Access detailed scientific docs and specs on satellite missions." />
                    </Link>
                    <FeatureCard title="🌐 Smart Search" description="Ask anything in plain language and get instant results." />
                </section>
            </FadeInSection>

            {/* How it works */}
            <FadeInSection>
                <section className="px-6 md:px-32 py-16 bg-slate-950 text-center border-t border-slate-800">
                    <h2 className="text-3xl font-bold mb-6">🌌 How It Works</h2>
                    <div className="grid md:grid-cols-3 gap-10 text-left">
                        <Step number="1" title="Ingest Satellite Data" desc="The bot pulls in documentation, product specs, and scientific metadata from the MOSDAC web portal." />
                        <Step number="2" title="Build Knowledge Graph" desc="Entities and relationships are mapped using NLP models to understand space-related context." />
                        <Step number="3" title="Answer User Queries" desc="Ask questions in natural language and get contextual, accurate answers instantly." />
                    </div>
                </section>
            </FadeInSection>

            {/* Meet the Bot */}
            <FadeInSection>
                <section className="px-6 md:px-32 py-16 text-center">
                    <h2 className="text-3xl font-bold mb-6">🤖 Meet the Bot</h2>
                    <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
                        This AI-powered bot understands the structure of the MOSDAC portal through a knowledge graph. It can answer questions like:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 text-lg text-gray-300">
                        <li>🔎 "Which satellites provide ocean wind data?"</li>
                        <li>📄 "Give me documentation for Megha-Tropiques"</li>
                        <li>🌐 "What is the coverage area of INSAT-3D?"</li>
                        <li>📡 "Show me all radar-based products"</li>
                    </ul>
                </section>
            </FadeInSection>

            {/* Datasets and Services */}
            <FadeInSection>
                <section className="px-6 md:px-32 py-16 bg-slate-950 text-center border-t border-slate-800">
                    <h2 className="text-3xl font-bold mb-8">📊 Key Datasets & Services</h2>
                    <div className="grid md:grid-cols-3 gap-6 text-left text-gray-300">
                        <FeatureCard title="☔ Rainfall Products" description="MT-SAPHIR, GSMap, and insitu rainfall datasets across India." />
                        <FeatureCard title="🌊 Ocean Forecasts" description="Sea surface temperature, ocean current models, and salinity levels." />
                        <FeatureCard title="🌬 Wind & Weather" description="Global ocean surface wind and Doppler radar observations." />
                    </div>
                </section>
            </FadeInSection>

            {/* Tech Stack */}
            <FadeInSection>
                <section className="px-6 md:px-32 py-16 text-center">
                    <h2 className="text-3xl font-bold mb-8">🧠 Tech Stack</h2>
                    <div className="grid md:grid-cols-3 gap-6 text-left text-gray-300">
                        <FeatureCard title="⚙️ NLP + Embeddings" description="Used to extract entities from documentation using LLMs." />
                        <FeatureCard title="🧩 Knowledge Graph" description="Built using entity-relation mapping of static/dynamic portal content." />
                        <FeatureCard title="⚡ React + FastAPI" description="Frontend in React, backend API using Python + FastAPI." />
                    </div>
                </section>
            </FadeInSection>

            {/* Use Cases */}
            <FadeInSection>
                <section className="px-6 md:px-32 py-20">
                    <h2 className="text-3xl font-bold text-center mb-10">🧑‍🚀 Who is this for?</h2>
                    <div className="grid md:grid-cols-3 gap-6 text-gray-300">
                        <UseCase title="Researchers" desc="Quickly retrieve mission-specific data without combing through PDFs." />
                        <UseCase title="Students" desc="Understand satellite systems, launch info, and use AI to explore astronomy." />
                        <UseCase title="Engineers" desc="Instantly locate specs, telemetry formats, and archived product types." />
                    </div>
                </section>
            </FadeInSection>

            {/* Footer */}
            <footer className="text-center text-gray-500 py-6 text-sm border-t border-slate-800 bg-slate-950">
                <p>Made for ISRO Hackathon • Powered by MOSDAC • Designed by Rizz 🚀</p>
            </footer>
        </div>
    );
}

// Components
function FeatureCard({ title, description }) {
    return (
        <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-indigo-700 hover:shadow-indigo-500/30 transition">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300 text-sm">{description}</p>
        </div>
    );
}

function Step({ number, title, desc }) {
    return (
        <div className="bg-slate-800 p-6 rounded-lg border-l-4 border-indigo-500">
            <h4 className="text-xl font-bold mb-2">Step {number}: {title}</h4>
            <p className="text-gray-400 text-sm">{desc}</p>
        </div>
    );
}

function UseCase({ title, desc }) {
    return (
        <div className="bg-slate-800 p-6 rounded-lg shadow hover:shadow-indigo-600/20 border border-slate-700">
            <h4 className="text-lg font-semibold mb-1">{title}</h4>
            <p className="text-gray-400 text-sm">{desc}</p>
        </div>
    );
}

// Fade in section wrapper
import { useInView } from 'framer-motion';
function FadeInSection({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
}
