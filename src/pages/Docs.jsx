import { Link } from 'react-router-dom';

export default function Docs() {
  return (
    <div className="starry-bg min-h-screen text-white px-6 py-12">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">📚 MOSDAC Documentation</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Browse mission details, scientific data, technical specifications, and support documentation — all organized for easy discovery.
        </p>
      </header>

      {/* Data Resources */}
      <SectionTitle title="📦 Data Resources" />
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        <DocCard
          title="🌍 Satellite Product Catalog"
          description="Explore downloadable data for weather, ocean, and land applications."
          link="/docs/catalog"
        />
        <DocCard
          title="📈 Visualization Tools"
          description="Interactive graphs and maps for quick data interpretation."
          link="/docs/visualization"
        />
      </div>

      {/* Satellite Missions */}
      <SectionTitle title="🛰 Satellite Missions" />
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        <DocCard
          title="🚀 Mission Overviews"
          description="Get an overview of INSAT-3D, Megha-Tropiques, Oceansat and others."
          link="/docs/missions"
        />
        <DocCard
          title="🧪 Instrument Specs"
          description="Learn about onboard sensors, resolutions, and telemetry formats."
          link="/docs/specs"
        />
      </div>

      {/* Help & Support */}
      <SectionTitle title="🛠 Help & Support" />
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        <DocCard
          title="❓ Frequently Asked Questions"
          description="Find answers to the most commonly asked user queries."
          link="/docs/faq"
        />
        <DocCard
          title="📬 Contact & Feedback"
          description="Reach out for support or provide suggestions."
          link="/docs/contact"
        />
      </div>

      {/* Legal & Policy */}
      <SectionTitle title="📜 Policies & Legal" />
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        <DocCard
          title="🔐 Data Access Policy"
          description="Understand how public access and licensing work for MOSDAC data."
          link="/docs/policy/data-access"
        />
        <DocCard
          title="🧾 Terms & Conditions"
          description="Review MOSDAC usage terms, privacy policy, and disclaimers."
          link="/docs/policy/terms"
        />
      </div>

      {/* Back Button */}
      <div className="text-center mt-20">
        <Link to="/">
          <button className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-lg text-lg">
            ⬅ Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

// Reusable Section Title
function SectionTitle({ title }) {
  return (
    <h2 className="text-2xl font-bold mb-6 text-center md:text-left max-w-5xl mx-auto mt-10">{title}</h2>
  );
}

// Reusable Card Component
function DocCard({ title, description, link }) {
  return (
    <Link to={link}>
      <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </Link>
  );
}
