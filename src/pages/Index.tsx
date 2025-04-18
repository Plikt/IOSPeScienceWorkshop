
import { WorkshopHero } from "@/components/workshop-hero"
import { WorkshopOverview } from "@/components/workshop-overview"
import { WorkshopTopics } from "@/components/workshop-topics"
import { WorkshopSpeakers } from "@/components/workshop-speakers"
import { WorkshopContact } from "@/components/workshop-contact"

const Index = () => {
  return (
    <div className="min-h-screen">
      <WorkshopHero />
      <WorkshopOverview />
      <WorkshopTopics />
      <WorkshopSpeakers />
      <WorkshopContact />
    </div>
  );
};

export default Index;
