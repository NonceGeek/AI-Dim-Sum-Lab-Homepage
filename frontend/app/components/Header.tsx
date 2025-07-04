'use client';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SmoothScroll from './SmoothScroll';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const navItems = [
    { label: 'Home', id: 'hero', href: '/' },
    { label: 'Why We Are Here', id: 'why-we-are-here', href: '/' },
    { label: 'Features', id: 'features', href: '/' },
    { label: 'Architecture', id: 'architecture', href: '/' },
    { label: 'Quick Links', id: 'quick-links', href: '/' }
  ];

  const externalNavItems = [
    { label: 'Project Board', href: '/board' },
  ];

  const renderNavItem = (item: { label: string; id?: string; href: string }) => {
    if (isHomePage && item.id) {
      return (
        <SmoothScroll 
          targetId={item.id}
          className="text-base-content hover:text-primary transition-all duration-300 hover:bg-primary/20 hover:backdrop-blur-md hover:scale-105 hover:translate-x-1"
          style={{ transitionDelay: `${50}ms` }}
        >
          {item.label}
        </SmoothScroll>
      );
    } else {
      return (
        <Link 
          href={item.href}
          className="text-base-content hover:text-primary transition-all duration-300 hover:bg-primary/20 hover:backdrop-blur-md hover:scale-105 hover:translate-x-1"
          style={{ transitionDelay: `${50}ms` }}
        >
          {item.label}
        </Link>
      );
    }
  };

  const renderDesktopNavItem = (item: { label: string; id?: string; href: string }) => {
    if (isHomePage && item.id) {
      return (
        <SmoothScroll 
          targetId={item.id}
          className="text-base-content hover:text-primary transition-all duration-300 hover:bg-primary/20 hover:backdrop-blur-md hover:scale-105 relative group"
          style={{ transitionDelay: `${100}ms` }}
        >
          {item.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </SmoothScroll>
      );
    } else {
      return (
        <Link 
          href={item.href + '#' + item.id}
          className="text-base-content hover:text-primary transition-all duration-300 hover:bg-primary/20 hover:backdrop-blur-md hover:scale-105 relative group"
          style={{ transitionDelay: `${100}ms` }}
        >
          {item.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
      );
    }
  };

  return (
    <header className="navbar transition-all duration-700 ease-out sticky top-0 z-50 border-b bg-base-100/30 backdrop-blur-xl border-base-300/30 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden transition-all duration-300 hover:bg-primary/30 hover:backdrop-blur-md hover:scale-110">
            <Menu className="w-6 h-6 text-primary transition-all duration-300" />
          </div>
          <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-base-100/70 backdrop-blur-xl rounded-box w-64 border border-base-100/30">
            {navItems.map((item) => (
              <li key={item.id || item.href}>
                {renderNavItem(item)}
              </li>
            ))}
            {externalNavItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className="text-base-content hover:text-primary transition-all duration-300 hover:bg-primary/20 hover:backdrop-blur-md hover:scale-105 hover:translate-x-1"
                  style={{ transitionDelay: `${50}ms` }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
            <img src="/logo.png" alt="DimSum Logo" className="w-8 h-8 rounded-lg" />
            <h1 className="text-2xl font-bold tech-heading text-primary min-w-[12rem]">
              DIMSUM AI Labs
            </h1>
          </Link>
        </div>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => (
            <li key={item.id || item.href}>
              {renderDesktopNavItem(item)}
            </li>
          ))}
          {externalNavItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className="text-base-content hover:text-primary transition-all duration-300 hover:bg-primary/20 hover:backdrop-blur-md hover:scale-105 relative group"
                style={{ transitionDelay: `${100}ms` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="navbar-end">
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
} 