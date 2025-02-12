import '../App.css';
import { ShoppingCart, User, Search, AlignRight } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white p-4">
      {/* Mobil Düzen */}
      <div className="md:hidden">
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
          <a href="#" className="text-[clamp(1.5rem,3vw,1.5rem)] text-gray-500 font-medium hover:text-black transition m-4">Home</a>
          <a href="#" className="text-[clamp(1.5rem,3vw,1.5rem)] text-gray-500 font-medium hover:text-black transition m-4">Product</a>
          <a href="#" className="text-[clamp(1.5rem,3vw,1.5rem)] text-gray-500 font-medium hover:text-black transition m-4">Pricing</a>
          <a href="#" className="text-[clamp(1.5rem,3vw,1.5rem)] text-gray-500 font-medium hover:text-black transition m-4">Contact</a>
        </nav>
        
        {/* Resim Üzerinde Yazılar */}
        <div className="relative mt-10">
          <img
            className="rounded-3xl w-[clamp(100%,80vw,100%)] h-auto"
            src="https://picsum.photos/600/900"
            alt="Random Image"
          />
          {/* Resim üzerine, absolute konumlandırılmış overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center w-full px-4">
            <p className="text-[clamp(1rem,3vw,1.5rem)] text-[#2A7CC7]">
              SUMMER 2020
            </p>
            <h1 className="mt-2 text-[clamp(1.5rem,3vw,2rem)] text-[#252B42] font-bold">
              NEW COLLECTION
            </h1>
            <p className="mt-2 text-[clamp(0.8rem,3vw,1rem)] text-[#737373] break-words">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="mt-4 bg-[#23A6F0] text-white rounded-[5px] px-4 py-2">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* Bilgisayar (Desktop) Düzeni */}
      <div className="hidden md:flex justify-between items-center">
        {/* Sol: Logo */}
        <h1 className="text-[clamp(1.5rem,5vw,2.5rem)] font-bold text-black">Bandage</h1>
        
        {/* Ortada: Nav Linkleri (yan yana) */}
        <nav className="flex space-x-6">
          <a href="#" className="text-[clamp(1rem,2vw,1.25rem)] text-gray-500 font-medium hover:text-black transition">Home</a>
          <a href="#" className="text-[clamp(1rem,2vw,1.25rem)] text-gray-500 font-medium hover:text-black transition">Product</a>
          <a href="#" className="text-[clamp(1rem,2vw,1.25rem)] text-gray-500 font-medium hover:text-black transition">Pricing</a>
          <a href="#" className="text-[clamp(1rem,2vw,1.25rem)] text-gray-500 font-medium hover:text-black transition">Contact</a>
        </nav>
        
        {/* Sağ: İkonlar */}
        <div className="flex items-center space-x-4">
          <User className="w-[clamp(20px,5vw,28px)] h-auto cursor-pointer text-black" />
          <Search className="w-[clamp(20px,5vw,28px)] h-auto cursor-pointer text-black" />
          <ShoppingCart className="w-[clamp(20px,5vw,28px)] h-auto cursor-pointer text-black" />
          <AlignRight className="w-[clamp(20px,5vw,28px)] h-auto cursor-pointer text-black" />
        </div>
      </div>
      
      {/* Bilgisayar Versiyonu için Resim - Ekranın Tam Genişliği */}
      <div className="hidden md:flex justify-center mt-10">
        <img
          className="rounded-3xl w-full max-w-[1200px] h-auto"
          src="https://picsum.photos/1200/800"
          alt="Random Image"
        />
      </div>
    </header>
  );
}
