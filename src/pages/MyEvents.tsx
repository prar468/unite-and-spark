
import { useEffect } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Plus, Clock } from "lucide-react";

// Mock data
const myEventsData = [
  {
    id: 1,
    title: "Tech Conference 2023",
    description: "A conference for tech enthusiasts",
    location: "San Francisco, CA",
    date: "Nov 15, 2023",
    time: "9:00 AM - 5:00 PM",
    attendees: 120,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    category: "Technology",
    role: "Attendee"
  },
  {
    id: 3,
    title: "Book Club Meeting",
    description: "Discussion on 'The Silent Patient'",
    location: "Virtual",
    date: "Nov 20, 2023",
    time: "6:30 PM - 8:00 PM",
    attendees: 24,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=2673&ixlib=rb-4.0.3",
    category: "Literature",
    role: "Organizer"
  },
];

const MyEvents = () => {
  // Add page title
  useEffect(() => {
    document.title = "My Events - Gather";
  }, []);

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tight">My Events</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Find Events
          </Button>
        </div>

        {myEventsData.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-xl font-medium">You haven't joined any events yet</h2>
            <p className="text-muted-foreground mt-1 mb-4">
              Join events to connect with people and participate in activities
            </p>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Explore Events
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {myEventsData.map((event) => (
              <Card key={event.id} className="overflow-hidden card-hover">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-black/70 hover:bg-black/80 text-white">
                      {event.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-4 pb-0">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <Badge variant="outline">{event.role}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2 mt-2">
                    {event.description}
                  </p>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex flex-col space-y-2 text-sm">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full">View Event</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default MyEvents;
