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
          <div className="flex  items-end space-x-2">
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

      {/* HERO BÖLÜMÜ (Sadece Desktop) */}
      <div className="hidden md:block relative w-full h-[810px] mt-4 rounded-3xl overflow-hidden ">
        <img
          src="https://picsum.photos/600/800"
          alt="Random Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <p className="text-[clamp(1rem,3vw,1.5rem)] text-[#2A7CC7] mb-5">SUMMER 2020</p>
          <h1 className="mt-2 text-[clamp(1.5rem,3vw,2rem)] text-white font-bold mb-5">NEW COLLECTION</h1>
          <p className="mt-2 text-[clamp(0.8rem,3vw,1rem)] text-gray-200 break-words">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="mt-4 bg-[#23A6F0] text-white rounded-[5px] px-4 py-2">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* MOBİL DÜZEN (md:hidden) */}
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
        
        {/* Resim Üzerinde Yazılar */}
        <div className="relative mt-10 ">
          <img
            className="rounded-3xl w-[clamp(100%,80vw,100%)] h-auto"
            src="https://picsum.photos/600/800"
            alt="Random Image"
          />
          <div className="absolute inset-x-0 top-[15%] flex flex-col items-center text-center px-4">
            <p className="text-[clamp(1rem,3vw,1.5rem)] text-[#2A7CC7] mb-5">SUMMER 2020</p>
            <h1 className="mt-2 text-[clamp(1.5rem,3vw,2rem)] text-[#252B42] font-bold mb-5">NEW COLLECTION</h1>
            <p className="mt-2 text-[clamp(0.8rem,3vw,1rem)] text-[#737373] break-words">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="mt-4 bg-[#23A6F0] text-white rounded-[5px] px-4 py-2">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

    </header>
  );
}
