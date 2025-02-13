import { useState } from "react";
import sahteVeri from "../data/sahteVeri"; // <-- Veri kaynağı

export default function HomePage() {
  // ------------------ Ürün Listesi ------------------
  const [visibleCount, setVisibleCount] = useState(5);

  // Tüm veriyi sahteVeri.js'ten alıyoruz
  const allProducts = sahteVeri;

  // Görüntülenecek ürünleri state'e göre slice ediyoruz
  const visibleProducts = allProducts.slice(0, visibleCount);

  // Load More fonksiyonu
  const handleLoadMore = () => {
    // Mevcut visibleCount değerini 5 artır
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <div>
      {/* ------------------ ÜST BÖLÜM (LOGO + TOP PRODUCT) ------------------ */}
      <div className="w-full flex flex-col items-center py-12">
        {/* LOGO Sırası */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-24 px-4">
          <img
            src="/assets/hooli.png"
            alt="Hooli"
            className="h-12 md:h-16 object-contain"
          />
          <img
            src="/assets/lyft.png"
            alt="Lyft"
            className="h-12 md:h-16 object-contain"
          />
          <img
            src="/assets/leaf.png"
            alt="Leaf"
            className="h-12 md:h-16 object-contain"
          />
          <img
            src="/assets/stripe.png"
            alt="Stripe"
            className="h-12 md:h-16 object-contain"
          />
          <img
            src="/assets/aws.png"
            alt="AWS"
            className="h-12 md:h-16 object-contain"
          />
          <img
            src="/assets/reddit.png"
            alt="Reddit"
            className="h-12 md:h-16 object-contain"
          />
        </div>

        {/* TOP PRODUCT Bölümü */}
        <div className="max-w-6xl w-full mt-8 md:mt-12 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Solda Büyük Resim */}
            <div className="relative md:col-span-2 md:h-[37.5rem]">
              <img
                src="https://picsum.photos/600/800?random=1"
                alt="Product 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-blue-600/70 text-white p-4 md:p-6">
                <h3 className="font-bold text-lg">Top Product Of the Week</h3>
                <button className="mt-2 border border-white px-4 py-2 hover:bg-white hover:text-blue-600 transition">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>

            {/* Sağda 2 Küçük Resim */}
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Üstteki Resim */}
              <div className="relative md:h-[18.75rem]">
                <img
                  src="https://picsum.photos/600/800?random=2"
                  alt="Product 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-blue-600/70 text-white p-4 md:p-6">
                  <h3 className="font-bold text-lg">Top Product Of the Week</h3>
                  <button className="mt-2 border border-white px-4 py-2 hover:bg-white hover:text-blue-600 transition">
                    EXPLORE ITEMS
                  </button>
                </div>
              </div>

              {/* Alttaki Resim */}
              <div className="relative md:h-[16.75rem]">
                <img
                  src="https://picsum.photos/600/800?random=3"
                  alt="Product 3"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-blue-600/70 text-white p-4 md:p-6">
                  <h3 className="font-bold text-lg">Top Product Of the Week</h3>
                  <button className="mt-2 border border-white px-4 py-2 hover:bg-white hover:text-blue-600 transition">
                    EXPLORE ITEMS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      {/* ------------------ ÜST BÖLÜM SONU ------------------ */}

      {/*
        ----------------------------------------------------------------------
        Mobilde ve Masaüstünde aynı state (visibleCount) kullanılıyor.
        Aşağıdaki kısımlarda visibleProducts üzerinden render yapılıyor.
        ----------------------------------------------------------------------
      */}

      {/* ------------------ MOBİL VERSİYON (ESKİ HALİ) ------------------ */}
      <div className="block md:hidden max-w-sm mx-auto p-4">
        <h2 className="text-center font-bold text-xl uppercase tracking-wide">
          Bestseller Blouses
        </h2>
        <p className="text-center text-gray-600 text-sm mt-2">
          Probably the best blouse in the world
        </p>

        {/* Mobilde tek sütun ürün listesi */}
        <div className="mt-6 flex flex-col space-y-8">
          {visibleProducts.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              {/* Ürün Fotoğrafı */}
              <img
                src={product.image}
                alt={`Product ${product.id}`}
                className="w-full h-auto object-cover rounded-md"
              />
              {/* Ürün Bilgileri */}
              <h3 className="font-bold text-base mt-4">{product.name}</h3>
              <p className="text-gray-700 text-sm">{product.subTitle}</p>
              {/* Fiyatlar */}
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-gray-400 line-through">
                  ${product.oldPrice.toFixed(2)}
                </span>
                <span className="text-green-600 font-semibold">
                  ${product.newPrice.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Butonu (mobil) */}
        <div className="mt-8 flex justify-center">
          {visibleCount < allProducts.length && (
            <button
              onClick={handleLoadMore}
              className="bg-white text-[#23A6F0] border border-[#23A6F0] px-6 py-2 rounded hover:bg-[#23A6F0] hover:text-white transition"
            >
              LOAD MORE PRODUCTS
            </button>
          )}
        </div>
      </div>

      {/* ------------------ MASAÜSTÜ VERSİYON (5x2 Grid) ------------------ */}
      <div className="hidden md:block pb-16">
        {/* Başlık Kısmı */}
        <div className="text-center my-8">
          <h2 className="text-gray-500 uppercase tracking-widest text-sm font-semibold">
            Featured Products
          </h2>
          <h3 className="text-2xl font-bold mt-2">BESTSELLER PRODUCTS</h3>
          <p className="text-gray-500 mt-2">
            Problem trying to resolve the conflict between
          </p>
        </div>

        {/* Masaüstünde 5 sütun x 2 satır grid */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-5 gap-8">
            {visibleProducts.map((product) => (
              <div key={product.id} className="text-center">
                {/* Ürün Görseli */}
                <img
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className="w-full h-auto object-cover"
                />
                {/* Ürün Adı */}
                <h4 className="mt-3 font-semibold">{product.name}</h4>
                <p className="text-gray-600 text-sm">{product.subTitle}</p>
                {/* Fiyat Bilgisi */}
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <span className="text-gray-400 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                  <span className="text-green-600 font-semibold">
                    ${product.newPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Butonu (masaüstü) */}
          <div className="flex justify-center mt-8">
            {visibleCount < allProducts.length && (
              <button
                onClick={handleLoadMore}
                className="bg-white text-[#23A6F0] border border-[#23A6F0] px-6 py-2 rounded hover:bg-[#23A6F0] hover:text-white transition"
              >
                LOAD MORE PRODUCTS
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
