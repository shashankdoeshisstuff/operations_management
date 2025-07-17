import React from "react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { GanttChart, Calendar, Camera } from "lucide-react";
import Link from "next/link";

export function UpcomingGigs() {
  const gigs = [
    {
      id: "gig_004",
      title: "Direction project for Guerrero, Moore and Wells",
      client: "Guerrero, Moore and Wells",
      category: "Styling",
      city: "Mumbai",
      start_date: "2025-08-25",
      status: "final discussions",
      budget: 25113,
    },
    {
      id: "gig_002",
      title: "Branding project for Caldwell-Gallagher",
      client: "Caldwell-Gallagher",
      category: "Content Writing",
      city: "Delhi",
      start_date: "2025-08-15",
      status: "confirmed",
      budget: 109934,
    },
    {
      id: "gig_003",
      title: "Branding project for Phillips, Schroeder and Grimes",
      client: "Phillips, Schroeder and Grimes",
      category: "Direction",
      city: "Hyderabad",
      start_date: "2025-07-27",
      status: "shortlist shared",
      budget: "To be discussed",
    },
  ];

  const getCategoryIcon = (category: string) => {
    const icons = {
      Photography: <Camera className="h-4 w-4 mr-2" />,
      "Content Writing": <span className="mr-2">✍️</span>,
      Direction: <GanttChart className="h-4 w-4 mr-2" />,
      Styling: <span className="mr-2">👗</span>,
    };
    
    // Return icon or default calendar icon
    return icons[category as keyof typeof icons] || <Calendar className="h-4 w-4 mr-2" />;
  };

  return (
    <div className="space-y-4">
      {gigs.map((gig) => (
        <div key={gig.id} className="flex items-center">
          <div className="ml-4 space-y-1">
            <div className="flex items-center">
              {getCategoryIcon(gig.category)}
              <p className="text-sm font-medium leading-none">{gig.title}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              {gig.client} • {gig.city}
            </p>
          </div>
          <div className="ml-auto flex flex-col items-end">
            <Badge variant="secondary" className="mb-1">
              {gig.status}
            </Badge>
            <p className="text-sm text-muted-foreground">
              {format(new Date(gig.start_date), "MMM d, yyyy")}
            </p>
          </div>
        </div>
      ))}
      <div className="text-center pt-4">
        <Link href="/gigs">
          <button className="text-sm text-primary hover:underline">
            View all upcoming gigs
          </button>
        </Link>
      </div>
    </div>
  );
}