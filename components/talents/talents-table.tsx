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
import talents from "@/data/talent_profiles.json"
import { useRouter } from "next/navigation";

export function TalentsTable() {
  const router = useRouter();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Talent</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Skills</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {talents.map((talent) => (
            <TableRow key={talent.id}>
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {talent.name.charAt(0)}
                  </div>
                  <div>
                    <div>{talent.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {talent.categories.join(", ")}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{talent.city}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {talent.skills.slice(0, 2).map((skill, index) => (
                    <Badge key={index} variant="outline">{skill}</Badge>
                  ))}
                  {talent.skills.length > 2 && (
                    <Badge variant="outline">+{talent.skills.length - 2}</Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>
                {talent.experience_years} years
              </TableCell>
              <TableCell>
                <Badge variant="secondary">Available</Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm" onClick={() => router.push(`/talents/${talent.id}`)}>
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