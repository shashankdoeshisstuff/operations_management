import { CommsForm } from "@/components/comms/comms-form";
import { CommsHistory } from "@/components/comms/comms-history";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function CommsHubPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Communications Hub</h1>
          <p className="text-muted-foreground">
            Track all communications with clients and talents
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Entry
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <CommsForm />
        <CommsHistory />
      </div>
    </div>
  );
}