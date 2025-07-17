"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import gigs from "@/data/gigs_dataset.json"
import { useRouter } from "next/navigation";

const statusColors: Record<string, string> = {
  confirmed: "bg-green-100 text-green-800",
  "shortlist shared": "bg-yellow-100 text-yellow-800",
  "final discussions": "bg-blue-100 text-blue-800",
};

export function GigsTable() {
  const router = useRouter();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Gig Title</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Budget</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {gigs.map((gig) => (
            <TableRow key={gig.id}>
              <TableCell className="font-medium">
                {gig.title}
                <div className="text-sm text-muted-foreground mt-1">
                  {gig.brief_text.substring(0, 60)}...
                </div>
              </TableCell>
              <TableCell>Client {gig.client_id.split('_')[1]}</TableCell>
              <TableCell>{gig.category}</TableCell>
              <TableCell>{gig.city}</TableCell>
              <TableCell>
                {typeof gig.budget === 'number' ? `₹${gig.budget.toLocaleString()}` : gig.budget}
              </TableCell>
              <TableCell>
                <Badge className={statusColors[gig.status] || "bg-gray-100 text-gray-800"}>
                  {gig.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm" onClick={() => router.push(`/gigs/${gig.id}`)}>
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}