import { TalentDetail } from "@/components/talents/talent-detail";
import { notFound } from "next/navigation";
import talents from "@/data/talent_profiles.json";

export default function TalentDetailPage({ params }: { params: { id: string } }) {
  const talent = talents.find(t => t.id === params.id);
  
  if (!talent) {
    return notFound();
  }
  
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{talent.name}</h1>
        <p className="text-muted-foreground">
          {talent.categories.join(" • ")} • {talent.city}
        </p>
      </div>
      
      <TalentDetail talent={talent} />
    </div>
  );
}