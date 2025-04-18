
import { Mail } from "lucide-react"
import { SectionTitle } from "./ui/section-title"
import { Button } from "./ui/button"

export function WorkshopContact() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle>Contact Us</SectionTitle>
        <p className="mb-8 text-gray-600">
          For inquiries about the workshop, please reach out to the Workshop Chairs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-[#1A1F2C] hover:bg-[#2A2F3C]">
            <Mail className="w-4 h-4 mr-2" />
            <a href="mailto:contact@scios.tech">contact@scios.tech</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
