import { ClientDetail } from "@/components/clients/client-detail";
import { notFound } from "next/navigation";

// Define TypeScript interface for client data
interface Client {
  id: string;
  name: string;
  company_name: string;
  industry: string;
  // Add other required properties
}

// Use relative path to JSON file
import clientsData from "@/data/clients_database.json";

interface ClientDetailPageProps {
  params: { id: string };
}

export default function ClientDetailPage({ params }: ClientDetailPageProps) {
  // Cast JSON data to Client array
  const clients: Client[] = clientsData as Client[];
  const client = clients.find((c) => c.id === params.id);

  if (!client) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{client.name}</h1>
        <p className="text-muted-foreground">
          {client.company_name} • {client.industry}
        </p>
      </div>

      <ClientDetail client={client} />
    </div>
  );
}