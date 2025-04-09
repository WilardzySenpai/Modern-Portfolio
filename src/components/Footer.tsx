"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/yourusername", ariaLabel: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/yourusername", ariaLabel: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/yourusername", ariaLabel: "Twitter" },
  ];

  return (
    <footer className="bg-card border-t border-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-xl font-bold tracking-tighter">
              <span className="text-primary">Dev</span>Portfolio
            </Link>
            <p className="text-sm text-muted-foreground mt-2 max-w-md">
              Passionate full-stack developer specializing in creating elegant,
              efficient, and user-centered digital experiences.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center space-x-3">
              {socialLinks.map((link, index) => (
                <Button key={link.ariaLabel} size="icon" variant="ghost" asChild>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                  >
                    {link.icon}
                  </Link>
                </Button>
              ))}
            </div>
            <Button variant="outline" size="sm" onClick={scrollToTop} className="gap-1">
              <ArrowUp className="h-4 w-4" /> Back to Top
            </Button>
          </div>
        </div>

        <div className="pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} DevPortfolio. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
