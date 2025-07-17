import { GigDetail } from "@/components/gigs/gig-detail";
import { notFound } from "next/navigation";
import gigs from "@/data/gigs_dataset.json";

// Define the type for your specific params
type GigPageParams = {
  id: string;
};

// Define a custom Props interface for ClientDetailPage
interface GigDetailPageProps {
  params: Promise<GigPageParams>;
}

// Use PageProps<GigPageParams> for the component's props
export default async function GigDetailPage({ params }: GigDetailPageProps) {
  const { id } = await params;

  const gig = gigs.find(g => g.id === id);
  
  if (!gig) {
    return notFound();
  }
  
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{gig.title}</h1>
        <p className="text-muted-foreground">
          {gig.category} • {gig.city}
        </p>
      </div>
      
      <GigDetail gig={gig} />
    </div>
  );
}