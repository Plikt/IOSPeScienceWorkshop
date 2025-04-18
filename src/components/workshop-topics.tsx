
import { SectionTitle } from "./ui/section-title"

export function WorkshopTopics() {
  const topics = [
    {
      title: "Automated Metadata Extraction",
      description: "Techniques and tools leveraging AI, ML, and NLP to generate rich, community-defined metadata from research outputs."
    },
    {
      title: "Data Discovery Platforms",
      description: "Examination of innovative discovery systems and search strategies enhancing data visibility in large ecosystems."
    },
    {
      title: "Solution Development",
      description: "Share experiences of developers building tooling for metadata processes and data discovery challenges."
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>Key Topics</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topics.map((topic) => (
            <div key={topic.title} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">{topic.title}</h3>
              <p className="text-gray-600">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
