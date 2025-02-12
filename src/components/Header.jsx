import '../App.css';
import { ShoppingCart, User, Search, AlignRight } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white p-4">
      {/* Mobil Düzen */}
      <div className="md:hidden">
        {/* Üst Satır: Logo - İkonlar */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">Bandage</h1>
          <div className="flex items-center space-x-4">
            <User className="w-7 h-7 cursor-pointer text-black" />
            <Search className="w-7 h-7 cursor-pointer text-black" />
            <ShoppingCart className="w-7 h-7 cursor-pointer text-black" />
            <AlignRight className="w-7 h-7 cursor-pointer text-black" />
          </div>
        </div>
        {/* Alt Satır: Nav Linkleri */}
        <nav className="mt-4 flex flex-col items-center space-y-2">
          <a href="#" className="text-gray-500 text-lg font-medium hover:text-black transition">Home</a>
          <a href="#" className="text-gray-500 text-lg font-medium hover:text-black transition">Product</a>
          <a href="#" className="text-gray-500 text-lg font-medium hover:text-black transition">Pricing</a>
          <a href="#" className="text-gray-500 text-lg font-medium hover:text-black transition">Contact</a>
        </nav>
      </div>

      {/* Bilgisayar (Desktop) Düzeni */}
      <div className="hidden md:flex justify-between items-center">
        {/* Sol: Logo */}
        <h1 className="text-2xl font-bold text-black">Bandage</h1>
        {/* Ortada: Nav Linkleri (yan yana) */}
        <nav className="flex space-x-6">
          <a href="#" className="text-gray-500 text-lg font-medium hover:text-black transition">Home</a>
          <a href="#" className="text-gray-500 text-lg font-medium hover:text-black transition">Product</a>
          <a href="#" className="text-gray-500 text-lg font-medium hover:text-black transition">Pricing</a>
          <a href="#" className="text-gray-500 text-lg font-medium hover:text-black transition">Contact</a>
        </nav>
        {/* Sağ: İkonlar */}
        <div className="flex items-center space-x-4">
          <User className="w-7 h-7 cursor-pointer text-black" />
          <Search className="w-7 h-7 cursor-pointer text-black" />
          <ShoppingCart className="w-7 h-7 cursor-pointer text-black" />
          <AlignRight className="w-7 h-7 cursor-pointer text-black" />
        </div>
      </div>
      <div>
      < img className="rounded-3xl mt-10 w-full max-w-md" src="https://picsum.photos/388/904" alt="Random Image" />
      </div>
    </header>
  );
}
