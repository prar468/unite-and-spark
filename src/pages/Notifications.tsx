
import { useEffect, useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Users, Bell, Check, Clock } from "lucide-react";

// Mock data
const notificationsData = [
  {
    id: 1,
    title: "New event in your area",
    message: "Tech Conference 2023 is happening near you",
    time: "10 minutes ago",
    type: "event",
    read: false,
  },
  {
    id: 2,
    title: "Group invitation",
    message: "John Doe invited you to join Digital Nomads group",
    time: "1 hour ago",
    type: "group",
    read: false,
  },
  {
    id: 3,
    title: "Event reminder",
    message: "Book Club Meeting starts in 2 hours",
    time: "2 hours ago",
    type: "event",
    read: true,
  },
  {
    id: 4,
    title: "New message",
    message: "You have a new message from Jane Smith",
    time: "Yesterday",
    type: "message",
    read: true,
  },
  {
    id: 5,
    title: "Group update",
    message: "Fitness Enthusiasts posted a new update",
    time: "2 days ago",
    type: "group",
    read: true,
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  
  // Add page title
  useEffect(() => {
    document.title = "Notifications - Gather";
  }, []);

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center">
              Notifications
              {unreadCount > 0 && (
                <Badge className="ml-3">{unreadCount} new</Badge>
              )}
            </h1>
            <p className="text-muted-foreground mt-1">
              Stay updated on events, groups, and messages
            </p>
          </div>
          {unreadCount > 0 && (
            <Button variant="outline" onClick={markAllAsRead}>
              <Check className="mr-2 h-4 w-4" />
              Mark all as read
            </Button>
          )}
        </div>

        {notifications.length === 0 ? (
          <div className="text-center py-12">
            <Bell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-xl font-medium">No notifications</h2>
            <p className="text-muted-foreground mt-1">
              We'll notify you when there's activity related to your events and groups
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {notifications.map((notification) => (
              <Card 
                key={notification.id} 
                className={`overflow-hidden ${!notification.read ? 'border-primary bg-primary/5' : ''}`}
              >
                <CardContent className="p-4 flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {notification.type === 'event' && <Calendar className="h-8 w-8 text-muted-foreground" />}
                    {notification.type === 'group' && <Users className="h-8 w-8 text-muted-foreground" />}
                    {notification.type === 'message' && <Bell className="h-8 w-8 text-muted-foreground" />}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{notification.title}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          {notification.time}
                        </div>
                        {!notification.read && (
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="h-7 px-2"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <Check className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {notification.message}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Notifications;
