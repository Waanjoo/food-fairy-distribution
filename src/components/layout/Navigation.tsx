import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginClick = () => {
    navigate("/auth");
    setIsOpen(false);
  };

  const handleDonateClick = () => {
    toast({
      title: "Thank you for your interest!",
      description: "Redirecting to donation page...",
    });
    navigate("/dashboard/donor");
    setIsOpen(false);
  };

  const MobileMenu = () => (
    <div className="flex flex-col space-y-4">
      <Link 
        to="/volunteer" 
        className="p-2 hover:bg-accent rounded-md"
        onClick={() => setIsOpen(false)}
      >
        Volunteer
      </Link>
      <Link 
        to="/centers" 
        className="p-2 hover:bg-accent rounded-md"
        onClick={() => setIsOpen(false)}
      >
        Distribution Centers
      </Link>
      <div className="flex flex-col space-y-2">
        <Button variant="outline" onClick={handleLoginClick}>
          Login
        </Button>
        <Button onClick={handleDonateClick}>
          Donate Now
        </Button>
      </div>
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-fairy-purple">
            Food Fairy
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Get Involved</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <Link
                        to="/volunteer"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Volunteer</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Join our community of volunteers
                        </p>
                      </Link>
                      <Link
                        to="/centers"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Distribution Centers</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Find food distribution centers near you
                        </p>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Food Safety Guidelines</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Learn about our food safety protocols
                        </p>
                      </div>
                      <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Impact Reports</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          See how we're making a difference
                        </p>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={handleLoginClick}>
                Login
              </Button>
              <Button onClick={handleDonateClick}>Donate Now</Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <MobileMenu />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;