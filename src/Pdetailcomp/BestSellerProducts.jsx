// src/Pdetailcomp/BestSellerProducts.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sahteVeri from "../data/sahteVeri";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

export default function BestSellerProducts() {
  const isMobile = useIsMobile();
  const sortedProducts = [...sahteVeri].sort((a, b) => b.rating - a.rating);
  const itemsToShow = isMobile ? sortedProducts.slice(0, 4) : sortedProducts.slice(0, 8);

  return (
    <div className="max-w-screen-xl mx-auto px-[1rem] py-[2rem]">
      <h2 className="text-[1.25rem] font-bold uppercase text-center">
        BESTSELLER PRODUCTS
      </h2>
      <p className="text-center text-gray-500 mt-[0.5rem]">
        Probably the best products in the world
      </p>
      <div
        className={`grid ${
          isMobile ? "grid-cols-1" : "md:grid-cols-4"
        } gap-[1rem] mt-[2rem]`}
      >
        {itemsToShow.map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="text-center no-underline hover:opacity-90 transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto object-cover"
            />
            <h4 className="font-semibold mt-[0.5rem] text-black">{item.name}</h4>
            <p className="text-gray-500 text-[0.875rem]">{item.department}</p>
            <div className="flex justify-center items-center gap-[0.5rem] mt-[0.25rem]">
              <span className="text-gray-400 line-through text-[1rem]">
                ${item.oldPrice.toFixed(2)}
              </span>
              <span className="text-green-600 font-bold text-[1rem]">
                ${item.newPrice.toFixed(2)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
