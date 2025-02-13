// src/components2/Header.jsx
import '../App.css';
import { 
  ShoppingCart, User, Search, AlignRight,
  Phone, Mail, Instagram, Youtube, Twitter, Facebook 
} from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white w-full">
      {/* TOP BAR (Sadece Desktop) */}
      <div className="hidden md:block w-full bg-blue-900 text-white">
        <div className="max-w-screen-xl px-6 py-2 flex justify-between items-center text-sm">
          {/* Sol Grup: Telefon ve E-posta */}
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone className="mr-1" /> (225) 555-0118
            </span>
            <span className="flex items-center">
              <Mail className="mr-1" /> michelle.rivera@example.com
            </span>
          </div>
          {/* Orta Grup: Bilgilendirme Mesajı */}
          <div className="hidden lg:block">
            <span>Follow Us &amp; get a chance to win 80% off</span>
          </div>
          {/* Sağ Grup: Sosyal Medya İkonları */}
          <div className="flex items-end space-x-2">
            <span>Follow Us:</span>
            <Instagram className="w-4 h-4" />
            <Youtube className="w-4 h-4" />
            <Facebook className="w-4 h-4" />
            <Twitter className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* ANA NAVIGASYON (Sadece Desktop) */}
      <div className="hidden md:block w-full shadow">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Sol Grup: Logo ve Menü Linkleri */}
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-black">Bandage</h1>
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-black transition">Home</a>
              <a href="#" className="text-gray-600 hover:text-black transition">Shop</a>
              <a href="#" className="text-gray-600 hover:text-black transition">About</a>
              <a href="#" className="text-gray-600 hover:text-black transition">Blog</a>
              <a href="#" className="text-gray-600 hover:text-black transition">Contact</a>
              <a href="#" className="text-gray-600 hover:text-black transition">Pages</a>
            </nav>
          </div>
          {/* Sağ Grup: Login/Register ve İkonlar */}
          <div className="flex items-center space-x-5">
            <a href="#" className="text-gray-600 hover:text-black transition">Login / Register</a>
            <Search className="w-5 h-5 cursor-pointer text-black" />
            <ShoppingCart className="w-5 h-5 cursor-pointer text-black" />
            <User className="w-5 h-5 cursor-pointer text-black" />
          </div>
        </div>
      </div>

      {/* MOBİL DÜZEN */}
      <div className="md:hidden w-full p-6">
        {/* Üst Satır: Logo - İkonlar */}
        <div className="flex justify-between items-center">
          <h1 className="text-[clamp(1.5rem,5vw,2.5rem)] font-bold text-black">Bandage</h1>
          <div className="flex items-center space-x-4">
            <User className="w-[clamp(1.5rem,5vw,28px)] h-auto cursor-pointer text-black" />
            <Search className="w-[clamp(1.5rem,5vw,28px)] h-auto cursor-pointer text-black" />
            <ShoppingCart className="w-[clamp(1.5rem,5vw,28px)] h-auto cursor-pointer text-black" />
            <AlignRight className="w-[clamp(1.5rem,5vw,28px)] h-auto cursor-pointer text-black" />
          </div>
        </div>
        
        {/* Alt Satır: Nav Linkleri */}
        <nav className="mt-4 flex flex-col items-center space-y-2">
          <a href="#" className="text-[clamp(1.5rem,3vw,1.5rem)] text-gray-500 font-medium hover:text-black transition m-4">
            Home
          </a>
          <a href="#" className="text-[clamp(1.5rem,3vw,1.5rem)] text-gray-500 font-medium hover:text-black transition m-4">
            Product
          </a>
          <a href="#" className="text-[clamp(1.5rem,3vw,1.5rem)] text-gray-500 font-medium hover:text-black transition m-4">
            Pricing
          </a>
          <a href="#" className="text-[clamp(1.5rem,3vw,1.5rem)] text-gray-500 font-medium hover:text-black transition m-4">
            Contact
          </a>
        </nav>

        {/* MOBİL HERO: Eğer header içinde hero görmek istemiyorsanız, burayı kaldırabilirsiniz. */}
      </div>
    </header>
  );
}
