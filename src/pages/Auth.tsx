
import { useEffect } from "react";
import AuthForm from "@/components/auth/AuthForm";

const Auth = () => {
  // Add page title
  useEffect(() => {
    document.title = "Sign In - Gather";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="hidden lg:flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Gather</h1>
            <p className="text-lg text-muted-foreground">
              Create and join events, discover groups, and connect with people who share your interests.
            </p>
          </div>
          
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm rounded-lg"></div>
            <div className="absolute inset-0 grid grid-cols-2 gap-4 p-6">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="glass animate-float rounded-lg p-4 shadow-subtle"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="h-24 w-full rounded bg-primary/10 mb-3"></div>
                  <div className="h-4 w-3/4 rounded bg-primary/10 mb-2"></div>
                  <div className="h-3 w-1/2 rounded bg-primary/10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default Auth;
