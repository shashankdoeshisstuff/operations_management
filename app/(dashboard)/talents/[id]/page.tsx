import { TalentDetail } from "@/components/talents/talent-detail";
import { notFound } from "next/navigation";
import talents from "@/data/talent_profiles.json";

// Define the type for your specific params
type TalentPageParams = {
  id: string;
};

// Define a custom Props interface for ClientDetailPage
interface TalentDetailPageProps {
  params: Promise<TalentPageParams>;
}

// Use PageProps<TalentPageParams> for the component's props
export default async function TalentDetailPage({ params }: TalentDetailPageProps) {
  const { id } = await params;

  const talent = talents.find(t => t.id === id);
  
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