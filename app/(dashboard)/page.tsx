import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { RecentActivities } from "@/components/dashboard/recent-activities";
import { UpcomingGigs } from "@/components/dashboard/upcoming-gigs";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your creative operations
        </p>
      </div>
      
      <StatsCards />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentActivities />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Gigs</CardTitle>
          </CardHeader>
          <CardContent>
            <UpcomingGigs />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}