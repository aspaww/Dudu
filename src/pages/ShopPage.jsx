// src/pages/ShopPage.jsx
import ShopHeader from "../components3/ShopHeader";
import ShopCategories from "../components3/ShopCategories";
import TopLogos from "../components2/TopLogos";
import ShopProducts from "../components3/ShopProducts";
import ShopFilter from "../components3/ShopFilter";

export default function ShopPage() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <ShopHeader />
        <ShopCategories />
        <ShopFilter />

        {/* Ürün Listeleme + Sayfalama */}
        <ShopProducts />
      </div>

      <TopLogos />
    </div>
  );
}
