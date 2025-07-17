import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

export function RecentActivities() {
  const activities = [
    {
      id: "1",
      type: "call",
      content: "Follow-up call with The Loom Art about upcoming photoshoot",
      date: "2025-07-17T10:30:00Z",
      linkedTo: { type: "client", id: "cli_001", name: "The Loom Art" },
      createdBy: "Priya Sharma",
    },
    {
      id: "2",
      type: "note",
      content: "Added new talent Rachel Powell to potential matches for Zepto project",
      date: "2025-07-16T14:20:00Z",
      linkedTo: { type: "talent", id: "tal_002", name: "Rachel Powell" },
      createdBy: "Rahul Verma",
    },
    {
      id: "3",
      type: "email",
      content: "Sent contract to Subko Coffee Roasters for signature",
      date: "2025-07-15T09:15:00Z",
      linkedTo: { type: "client", id: "cli_005", name: "Subko Coffee Roasters" },
      createdBy: "Amit Singh",
    },
    {
      id: "4",
      type: "whatsapp",
      content: "Confirmed availability with talent Tyler Baker for Mumbai gig",
      date: "2025-07-14T16:45:00Z",
      linkedTo: { type: "talent", id: "tal_001", name: "Tyler Baker" },
      createdBy: "Chloe Davis",
    },
  ];

  const getTypeBadge = (type: string) => {
    const typeMap: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
      call: { label: "Call", variant: "secondary" },
      note: { label: "Note", variant: "default" },
      email: { label: "Email", variant: "outline" },
      whatsapp: { label: "WhatsApp", variant: "secondary" },
      meeting: { label: "Meeting", variant: "destructive" },
    };
    
    return typeMap[type] || { label: type, variant: "outline" };
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Activity</TableHead>
          <TableHead>Linked To</TableHead>
          <TableHead>By</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {activities.map((activity) => {
          const { label, variant } = getTypeBadge(activity.type);
          return (
            <TableRow key={activity.id}>
              <TableCell>
                <Badge variant={variant}>{label}</Badge>
              </TableCell>
              <TableCell className="font-medium">{activity.content}</TableCell>
              <TableCell>
                <span className="text-primary">{activity.linkedTo.name}</span>
              </TableCell>
              <TableCell>{activity.createdBy}</TableCell>
              <TableCell className="text-right">
                {format(new Date(activity.date), "MMM d, yyyy h:mm a")}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}