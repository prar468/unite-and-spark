
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MessageSquare, 
  Calendar, 
  Users, 
  ChevronDown,
  Bell,
  Menu,
  X,
  LogOut,
  Settings,
  Moon,
  Sun,
  User,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mr-2"
          >
            <Menu size={20} />
          </Button>
        )}
        
        <div className={`${isSearchExpanded ? "flex-1" : "w-auto"} transition-all duration-300 ease-in-out`}>
          <div className="relative flex items-center">
            {isSearchExpanded ? (
              <>
                <Input 
                  type="search" 
                  placeholder="Search events, groups, or users..." 
                  className="pl-10"
                  autoFocus
                  onBlur={() => isMobile && setIsSearchExpanded(false)}
                />
                <Search size={18} className="absolute left-3 text-muted-foreground" />
                {isMobile && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-2"
                    onClick={() => setIsSearchExpanded(false)}
                  >
                    <X size={18} />
                  </Button>
                )}
              </>
            ) : (
              <Button
                variant="ghost"
                size={isMobile ? "icon" : "default"}
                onClick={() => setIsSearchExpanded(true)}
                className="px-2"
              >
                <Search size={18} className="mr-2" />
                {!isMobile && <span>Search</span>}
              </Button>
            )}
          </div>
        </div>
        
        {(!isSearchExpanded || !isMobile) && (
          <nav className="flex items-center space-x-1">
            <Link to="/events">
              <Button variant="ghost" size={isMobile ? "icon" : "default"}>
                <Calendar size={18} className={!isMobile ? "mr-2" : ""} />
                {!isMobile && <span>Events</span>}
              </Button>
            </Link>
            <Link to="/groups">
              <Button variant="ghost" size={isMobile ? "icon" : "default"}>
                <Users size={18} className={!isMobile ? "mr-2" : ""} />
                {!isMobile && <span>Groups</span>}
              </Button>
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size={isMobile ? "icon" : "default"}>
                  <MessageSquare size={18} className={!isMobile ? "mr-2" : ""} />
                  {!isMobile && <span>Messages</span>}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Messages</DialogTitle>
                </DialogHeader>
                <div className="py-6 text-center text-muted-foreground">
                  <MessageSquare className="mx-auto h-12 w-12 opacity-50 mb-4" />
                  <p>No messages yet</p>
                  <Button className="mt-4">Start a conversation</Button>
                </div>
              </DialogContent>
            </Dialog>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell size={18} />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                    5
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-[300px] overflow-y-auto">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <DropdownMenuItem key={i} className="flex flex-col items-start py-3">
                      <p className="text-sm font-medium">New event was created</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        John Doe created "Tech Conference 2023"
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">10 minutes ago</p>
                    </DropdownMenuItem>
                  ))}
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="cursor-pointer justify-center">
                  <Link to="/notifications">View all notifications</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Toggle theme</span>
                  <Sun size={18} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon size={18} className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>System</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu size={18} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        )}
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-background shadow-xl animate-slide-in">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-xl font-semibold">Menu</span>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                <X size={20} />
              </Button>
            </div>
            <nav className="p-4">
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/profile" 
                    className="flex items-center py-2 px-3 rounded-md hover:bg-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User size={18} className="mr-3" />
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/my-groups"
                    className="flex items-center py-2 px-3 rounded-md hover:bg-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Users size={18} className="mr-3" />
                    <span>My Groups</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/my-events"
                    className="flex items-center py-2 px-3 rounded-md hover:bg-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Calendar size={18} className="mr-3" />
                    <span>My Events</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/notifications"
                    className="flex items-center py-2 px-3 rounded-md hover:bg-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Bell size={18} className="mr-3" />
                    <span>Notifications</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
