import { useState } from "react";
import {
  Youtube,
  Facebook,
  Instagram,
  CreditCard,
  Wallet,
  Banknote,
  Landmark,
  MessageCircle,
} from "lucide-react";

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
              src="https://cdn.niceonesa.com/web/assets/images/rtl_logo.svg?v=2.0.18(2)%202x"
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
              className="text-red-600 hover:text-red-800 text-3xl transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={32} />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 text-3xl transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={32} />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 text-3xl transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={32} />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 text-3xl transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={32} />
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

          <div className="flex gap-4 text-3xl text-gray-500">
            <CreditCard
              className="hover:text-blue-700 transition-colors"
              size={32}
            />
            <Wallet
              className="hover:text-red-600 transition-colors"
              size={32}
            />
            <Banknote
              className="hover:text-blue-500 transition-colors"
              size={32}
            />
            <Landmark
              className="hover:text-blue-400 transition-colors"
              size={32}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
