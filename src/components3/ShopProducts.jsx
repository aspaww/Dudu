import { useState } from "react";
import sahteVeri from "../data/sahteVeri";
import "../styles/global.css"; // Animasyonlar için gerekli CSS

export default function ShopProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // 3 satır x 4 sütun
  const totalPages = Math.ceil(sahteVeri.length / itemsPerPage);

  // Görüntülenen ürünleri saklayan state
  const [visibleItems, setVisibleItems] = useState(
    sahteVeri.slice(0, itemsPerPage)
  );

  // Yeni ürünleri sırayla ekleyen fonksiyon
  const staggerItems = (items) => {
    setVisibleItems([]); // Önce ekranı temizle
    items.forEach((item, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, item]);
      }, index * 350); // Her ürün 100ms arayla ekleniyor
    });
  };

  // Sayfa değiştirme fonksiyonu
  const goToPage = (pageNumber) => {
    if (pageNumber === currentPage) return;

    // Ürün grid'ine yumuşak scroll yap
    document.getElementById("product-grid")?.scrollIntoView({ 
      behavior: "smooth", block: "start" 
    });

    setCurrentPage(pageNumber);

    // 200ms gecikme ile yeni sayfanın ürünlerini yükle
    setTimeout(() => {
      const startIndex = (pageNumber - 1) * itemsPerPage;
      const newItems = sahteVeri.slice(startIndex, startIndex + itemsPerPage);
      staggerItems(newItems);
    }, 200);
  };

  return (
    <div>
      {/* Ürün Grid'i */}
      <div id="product-grid" className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
        {visibleItems.map((item) => (
          <div key={item.id} className="flex flex-col items-center animate-fadeInUp">
            <img src={item.image} alt={item.name} className="w-full h-auto object-cover" />
            <h2 className="font-bold mt-2">{item.name}</h2>
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
          </div>
        ))}
      </div>

      {/* Sayfalama Butonları */}
      <div className="flex justify-center mt-8">
        <div className="inline-flex items-center border rounded overflow-hidden">
          {currentPage > 1 && (
            <button onClick={() => goToPage(1)} className="px-4 py-2 border-r bg-gray-100 hover:bg-gray-200">
              First
            </button>
          )}
          {[currentPage - 1, currentPage, currentPage + 1].filter(p => p >= 1 && p <= totalPages).map((page) => (
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
            <button onClick={() => goToPage(totalPages)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200">
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
