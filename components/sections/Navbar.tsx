"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "FONCTIONNLITÉS", href: "/" },
    { name: "TARIFS", href: "/services" },
    { name: "ABOUT US", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="navbar h-28 bg-base-100 shadow-sm  flex justify-between items-center px-4 md:px-8">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/" className="btn btn-ghost text-xl flex items-center">
          <Image
            src="/logo.png"
            alt="SahelTech Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="hidden sm:inline ml-2 text-2xl font-bold">
            SahelTech
          </span>
        </a>
      </div>

      {/* Desktop navigation */}
      <div className="hidden lg:flex">
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-700 text-2xl hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div>
        <a href="/contact" className="btn btn-gray-500 text-gray-700 text-2xl">
          Get Started
        </a>
      </div>
    </nav>
  );
}
