// src/components2/ProductCard.jsx

import PropTypes from "prop-types";
import {
  Star,
  ArrowDown,
  Clock,
  BookOpen,
  TrendingUp,
  Heart,
  ShoppingBag,
  Eye,
  Share2,
} from "lucide-react";

const ProductCard = ({ item }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden flex relative">
      {/* SOL: Ürün Resmi */}
      <div className="w-1/3 relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        {item.isSale && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Sale
          </span>
        )}
      </div>

      {/* SAĞ: Bilgiler */}
      <div className="w-2/3 p-4 flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-sm text-blue-600">
            {item.department}
          </span>
          <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded flex items-center gap-1">
            <Star size={14} className="text-yellow-500" /> {item.rating.toFixed(1)}
          </span>
        </div>

        <h3 className="text-lg font-bold mt-1">{item.name}</h3>
        <p className="text-gray-600 text-sm mt-2">{item.description}</p>

        <div className="flex items-center gap-1 text-sm text-gray-600 mt-2">
          <ArrowDown size={16} />
          <span>{item.salesCount} Sales</span>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-gray-400 line-through">
            ${item.oldPrice.toFixed(2)}
          </span>
          <span className="text-green-600 font-semibold">
            ${item.newPrice.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <div className="w-4 h-4 rounded-full bg-orange-400"></div>
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
        </div>

        <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{item.hours}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen size={14} />
            <span>{item.lessons} Lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp size={14} />
            <span>Progress</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4">
          <div className="flex items-center gap-3">
            <Heart className="text-gray-400 cursor-pointer" />
            <ShoppingBag className="text-gray-400 cursor-pointer" />
            <Eye className="text-gray-400 cursor-pointer" />
            <Share2 className="text-gray-400 cursor-pointer" />
          </div>
          <button className="bg-white text-[#23A6F0] border border-[#23A6F0] px-6 py-2 rounded hover:bg-[#23A6F0] hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    oldPrice: PropTypes.number.isRequired,
    newPrice: PropTypes.number.isRequired,
    isSale: PropTypes.bool,
    department: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    salesCount: PropTypes.number,
    hours: PropTypes.string,
    lessons: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

export default ProductCard;
