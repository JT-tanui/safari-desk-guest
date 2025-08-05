import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path);

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl px-8 py-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo - macOS Monterey style */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
              SafariDesk
            </span>
          </Link>

          {/* Desktop Navigation - macOS Monterey dock style */}
          <nav className="hidden lg:flex items-center backdrop-blur-sm rounded-2xl px-4 py-2 space-x-2">
            <NavLink to="/" isActive={location.pathname === "/"}>
              Home
            </NavLink>
            <NavLink to="/features" isActive={isActive("/features")}>
              Features
            </NavLink>
            <NavLink to="/pricing" isActive={isActive("/pricing")}>
              Pricing
            </NavLink>
            
            {/* Resources Dropdown - macOS Monterey style */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`px-4 py-2 rounded-xl text-sm font-medium flex items-center space-x-1 transition-all duration-300 hover:scale-105 ${
                  isActive("/blog") || isActive("/case-study") || isActive("/integration") || isActive("/changelog")
                    ? "bg-white/40 text-blue-700 shadow-lg backdrop-blur-sm"
                    : "text-gray-700 hover:bg-white/30 hover:text-gray-900 hover:backdrop-blur-sm"
                }`}>
                  <span>Resources</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-52 bg-white/90 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl p-2 mt-2">
                <DropdownMenuItem asChild>
                  <Link to="/blog" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-white/50 rounded-xl transition-all duration-200">
                    📝 Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/case-study" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-white/50 rounded-xl transition-all duration-200">
                    📊 Case Studies
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/integration" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-white/50 rounded-xl transition-all duration-200">
                    🔗 Integrations
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/changelog" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-white/50 rounded-xl transition-all duration-200">
                    🆕 What's New
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink to="/about" isActive={isActive("/about")}>
              About
            </NavLink>
            <NavLink to="/contact" isActive={isActive("/contact")}>
              Contact
            </NavLink>
          </nav>

          {/* Desktop Auth Buttons - macOS Monterey style */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-700 hover:text-gray-900 hover:bg-white/30 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105" 
              asChild
            >
              <Link to="/login">Sign In</Link>
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-6 hover:scale-105"
              asChild
            >
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>

        {/* Mobile Menu Trigger - macOS Monterey style */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-700 hover:bg-white/30 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 p-2"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] bg-white/95 backdrop-blur-xl border-l border-white/30 rounded-l-2xl">
            <div className="flex flex-col gap-6 pt-6">
              {/* Mobile Logo */}
              <div className="flex items-center space-x-3 pb-4 border-b border-gray-200/50">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="font-semibold text-xl text-gray-900">SafariDesk</span>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-2">
                <MobileNavLink to="/" onClick={() => setIsOpen(false)} isActive={location.pathname === "/"}>
                  🏠 Home
                </MobileNavLink>
                <MobileNavLink to="/features" onClick={() => setIsOpen(false)} isActive={isActive("/features")}>
                  ⚡ Features
                </MobileNavLink>
                <MobileNavLink to="/pricing" onClick={() => setIsOpen(false)} isActive={isActive("/pricing")}>
                  💰 Pricing
                </MobileNavLink>
                
                {/* Mobile Resources */}
                <div className="py-2">
                  <div className="text-sm font-medium text-gray-500 mb-2 px-4">Resources</div>
                  <div className="space-y-1 pl-3">
                    <MobileNavLink to="/blog" onClick={() => setIsOpen(false)} isActive={isActive("/blog")}>
                      📝 Blog
                    </MobileNavLink>
                    <MobileNavLink to="/case-study" onClick={() => setIsOpen(false)} isActive={isActive("/case-study")}>
                      📊 Case Studies
                    </MobileNavLink>
                    <MobileNavLink to="/integration" onClick={() => setIsOpen(false)} isActive={isActive("/integration")}>
                      🔗 Integrations
                    </MobileNavLink>
                    <MobileNavLink to="/changelog" onClick={() => setIsOpen(false)} isActive={isActive("/changelog")}>
                      🆕 What's New
                    </MobileNavLink>
                  </div>
                </div>

                <MobileNavLink to="/about" onClick={() => setIsOpen(false)} isActive={isActive("/about")}>
                  ℹ️ About
                </MobileNavLink>
                <MobileNavLink to="/contact" onClick={() => setIsOpen(false)} isActive={isActive("/contact")}>
                  📧 Contact
                </MobileNavLink>
              </nav>

              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-gray-200/50 space-y-3">
                <SheetClose asChild>
                  <Button 
                    variant="outline" 
                    className="w-full justify-center bg-white/50 border border-white/30 hover:bg-white/70 rounded-xl backdrop-blur-sm transition-all duration-300" 
                    asChild
                  >
                    <Link to="/login">Sign In</Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button 
                    className="w-full justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg rounded-xl transition-all duration-300" 
                    asChild
                  >
                    <Link to="/signup">Get Started</Link>
                  </Button>
                </SheetClose>
              </div>

              {/* Mobile Additional Links */}
              <div className="pt-4 border-t border-gray-200/50 space-y-2">
                <SheetClose asChild>
                  <Link to="/demo" className="block text-sm text-gray-600 hover:text-blue-600 px-4 py-3 rounded-xl hover:bg-blue-50/50 backdrop-blur-sm transition-all duration-300">
                    🎯 Request Demo
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/career" className="block text-sm text-gray-600 hover:text-blue-600 px-4 py-3 rounded-xl hover:bg-blue-50/50 backdrop-blur-sm transition-all duration-300">
                    💼 Careers
                  </Link>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  );
};

// Desktop Navigation Link Component - macOS Monterey style
const NavLink = ({ to, children, isActive }: { 
  to: string; 
  children: React.ReactNode; 
  isActive: boolean;
}) => (
  <Link
    to={to}
    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
      isActive
        ? "bg-white/40 text-blue-700 shadow-lg backdrop-blur-sm"
        : "text-gray-700 hover:bg-white/30 hover:text-gray-900"
    }`}
  >
    {children}
  </Link>
);

// Mobile Navigation Link Component - macOS Monterey style
const MobileNavLink = ({ to, children, onClick, isActive }: { 
  to: string; 
  children: React.ReactNode; 
  onClick: () => void;
  isActive: boolean;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-blue-100/80 text-blue-700 backdrop-blur-sm"
        : "text-gray-700 hover:bg-white/50 hover:text-gray-900"
    }`}
  >
    {children}
  </Link>
);

export default Header;
