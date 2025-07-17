import { TalentsTable } from "@/components/talents/talents-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

export default function TalentsPage() {
  return (
    <div className="flex flex-col gap-6 overflow-scroll">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Talents</h1>
          <p className="text-muted-foreground">
            Manage all creative talents and their information
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search talents..."
              className="w-full pl-8"
            />
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Talent
          </Button>
        </div>
      </div>
      
      <TalentsTable />
    </div>
  );
}