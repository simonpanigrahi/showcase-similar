
import { Link } from "react-router-dom";
import { LayoutGrid, FileText } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full py-4 px-6 md:px-12 lg:px-16 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-medium text-gray-800">Portofolio</div>
        <nav className="hidden md:flex items-center gap-8">
          <NavItem href="/" label="Home" active />
          <NavItem href="/about" label="About" />
          <NavItem href="/projects" label="Projects" icon={<LayoutGrid className="h-4 w-4" />} />
          <NavItem href="/resume" label="Resume" icon={<FileText className="h-4 w-4" />} />
          <Link 
            to="/contact" 
            className="px-6 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

interface NavItemProps {
  href: string;
  label: string;
  active?: boolean;
  icon?: React.ReactNode;
}

const NavItem = ({ href, label, active, icon }: NavItemProps) => {
  return (
    <Link
      to={href}
      className={`flex items-center gap-1 ${
        active ? "border-b-2 border-mint text-gray-800" : "text-gray-600 hover:text-gray-800"
      } transition-colors`}
    >
      {icon && icon}
      {label}
    </Link>
  );
};

export default Navbar;
