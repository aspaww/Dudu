// src/pages/HomePage.jsx
import { useState } from "react";
import sahteVeri from "../data/sahteVeri";
import TopLogos from "../Homecomp/TopLogos";
import TopProduct from "../Homecomp/TopProduct";
import ProductList from "../Homecomp/ProductList";
import ProductCard from "../Homecomp/ProductCard";
import HeroImage from "../Homecomp/HeroImage";
import WeLove from "../Homecomp/WeLove";

export default function HomePage() {
  const [visibleCount, setVisibleCount] = useState(5);
  const allProducts = sahteVeri;
  const visibleProducts = allProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <div>
        <HeroImage />
      <TopLogos />
      <TopProduct />
      
      <ProductList
        visibleProducts={visibleProducts}
        handleLoadMore={handleLoadMore}
        totalProductsLength={allProducts.length}
        visibleCount={visibleCount}
      />
      <WeLove />

      {/* Örnek: "Featured Posts" => ilk 2 ürünü gösteriyoruz */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-center text-sm text-blue-600 font-semibold uppercase">
          Practice Advice
        </p>
        <h2 className="text-center text-3xl font-bold mt-1">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {allProducts.slice(0, 2).map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
