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
import { Button } from "@/components/ui/button";
import { Download, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function CommsHistory() {
  const communications = [
    {
      id: "1",
      type: "call",
      content: "Initial consultation about new collection photoshoot",
      date: "2025-07-15T14:30:00Z",
      linkedTo: { type: "client", id: "cli_001", name: "The Loom Art" },
      createdBy: "Priya Sharma",
      metadata: {
        duration: 25,
        fileUrl: "/recordings/call-20250715.mp3",
      },
    },
    {
      id: "2",
      type: "email",
      content: "Sent contract for signature",
      date: "2025-07-14T10:15:00Z",
      linkedTo: { type: "client", id: "cli_001", name: "The Loom Art" },
      createdBy: "Priya Sharma",
    },
    {
      id: "3",
      type: "note",
      content: "Client prefers natural lighting and handloom texture focus",
      date: "2025-07-13T16:45:00Z",
      linkedTo: { type: "client", id: "cli_001", name: "The Loom Art" },
      createdBy: "Priya Sharma",
    },
    {
      id: "4",
      type: "whatsapp",
      content: "Confirmed talent availability for August 20-25",
      date: "2025-07-12T11:20:00Z",
      linkedTo: { type: "talent", id: "tal_001", name: "Tyler Baker" },
      createdBy: "Rahul Verma",
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
    <Card>
      <CardHeader>
        <CardTitle>Recent Communications</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Content</TableHead>
              <TableHead>Linked To</TableHead>
              <TableHead>By</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {communications.map((comm) => {
              const { label, variant } = getTypeBadge(comm.type);
              return (
                <TableRow key={comm.id}>
                  <TableCell>
                    <Badge variant={variant}>{label}</Badge>
                  </TableCell>
                  <TableCell className="font-medium max-w-[200px] truncate">
                    {comm.content}
                  </TableCell>
                  <TableCell>
                    <span className="text-primary">{comm.linkedTo.name}</span>
                  </TableCell>
                  <TableCell>{comm.createdBy}</TableCell>
                  <TableCell className="text-right">
                    {format(new Date(comm.date), "MMM d, h:mm a")}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      {comm.metadata?.fileUrl && (
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <div className="mt-4 text-center">
          <Button variant="link">View all communications</Button>
        </div>
      </CardContent>
    </Card>
  );
}