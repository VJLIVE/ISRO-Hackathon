import { Link } from "react-router-dom"

export default function Docs() {
  return (
    <div className="starry-bg min-h-screen text-white px-6 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">📚 MOSDAC Documentation</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Find helpful resources, mission details, data catalogs, and FAQs all in one place.
        </p>
      </header>

      {/* Documentation Sections */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <DocCard
          title="🌍 Satellite Product Catalog"
          description="Explore downloadable data files for weather, ocean, and land applications."
          link="#"
        />
        <DocCard
          title="🛰 Mission Details"
          description="Learn about satellite missions like INSAT-3D, Megha-Tropiques, and Oceansat."
          link="#"
        />
        <DocCard
          title="📄 Technical Specs"
          description="View telemetry formats, instrument specs, and resolution details."
          link="#"
        />
        <DocCard
          title="❓ Frequently Asked Questions"
          description="Answers to the most common queries about using MOSDAC services."
          link="#"
        />
      </div>

      {/* Back to Home Button */}
      <div className="text-center mt-16">
        <Link to="/">
          <button className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-lg text-lg">
            ⬅ Back to Home
          </button>
        </Link>
      </div>
    </div>
  )
}

// Component: DocCard
function DocCard({ title, description, link }) {
  return (
    <a href={link} className="block bg-slate-800 border border-slate-700 p-6 rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </a>
  )
}
