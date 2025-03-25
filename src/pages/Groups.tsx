
import { useEffect, useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Search, 
  Filter, 
  Plus,
  Users,
  Image as ImageIcon
} from "lucide-react";
import { toast } from "sonner";

// Mock data
const groupsData = [
  {
    id: 1,
    name: "Digital Nomads",
    description: "A community for remote workers and digital nomads",
    members: 1450,
    category: "Technology",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    location: "Global"
  },
  {
    id: 2,
    name: "Fitness Enthusiasts",
    description: "For people who love fitness and healthy living",
    members: 980,
    category: "Health",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    location: "New York, NY"
  },
  {
    id: 3,
    name: "Creative Writers",
    description: "A group for writers to share their work and get feedback",
    members: 670,
    category: "Arts",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    location: "Chicago, IL"
  },
  {
    id: 4,
    name: "Startup Founders",
    description: "Connect with other entrepreneurs building startups",
    members: 820,
    category: "Business",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    location: "San Francisco, CA"
  },
  {
    id: 5,
    name: "Photography Club",
    description: "For photography enthusiasts to share tips and photos",
    members: 560,
    category: "Arts",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    location: "Los Angeles, CA"
  },
  {
    id: 6,
    name: "Book Lovers",
    description: "Discuss and recommend books with fellow readers",
    members: 740,
    category: "Literature",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    location: "Boston, MA"
  },
];

const categories = [
  "All", "Technology", "Health", "Arts", "Business", "Literature", "Education", "Social", "Food", "Sports"
];

const Groups = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [newGroup, setNewGroup] = useState({
    name: "",
    description: "",
    category: "",
    location: ""
  });

  // Add page title
  useEffect(() => {
    document.title = "Groups - Gather";
  }, []);

  const handleCreateGroup = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Group created successfully!");
      // Reset form
      setNewGroup({
        name: "",
        description: "",
        category: "",
        location: ""
      });
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewGroup({ ...newGroup, [name]: value });
  };

  const filteredGroups = groupsData.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          group.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          group.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || group.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Groups</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Group
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Group</DialogTitle>
                <DialogDescription>
                  Fill in the details to create your group. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Group Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={newGroup.name}
                    onChange={handleInputChange}
                    placeholder="Digital Nomads"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={newGroup.description}
                    onChange={handleInputChange}
                    placeholder="Enter a description for your group"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    name="category"
                    value={newGroup.category}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a category</option>
                    {categories.filter(cat => cat !== "All").map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    value={newGroup.location}
                    onChange={handleInputChange}
                    placeholder="San Francisco, CA"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Group Image</Label>
                  <div className="border border-dashed rounded-md p-6 flex flex-col items-center justify-center text-center">
                    <ImageIcon className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">Drag and drop an image here</p>
                    <p className="text-xs text-muted-foreground">or</p>
                    <Button size="sm" variant="outline" className="mt-2">
                      Browse Files
                    </Button>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleCreateGroup} disabled={isLoading}>
                  {isLoading ? "Creating..." : "Create Group"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search groups..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex-1 flex flex-col md:flex-row gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
            <Button variant="outline" size="icon" className="md:ml-auto">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredGroups.map((group) => (
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
                  <span className="text-sm text-muted-foreground">{group.location}</span>
                </div>
              </CardContent>
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

        {filteredGroups.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-xl font-medium">No groups found</h2>
            <p className="text-muted-foreground mt-1">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Groups;
