
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Users, 
  Calendar, 
  Bell, 
  Menu, 
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

type SidebarNavItem = {
  title: string;
  path: string;
  icon: React.ElementType;
  badge?: number;
};

const navItems: SidebarNavItem[] = [
  {
    title: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    title: "My Groups",
    path: "/my-groups",
    icon: Users,
    badge: 2
  },
  {
    title: "My Events",
    path: "/my-events",
    icon: Calendar,
    badge: 3
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: Bell,
    badge: 5
  },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Collapse sidebar on mobile by default
  useEffect(() => {
    if (isMobile) {
      setExpanded(false);
    }
  }, [isMobile]);

  return (
    <aside
      className={cn(
        "h-screen sticky top-0 z-30 transition-all duration-300 ease-in-out flex flex-col border-r bg-sidebar text-sidebar-foreground",
        expanded ? "w-64" : "w-[70px]"
      )}
    >
      <div className="p-4 flex items-center justify-between border-b">
        {expanded ? (
          <Link to="/" className="text-xl font-semibold truncate">Gather</Link>
        ) : (
          <Link to="/" className="text-xl font-semibold w-full text-center">G</Link>
        )}
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setExpanded(!expanded)}
          className="ml-auto"
        >
          {expanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </Button>
      </div>
      
      <div className="flex flex-col items-center p-4 border-b">
        <Avatar className={cn("transition-all", expanded ? "h-20 w-20" : "h-10 w-10")}>
          <AvatarImage src="" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        {expanded && (
          <div className="mt-4 text-center">
            <h3 className="font-medium text-sm">Jane Doe</h3>
            <p className="text-xs text-muted-foreground mt-1">jane@example.com</p>
          </div>
        )}
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      to={item.path}
                      className={cn(
                        "flex items-center py-2 px-3 rounded-md text-sm transition-colors relative group",
                        location.pathname === item.path
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <item.icon size={20} className={cn("flex-shrink-0", expanded && "mr-3")} />
                      {expanded && <span className="truncate">{item.title}</span>}
                      {item.badge && (
                        <Badge 
                          className={cn(
                            "ml-auto", 
                            location.pathname === item.path 
                              ? "bg-primary-foreground text-primary" 
                              : ""
                          )}
                          variant={location.pathname === item.path ? "outline" : "default"}
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </TooltipTrigger>
                  {!expanded && (
                    <TooltipContent side="right">
                      {item.title}
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t">
        {expanded ? (
          <p className="text-xs text-center text-muted-foreground">
            © 2023 Gather
          </p>
        ) : (
          <p className="text-xs text-center text-muted-foreground">©</p>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
