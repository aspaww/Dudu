// src/pages/ShopPage.jsx
import ShopHeader from "../ShopComp/ShopHeader";
import ShopCategories from "../ShopComp/ShopCategories";
import TopLogos from "../Homecomp/TopLogos";
import ShopProducts from "../ShopComp/ShopProducts";
import ShopFilter from "../ShopComp/ShopFilter";

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
