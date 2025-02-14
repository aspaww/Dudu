// src/Pdetaikcomp/ProductDetailCard.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import {
  Star,
  Heart,
  ShoppingCart,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ProductDetailCard({ product }) {
  // Tüm resimleri bir diziye ekleyelim: ana resim + thumbnail'lar
  const images = [product.image, ...(product.thumbnails || [])];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goNext = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* SOL: Resim Slider */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative w-full">
            {/* Mobilde daha küçük, masaüstünde daha büyük */}
            <img
              src={images[currentIndex]}
              alt={product.name}
              className="w-full object-cover rounded-lg mb-4 h-[24rem] md:h-[27rem]"
            />
            {/* Sol Ok */}
            {currentIndex > 0 && (
              <button
                onClick={goPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow transition hover:bg-gray-100"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
            )}
            {/* Sağ Ok */}
            {currentIndex < images.length - 1 && (
              <button
                onClick={goNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow transition hover:bg-gray-100"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            )}
          </div>
          {/* Thumbnail'lar */}
          <div className="flex overflow-x-auto gap-2">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className={`w-16 h-16 object-cover rounded cursor-pointer border transition ${
                  idx === currentIndex ? "border-blue-500" : "border-gray-200"
                }`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>

        {/* SAĞ: Ürün Detayları */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold text-[#252B42]">
            {product.name}
          </h2>

          {/* Rating ve Review Count */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  fill={i < Math.round(product.rating) ? "currentColor" : "none"}
                  className="w-4 h-4"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.reviewCount} Reviews
            </span>
          </div>

          {/* Fiyat ve Availability */}
          <div className="flex flex-col mt-4">
            <span className="text-lg md:text-xl font-bold text-[#23A6F0]">
              ${product.newPrice.toFixed(2)}
            </span>
            <span className="text-sm text-green-500 font-semibold">
              Availability: {product.availability}
            </span>
          </div>

          {/* Kısa Açıklama ve Altındaki Çizgi */}
          <p className="text-gray-600 mt-4">{product.shortDesc}</p>
          <div className="my-4 border-b border-gray-200"></div>

          {/* Renk Seçenekleri (Swatch) */}
          <div className="flex items-center gap-2 mt-4">
            {product.colorSwatches?.map((color, i) => (
              <span
                key={i}
                className="w-[1.75rem] h-[1.75rem] rounded-full border border-gray-300 cursor-pointer"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          {/* Alt Kısım: Select Options Butonu ve 3 İkon */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <button className="bg-[#23A6F0] text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-[#1E90FF] hover:shadow">
              Select Options
            </button>
            <button className="p-2 border rounded-full text-gray-600 transition hover:text-[#23A6F0] hover:border-[#23A6F0]">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 border rounded-full text-gray-600 transition hover:text-[#23A6F0] hover:border-[#23A6F0]">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="p-2 border rounded-full text-gray-600 transition hover:text-[#23A6F0] hover:border-[#23A6F0]">
              <Eye className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductDetailCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
    newPrice: PropTypes.number.isRequired,
    availability: PropTypes.string.isRequired,
    shortDesc: PropTypes.string.isRequired,
    colorSwatches: PropTypes.arrayOf(PropTypes.string).isRequired,
    thumbnails: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string.isRequired,
  }).isRequired,
};


