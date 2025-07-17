import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Briefcase, Users, DollarSign } from "lucide-react";

export function StatsCards() {
  const stats = [
    { title: "Total Revenue", value: "₹1,245,680", icon: DollarSign, change: "+32.1% from last month" },
    { title: "Active Gigs", value: "24", icon: Briefcase, change: "+5 from last month" },
    { title: "New Clients", value: "12", icon: Users, change: "+3 from last month" },
    { title: "Pending Actions", value: "8", icon: Activity, change: "+2 since yesterday" },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}