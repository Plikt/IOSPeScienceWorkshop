
import { Clock, Calendar, Users } from "lucide-react"
import { SectionTitle } from "./ui/section-title"

export function WorkshopOverview() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>Workshop Overview</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-[#1A1F2C]" />
            <span>Half-day Session</span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-[#1A1F2C]" />
            <span>20-40 Participants</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-[#1A1F2C]" />
            <span>IEEE eScience 2025</span>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          This output-oriented workshop explores machine-augmented workflows for reliable FAIR metadata generation and data discovery mechanisms.
        </p>
      </div>
    </section>
  )
}
