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
import clients from "@/data/clients_database.json"
import { useRouter } from "next/navigation";

export function ClientsTable() {
  const router = useRouter();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client</TableHead>
            <TableHead>Industry</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Lead Owner</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {client.name.charAt(0)}
                  </div>
                  <div>
                    <div>{client.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {client.company_name}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                {client.industry}
                <div className="text-sm text-muted-foreground">
                  {client.sub_industry}
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline">{client.type}</Badge>
              </TableCell>
              <TableCell>
                <div>{client.contact_person}</div>
                <div className="text-sm text-muted-foreground">
                  {client.designation}
                </div>
              </TableCell>
              <TableCell>{client.lead_owner}</TableCell>
              <TableCell>
                <Badge variant={client.is_repeat_client ? "default" : "secondary"}>
                  {client.is_repeat_client ? "Repeat Client" : "New Client"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm" onClick={() => router.push(`/clients/${client.id}`)}>
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