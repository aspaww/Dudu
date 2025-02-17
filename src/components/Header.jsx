// src/components2/Header.jsx
import '../App.css';
import {
  ShoppingCart,
  Search,
  AlignRight,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { shopDropdownData } from "../data/sahteVeri";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [shopTimer, setShopTimer] = useState(null);

  const handleShopMouseEnter = () => {
    if (shopTimer) clearTimeout(shopTimer);
    const timer = setTimeout(() => {
      setShopDropdownOpen(true);
    }, 1000); // 1 saniye gecikme
    setShopTimer(timer);
  };

  const handleShopMouseLeave = () => {
    if (shopTimer) clearTimeout(shopTimer);
    const timer = setTimeout(() => {
      setShopDropdownOpen(false);
    }, 300); // 300ms gecikme
    setShopTimer(timer);
  };

  return (
    <header className="w-full">
      {/* ================= DESKTOP TOP BAR ================= */}
      <div className="hidden md:flex w-full bg-[#2A2F3A] text-white">
        <div className="max-w-screen-xl w-full mx-auto px-6 py-4 flex items-center justify-between text-sm">
          {/* Sol Grup: Telefon & E-posta */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>
          {/* Orta Grup: Bilgilendirme Mesajı */}
          <div className="flex-1 text-center">
            <span>Follow Us &amp; get a chance to win 80% off</span>
          </div>
          {/* Sağ Grup: Sosyal Medya İkonları */}
          <div className="flex items-center space-x-3">
            <span>Follow Us:</span>
            <Instagram className="w-4 h-4" />
            <Youtube className="w-4 h-4" />
            <Facebook className="w-4 h-4" />
            <Twitter className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* ================= DESKTOP NAVIGATION ================= */}
      <div className="hidden md:flex w-full bg-white shadow">
        <div className="max-w-screen-xl w-full mx-auto px-6 py-4 flex items-center justify-between">
          {/* Sol: Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black">Dudu</h1>
          </div>
          {/* Orta: Menü Linkleri */}
          <nav className="flex-1 flex justify-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-black transition">
              Home
            </Link>

            {/* Shop Link ve Dropdown kapsayıcısı */}
            <div
              className="relative inline-flex items-center"
              onMouseEnter={handleShopMouseEnter}
              onMouseLeave={handleShopMouseLeave}
            >
              <Link to="/shop" className="text-gray-600 hover:text-black transition">
                Shop
              </Link>
              {shopDropdownOpen && (
                <div className="absolute left-0 top-full bg-white shadow-lg p-4 mt-2 grid grid-cols-2 gap-8 min-w-[15rem] z-10">
                  {/* Kadın Kategorileri */}
                  <div>
                    <h3 className="font-bold mb-2">Kadın</h3>
                    <ul className="space-y-1">
                      {shopDropdownData.women.map((cat, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-700 hover:text-[#23A6F0] cursor-pointer"
                          onClick={() => { /* İleride yönlendirme ekleyebilirsiniz */ }}
                        >
                          {cat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Erkek Kategorileri */}
                  <div>
                    <h3 className="font-bold mb-2">Erkek</h3>
                    <ul className="space-y-1">
                      {shopDropdownData.men.map((cat, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-700 hover:text-[#23A6F0] cursor-pointer"
                          onClick={() => { /* İleride yönlendirme ekleyebilirsiniz */ }}
                        >
                          {cat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-600 hover:text-black transition">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition">
              Blog
            </a>
            <a href="/contact" className="text-gray-600 hover:text-black transition">
              Contact
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition">
              Pages
            </a>
          </nav>
          {/* Sağ: Login/Register & İkonlar */}
          <div className="flex-shrink-0 flex items-center space-x-5">
            <a href="#" className="text-[#23A6F0] hover:opacity-80 transition">
              Login / Register
            </a>
            <Search className="w-5 h-5 cursor-pointer text-black" />
            <ShoppingCart className="w-5 h-5 cursor-pointer text-black" />
            <Heart className="w-5 h-5 cursor-pointer text-black" />
          </div>
        </div>
      </div>

      {/* ================= MOBILE HEADER (üst satır) ================= */}
      <div className="md:hidden w-full bg-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#252B42]">Bandage</h1>
          <AlignRight
            className="w-6 h-6 cursor-pointer text-[#252B42]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </div>

      {/* ================= MOBILE MENU (akıcı açılıp kapanan) ================= */}
      <div
        className={`md:hidden bg-white px-4 py-4 border-t overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4">
          <Link
            to="/"
            className="text-[#252B42] text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-[#252B42] text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Shop
          </Link>
          <a
            href="#"
            className="text-[#252B42] text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="text-[#252B42] text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </a>
          <Link
            to="/contact"
            className="text-[#252B42] text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <a
            href="#"
            className="text-[#252B42] text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pages
          </a>
        </nav>
        <div className="border-t border-gray-200 w-full pt-4 flex flex-col items-center space-y-3">
          <a
            href="#"
            className="text-[#23A6F0] text-base font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Login / Register
          </a>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer text-[#23A6F0]" />
            <ShoppingCart className="w-5 h-5 cursor-pointer text-[#23A6F0]" />
            <Heart className="w-5 h-5 cursor-pointer text-[#23A6F0]" />
          </div>
        </div>
      </div>
    </header>
  );
}
