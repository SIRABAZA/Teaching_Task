import { useState } from "react";

const year = new Date().getFullYear();

export default function Footer() {
  const [socialLinks] = useState({
    youtube: "#youtube",
    facebook: "#facebook",
    whatsapp: "#whatsapp",
    instagram: "#instagram",
  });

  const navItems = [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#experts", label: "Our Experts" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact Us" },
    { href: "/policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ];

  return (
    <footer className="bg-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="w-48 mb-8">
            <img
              src="https://placehold.co/200x80/2563eb/white?text=ChildSkills"
              alt="ChildSkills Logo"
              className="w-full"
            />
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 mb-8">
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://placehold.co/40/ff0000/white?text=YT"
                alt="YouTube"
                className="w-10 h-10 rounded-full"
              />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://placehold.co/40/1877f2/white?text=FB"
                alt="Facebook"
                className="w-10 h-10 rounded-full"
              />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://placehold.co/40/25d366/white?text=WA"
                alt="WhatsApp"
                className="w-10 h-10 rounded-full"
              />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://placehold.co/40/e1306c/white?text=IG"
                alt="Instagram"
                className="w-10 h-10 rounded-full"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 mb-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-1 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-300">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {year} ChildSkills. All rights reserved.
          </p>

          <div className="w-64">
            <img
              src="https://placehold.co/300x60/fff/333?text=Payment+Methods"
              alt="Accepted payment methods"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
