// src/components2/ShopHeader.jsx


export default function ShopHeader() {
  return (
    <div>
      {/* ========== Masaüstü Versiyon ========== */}
      <div className="hidden md:block bg-white w-full">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Solda büyük “Shop” */}
          <h1 className="text-2xl font-bold text-[#252B42]">Shop</h1>

          {/* Sağda “Home > Shop” breadcrumb */}
          <div className="text-sm flex items-center">
            <span className="text-[#252B42]">Home</span>
            <span className="mx-1 text-[#C4C4C4]">{">"}</span>
            <span className="text-gray-500">Shop</span>
          </div>
        </div>
      </div>

      {/* ========== Mobil Versiyon ========== */}
      <div className="block md:hidden bg-white w-full">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex flex-col items-center text-center">
          {/* “Shop” ortada büyük */}
          <h1 className="text-2xl font-bold text-[#252B42]">Shop</h1>

          {/* “Home > Shop” ortada, alt satır */}
          <div className="flex items-center text-sm mt-2">
            <span className="text-[#252B42]">Home</span>
            <span className="mx-1 text-[#C4C4C4]">{">"}</span>
            <span className="text-gray-500">Shop</span>
          </div>
        </div>
      </div>
    </div>
  );
}
