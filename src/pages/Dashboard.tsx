
import { useEffect } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Plus, 
  ChevronRight,
  Clock
} from "lucide-react";

// Mock data
const upcomingEvents = [
  {
    id: 1,
    title: "Tech Conference 2023",
    description: "A conference for tech enthusiasts",
    location: "San Francisco, CA",
    date: "Nov 15",
    time: "9:00 AM - 5:00 PM",
    attendees: 120,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    category: "Technology"
  },
  {
    id: 2,
    title: "Yoga in the Park",
    description: "Join us for a relaxing yoga session in the park",
    location: "Central Park, NY",
    date: "Nov 18",
    time: "8:00 AM - 9:30 AM",
    attendees: 45,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2560&ixlib=rb-4.0.3",
    category: "Health"
  },
  {
    id: 3,
    title: "Book Club Meeting",
    description: "Discussion on 'The Silent Patient'",
    location: "Virtual",
    date: "Nov 20",
    time: "6:30 PM - 8:00 PM",
    attendees: 24,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=2673&ixlib=rb-4.0.3",
    category: "Literature"
  },
];

const popularGroups = [
  {
    id: 1,
    name: "Digital Nomads",
    members: 1450,
    category: "Technology",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    name: "Fitness Enthusiasts",
    members: 980,
    category: "Health",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    name: "Creative Writers",
    members: 670,
    category: "Arts",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3"
  },
];

const Dashboard = () => {
  // Add page title
  useEffect(() => {
    document.title = "Dashboard - Gather";
  }, []);

  return (
    <AppLayout>
      <section className="mb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, Jane</h1>
            <p className="text-muted-foreground mt-1">
              Here's what's happening around you
            </p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <Button>
              <Calendar className="mr-2 h-4 w-4" />
              Create Event
            </Button>
            <Button variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Create Group
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
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
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {event.description}
                </CardDescription>
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
                <Button className="w-full">Join Event</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-center mt-6">
          <Button variant="ghost" className="flex items-center">
            View more events <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Popular Groups</h2>
          <Button variant="ghost" className="flex items-center">
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popularGroups.map((group) => (
            <Card key={group.id} className="overflow-hidden card-hover">
              <div className="p-4 flex items-center space-x-4">
                <Avatar className="h-16 w-16 rounded">
                  <AvatarImage src={group.image} alt={group.name} />
                  <AvatarFallback>{group.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-medium">{group.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {group.members} members • {group.category}
                  </p>
                </div>
              </div>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <Button variant="outline" size="sm">
                  View Group
                </Button>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-1" /> Join
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Your Activity</h2>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              See your recent interactions with events and groups
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 pb-4 border-b">
                <div className="flex-shrink-0 p-1">
                  <Calendar className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">You joined "Tech Conference 2023"</p>
                  <p className="text-sm text-muted-foreground">2 days ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 pb-4 border-b">
                <div className="flex-shrink-0 p-1">
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">You joined "Digital Nomads" group</p>
                  <p className="text-sm text-muted-foreground">5 days ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-1">
                  <Calendar className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">You created "Book Club Meeting" event</p>
                  <p className="text-sm text-muted-foreground">1 week ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </AppLayout>
  );
};

export default Dashboard;
