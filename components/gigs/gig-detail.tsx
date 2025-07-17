import { Gig } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Users } from "lucide-react";

export function GigDetail({ gig }: { gig: Gig }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Gig Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Brief</p>
                <p>{gig.brief_text}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Category</p>
                  <p>{gig.category}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p>{gig.city}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Start Date</p>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <p>{new Date(gig.start_date).toLocaleDateString()}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Urgency</p>
                  <p><Badge variant="secondary">{gig.urgency}</Badge></p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Budget</p>
                  <p>{typeof gig.budget === 'number' ? `₹${gig.budget.toLocaleString()}` : gig.budget}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p><Badge>{gig.status}</Badge></p>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Style Tags</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {gig.style_tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Documents</CardTitle>
          </CardHeader>
          <CardContent>
            {gig.has_docs ? (
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                <span>{gig.docs_type} attached</span>
              </div>
            ) : (
              <p>No documents attached</p>
            )}
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Client Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="mr-3 h-10 w-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                C
              </div>
              <div>
                <div>Client {gig.client_id.split('_')[1]}</div>
                <div className="text-sm text-muted-foreground">
                  Previous projects: 3
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Talent Matches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="mr-3 h-8 w-8 flex items-center justify-center rounded-full bg-muted">
                  T
                </div>
                <div>
                  <div>Tyler Baker</div>
                  <div className="text-sm text-muted-foreground">Score: 8.9</div>
                </div>
                <Badge className="ml-auto">Selected</Badge>
              </div>
              <div className="flex items-center">
                <div className="mr-3 h-8 w-8 flex items-center justify-center rounded-full bg-muted">
                  R
                </div>
                <div>
                  <div>Rachel Powell</div>
                  <div className="text-sm text-muted-foreground">Score: 7.0</div>
                </div>
                <Badge variant="outline" className="ml-auto">Backup</Badge>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4">
              <Users className="h-4 w-4 mr-2" /> View All Matches
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" className="w-full">
                Edit Gig Details
              </Button>
              <Button className="w-full">Share Talent Shortlist</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}