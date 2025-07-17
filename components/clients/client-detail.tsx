import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone, Globe, MessageSquare, FileText } from "lucide-react";
import { Client } from "@/lib/types";

export function ClientDetail({ client }: { client: Client }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Client Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Type</p>
              <p>{client.type}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Tier</p>
              <p><Badge variant="secondary">{client.client_tier}</Badge></p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Industry</p>
              <p>{client.industry}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Sub-Industry</p>
              <p>{client.sub_industry}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Headquarters</p>
              <p>{client.headquarters_city}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Operating Cities</p>
              <p>{client?.operating_cities?.join(", ")}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {client?.contact_person?.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{client.contact_person}</p>
                  <p className="text-sm text-muted-foreground">{client.designation}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Email</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Phone</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                  <a href={client.website!} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                    Website
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Project History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {client?.project_history?.map((project, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></div>
                  <p>{project}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Communication Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Preferred Tools</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {client?.communication?.preferred_tools?.map(tool => (
                  <Badge key={tool} variant="outline">{tool}</Badge>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground">Tone</p>
              <p>{client?.communication?.tone}</p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground">Work Hours</p>
              <p>{client?.communication?.preferred_work_hours}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Important Dates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">First Interaction</p>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <p>{client?.important_dates?.first_interaction}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Last Booking</p>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <p>{client?.important_dates?.last_booking_date}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" className="w-full">
                <MessageSquare className="h-4 w-4 mr-2" /> Send Message
              </Button>
              <Button variant="outline" className="w-full">
                <FileText className="h-4 w-4 mr-2" /> View Documents
              </Button>
              <Button className="w-full">Create New Gig</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}