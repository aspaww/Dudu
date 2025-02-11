import '../App.css';
import { ShoppingCart, User, Search, AlignRight } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center max-w-full mx-auto">
        {/* Logo */}
        <h1 className="text-xs font-bold text-black ">Bandage</h1>

        {/* Sağ Üstteki İkonlar */}
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 cursor-pointer text-black" />
          <User className="w-5 h-5 cursor-pointer text-black" />
          <ShoppingCart className="w-5 h-5 cursor-pointer text-black" />
          <AlignRight className="w-5 h-5 cursor-pointer text-black"/>
        </div>
      </div>

      {/* Küçük Ekranlarda Menü */}
      <nav className="flex flex-col items-center space-y-2 mt-4 md:hidden">
        <a href="#" className="text-gray-700 text-lg font-medium">Home</a>
        <a href="#" className="text-gray-700 text-lg font-medium">Product</a>
        <a href="#" className="text-gray-700 text-lg font-medium">Pricing</a>
        <a href="#" className="text-gray-700 text-lg font-medium">Contact</a>
      </nav>
    </header>
  );
}