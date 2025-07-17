import { ClientDetail } from "@/components/clients/client-detail";
import { notFound } from "next/navigation";
import clients from '@/data/clients_database.json'

// Define your params type separately
type ClientPageParams = {
  id: string;
}

// Define a custom Props interface for ClientDetailPage
interface ClientDetailPageProps {
  params: Promise<ClientPageParams>;
}

export default async function ClientDetailPage({ params }: ClientDetailPageProps) {
  const { id } = await params;

  const client = clients.find(c => c.id === id);

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