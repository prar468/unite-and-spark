
import { useEffect } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Plus } from "lucide-react";

// Mock data
const myGroupsData = [
  {
    id: 1,
    name: "Digital Nomads",
    description: "A community for remote workers and digital nomads",
    members: 1450,
    category: "Technology",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    role: "Member",
    joined: "January 2023"
  },
  {
    id: 2,
    name: "Fitness Enthusiasts",
    description: "For people who love fitness and healthy living",
    members: 980,
    category: "Health",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    role: "Admin",
    joined: "March 2023"
  },
];

const MyGroups = () => {
  // Add page title
  useEffect(() => {
    document.title = "My Groups - Gather";
  }, []);

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tight">My Groups</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Find Groups
          </Button>
        </div>

        {myGroupsData.length === 0 ? (
          <div className="text-center py-12">
            <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-xl font-medium">You haven't joined any groups yet</h2>
            <p className="text-muted-foreground mt-1 mb-4">
              Join groups to connect with people who share your interests
            </p>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Explore Groups
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {myGroupsData.map((group) => (
              <Card key={group.id} className="overflow-hidden card-hover">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={group.image}
                    alt={group.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div>
                      <Badge className="mb-2">{group.category}</Badge>
                      <h3 className="text-xl font-semibold text-white">{group.name}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {group.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-muted-foreground mr-1" />
                      <span className="text-sm">{group.members} members</span>
                    </div>
                    <Badge variant="outline">{group.role}</Badge>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <p className="text-sm text-muted-foreground">
                    Joined {group.joined}
                  </p>
                  <Button size="sm">View Group</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default MyGroups;
