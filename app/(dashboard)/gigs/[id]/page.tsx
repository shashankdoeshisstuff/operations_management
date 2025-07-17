import { GigDetail } from "@/components/gigs/gig-detail";
import { notFound } from "next/navigation";
import gigs from "@/data/gigs_dataset.json";

export default function GigDetailPage({ params }: { params: { id: string } }) {
  const gig = gigs.find(g => g.id === params.id);
  
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