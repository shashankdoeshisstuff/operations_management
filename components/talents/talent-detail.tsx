import { Talent } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe } from "lucide-react";

export function TalentDetail({ talent }: { talent: Talent }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p>{talent?.city}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Hometown</p>
              <p>{talent?.hometown}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Experience</p>
              <p>{talent?.experience_years} years</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Budget Range</p>
              <p>{talent?.budget_range}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Categories</p>
              <p>{talent?.categories?.join(", ")}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Languages</p>
              <p>{talent?.languages?.join(", ")}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Skills & Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Skills</p>
                <div className="flex flex-wrap gap-2">
                  {talent?.skills?.map((skill, index) => (
                    <Badge key={index} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">Style Tags</p>
                <div className="flex flex-wrap gap-2">
                  {talent?.style_tags?.map((tag, index) => (
                    <Badge key={index}>{tag}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">Software Skills</p>
               <div className="flex flex-wrap gap-2">
                  {Object.entries(talent?.software_skills ?? {})?.map(([skill, level], index) => (
                    <Badge key={index} variant="outline">
                      {skill}: {level}/10
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {talent?.portfolio?.map((project, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-medium">{project.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project?.tags?.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project?.keywords?.map((kw, idx) => (
                      <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Availability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {talent?.availability_calendar?.map((avail, index) => (
                <div key={index} className="border rounded-lg p-3">
                  <div className="font-medium">{avail.city ?? "Unknown City"}</div>
                  <div className="text-sm text-muted-foreground">
                    {avail.from && avail.to
                      ? `${new Date(avail.from).toLocaleDateString()} - ${new Date(avail.to).toLocaleDateString()}`
                      : "Date not available"}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
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
              <span className="text-sm">Portfolio Links</span>
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
                Request Availability
              </Button>
              <Button className="w-full">Match to a Gig</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}