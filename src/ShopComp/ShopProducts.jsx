import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sahteVeri from "../data/sahteVeri";
import "../styles/global.css"; // Animasyonlar için gerekli CSS

// Mobile olup olmadığını tespit eden hook
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

export default function ShopProducts() {
  const isMobile = useIsMobile();
  const itemsPerPage = isMobile ? 5 : 12; // Mobilde 5, masaüstünde 12 ürün
  const totalPages = Math.ceil(sahteVeri.length / itemsPerPage);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleItems, setVisibleItems] = useState(
    sahteVeri.slice(0, itemsPerPage)
  );

  // Eğer ekran boyutu değişirse, ürün sayısını güncelle
  useEffect(() => {
    setVisibleItems(sahteVeri.slice(0, itemsPerPage));
    setCurrentPage(1);
  }, [itemsPerPage]);

  // Yeni ürünleri tek tek ekleyen fonksiyon (staggering)
  const staggerItems = (items) => {
    setVisibleItems([]); // Önce mevcut ürünleri temizle
    items.forEach((item, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, item]);
      }, index * 250); // Her ürün 0.75 saniye arayla ekleniyor
    });
  };

  // Sayfa değiştirme fonksiyonu
  const goToPage = (pageNumber) => {
    if (pageNumber === currentPage) return;

    // Ürün grid'ine yumuşak scroll yap
    document.getElementById("product-grid")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setCurrentPage(pageNumber);

    // 200ms gecikme ile yeni sayfanın ürünlerini yükle
    setTimeout(() => {
      const startIndex = (pageNumber - 1) * itemsPerPage;
      const newItems = sahteVeri.slice(startIndex, startIndex + itemsPerPage);
      staggerItems(newItems);
    }, 200);
  };

  // Görüntülenecek sayfa numaralarını belirle (önceki, mevcut, sonraki)
  const visiblePages = [currentPage - 1, currentPage, currentPage + 1].filter(
    (p) => p >= 1 && p <= totalPages
  );

  return (
    <div>
      {/* Ürün Grid'i: id="product-grid" scroll hedefi için */}
      <div id="product-grid" className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
        {visibleItems.map((item) => (
          <Link 
            to={`/product/${item.id}`} 
            key={item.id} 
            className="flex flex-col items-center animate-fadeInUp no-underline hover:opacity-80 transition"
          >
            <img src={item.image} alt={item.name} className="w-full h-auto object-cover" />
            <h2 className="font-bold mt-2 text-black">{item.name}</h2>
            <p className="text-gray-500">{item.department}</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="line-through text-gray-400">${item.oldPrice.toFixed(2)}</span>
              <span className="text-[#23A6F0] font-bold">${item.newPrice.toFixed(2)}</span>
            </div>
            <div className="flex space-x-2 mt-2">
              <span className="w-4 h-4 rounded-full bg-blue-500"></span>
              <span className="w-4 h-4 rounded-full bg-green-500"></span>
              <span className="w-4 h-4 rounded-full bg-orange-500"></span>
              <span className="w-4 h-4 rounded-full bg-red-500"></span>
            </div>
          </Link>
        ))}
      </div>

      {/* Sayfalama Butonları */}
      <div className="flex justify-center mt-8">
        <div className="inline-flex items-center border rounded overflow-hidden">
          {currentPage > 1 && (
            <button
              onClick={() => goToPage(1)}
              className="px-4 py-2 border-r bg-gray-100 hover:bg-gray-200"
            >
              First
            </button>
          )}
          {visiblePages.map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`px-4 py-2 border-r hover:bg-gray-200 ${
                page === currentPage ? "bg-[#23A6F0] text-white" : "bg-white text-black"
              }`}
            >
              {page}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={() => goToPage(totalPages)}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
