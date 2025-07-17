import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account and app preferences
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
          <CardDescription>
            Update your account information and settings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Priya Sharma" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="priya@breadbutter.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" defaultValue="Client Manager" disabled />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>
            Configure how you want to use the app
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">
                  Receive email notifications for important updates
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Enabled</span>
                <div className="relative inline-block w-10 h-6 bg-gray-200 rounded-full">
                  <input type="checkbox" className="sr-only" defaultChecked />
                  <div className="absolute w-6 h-6 transition-transform duration-200 ease-in-out transform translate-x-4 bg-white rounded-full shadow-md"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-muted-foreground">
                  Switch between light and dark themes
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Light</span>
                <div className="relative inline-block w-10 h-6 bg-gray-200 rounded-full">
                  <input type="checkbox" className="sr-only" />
                  <div className="absolute w-6 h-6 transition-transform duration-200 ease-in-out transform bg-white rounded-full shadow-md"></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Default View</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Dashboard" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dashboard">Dashboard</SelectItem>
                  <SelectItem value="clients">Clients</SelectItem>
                  <SelectItem value="talents">Talents</SelectItem>
                  <SelectItem value="gigs">Gigs</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Integrations</CardTitle>
          <CardDescription>
            Connect with other services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Notion Integration</p>
                <p className="text-sm text-muted-foreground">
                  Sync clients and gigs to Notion
                </p>
              </div>
              <Button variant="outline">Connect</Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Slack Integration</p>
                <p className="text-sm text-muted-foreground">
                  Receive notifications in Slack
                </p>
              </div>
              <Button variant="outline">Connect</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}