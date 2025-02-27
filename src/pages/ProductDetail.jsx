// src/pages/ProductDetail.jsx
import { useParams } from "react-router-dom";
import sahteVeri from "../data/sahteVeri";
import ShopHeader from "../ShopComp/ShopHeader";
import TopLogos from "../Homecomp/TopLogos";
import ProductDetailCard from "../Pdetailcomp/ProductDetailCard";
import DetailTabs from "../Pdetailcomp/DetailTabs";
import BestSellerProducts from "../Pdetailcomp/BestSellerProducts";

export default function ProductDetail() {
  const { id } = useParams();
  const product = sahteVeri.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      <ShopHeader />
      
      <ProductDetailCard product={product} />

      {/* Dinamik DetailTabs kullanımı */}
      <DetailTabs
        reviewCount={product.reviewCount}
        detailTabsMiddleHeading={product.detailTabsMiddleHeading}
        detailTabsMiddleTexts={product.detailTabsMiddleTexts}
        detailTabsRightTopHeading={product.detailTabsRightTopHeading}
        detailTabsRightTopRows={product.detailTabsRightTopRows}
        detailTabsRightBottomHeading={product.detailTabsRightBottomHeading}
        detailTabsRightBottomRows={product.detailTabsRightBottomRows}
      />

      <BestSellerProducts />
      <TopLogos />
    </div>
  );
}
