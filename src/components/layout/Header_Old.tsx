import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "Features", path: "/features" },
    { label: "Pricing", path: "/pricing" },
    { 
      label: "Resources", 
      children: [
        { label: "Blog", path: "/blog" },
        { label: "Case Studies", path: "/case-study" },
        { label: "Integrations", path: "/integration" },
        { label: "Changelog", path: "/changelog" }
      ]
    },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">S</span>
          </div>
          <span className="font-semibold text-xl">SafariDesk</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.children ? (
                  <>
                    <NavigationMenuTrigger className="text-sm font-medium">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[300px] gap-1 p-2">
                        {item.children.map((child) => (
                          <NavigationMenuLink key={child.path} asChild>
                            <Link
                              to={child.path}
                              className={`block rounded-md p-3 text-sm leading-none no-underline transition-colors hover:bg-accent hover:text-accent-foreground ${
                                isActive(child.path) ? 'bg-accent text-accent-foreground' : ''
                              }`}
                            >
                              <div className="font-medium">{child.label}</div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.path!}
                      className={`text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md ${
                        isActive(item.path!) ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Start Free Trial</Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 pt-6">
              {/* Mobile Logo */}
              <div className="flex items-center space-x-2 pb-4 border-b">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">S</span>
                </div>
                <span className="font-semibold text-xl">SafariDesk</span>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div className="space-y-3">
                        <div className="text-sm font-medium text-gray-900">{item.label}</div>
                        <div className="pl-4 space-y-2">
                          {item.children.map((child) => (
                            <SheetClose key={child.path} asChild>
                              <Link
                                to={child.path}
                                className={`block text-sm transition-colors hover:text-primary ${
                                  isActive(child.path) ? 'text-primary font-medium' : 'text-muted-foreground'
                                }`}
                              >
                                {child.label}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <SheetClose asChild>
                        <Link
                          to={item.path!}
                          className={`block text-sm font-medium transition-colors hover:text-primary ${
                            isActive(item.path!) ? 'text-primary' : 'text-muted-foreground'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Auth Buttons */}
              <div className="pt-6 border-t space-y-3">
                <SheetClose asChild>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button className="w-full justify-start" asChild>
                    <Link to="/signup">Start Free Trial</Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="/demo">Request Demo</Link>
                  </Button>
                </SheetClose>
              </div>

              {/* Mobile Additional Links */}
              <div className="pt-4 border-t space-y-2">
                <SheetClose asChild>
                  <Link to="/career" className="block text-sm text-muted-foreground hover:text-primary">
                    Careers
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/changelog" className="block text-sm text-muted-foreground hover:text-primary">
                    What's New
                  </Link>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;