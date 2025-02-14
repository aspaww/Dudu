// src/components/ProductList.jsx

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProductList({ visibleProducts, handleLoadMore, totalProductsLength, visibleCount }) {
  return (
    <div className="mx-auto px-4 pb-16">
      {/* Başlık */}
      <div className="text-center my-8">
        <h2 className="text-gray-500 uppercase tracking-widest text-sm font-semibold">
          Featured Products
        </h2>
        <h3 className="text-2xl font-bold mt-2">BESTSELLER PRODUCTS</h3>
        <p className="text-gray-500 mt-2">
          Problem trying to resolve the conflict between
        </p>
      </div>

      {/* Ürün Listesi */}
      {/* Grid düzeni responsive: Mobilde tek sütun, md ve üzeri için 5 sütun */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {visibleProducts.map((product) => (
          <Link 
            to={`/product/${product.id}`} 
            key={product.id} 
            className="text-center no-underline hover:opacity-80 transition"
          >
            <img
              src={product.image}
              alt={`Product ${product.id}`}
              className="w-full h-auto object-cover"
            />
            <h4 className="mt-3 font-semibold text-black">{product.name}</h4>
            <p className="text-gray-600 text-sm">{product.subTitle}</p>
            <div className="flex items-center justify-center space-x-2 mt-2">
              <span className="text-gray-400 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
              <span className="text-green-600 font-semibold">
                ${product.newPrice.toFixed(2)}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Butonu */}
      <div className="flex justify-center mt-8">
        {visibleCount < totalProductsLength && (
          <button
            onClick={handleLoadMore}
            className="bg-white text-[#23A6F0] border border-[#23A6F0] px-6 py-2 rounded hover:bg-[#23A6F0] hover:text-white transition"
          >
            LOAD MORE PRODUCTS
          </button>
        )}
      </div>
    </div>
  );
}

ProductList.propTypes = {
  visibleProducts: PropTypes.array.isRequired,
  handleLoadMore: PropTypes.func.isRequired,
  totalProductsLength: PropTypes.number.isRequired,
  visibleCount: PropTypes.number.isRequired,
};
