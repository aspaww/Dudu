// src/components3/ShopCategories.jsx


export default function ShopCategories() {
  return (
    <div className="max-w-[72rem] mx-auto px-[1rem] my-[2rem]">
      {/* Masaüstünde 5 sütun, mobilde 1 sütun */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-[1rem]">
        {/* 1. Kategori */}
        <div className="relative w-full h-[21.875rem]"> 
          {/* 350px = 21.875rem */}
          <img
            src="https://picsum.photos/600/400?random=11"
            alt="Category 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h3 className="text-[1.25rem] font-bold uppercase">CLOTHS</h3>
            <p className="text-[0.875rem] mt-[0.625rem] uppercase">5 items</p>
          </div>
        </div>

        {/* 2. Kategori */}
        <div className="relative w-full h-[21.875rem]">
          <img
            src="https://picsum.photos/600/400?random=12"
            alt="Category 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h3 className="text-[1.25rem] font-bold uppercase">CLOTHS</h3>
            <p className="text-[0.875rem] mt-[0.625rem] uppercase">5 items</p>
          </div>
        </div>

        {/* 3. Kategori */}
        <div className="relative w-full h-[21.875rem]">
          <img
            src="https://picsum.photos/600/400?random=13"
            alt="Category 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h3 className="text-[1.25rem] font-bold uppercase">CLOTHS</h3>
            <p className="text-[0.875rem] mt-[0.625rem] uppercase">5 items</p>
          </div>
        </div>

        {/* 4. Kategori */}
        <div className="relative w-full h-[21.875rem]">
          <img
            src="https://picsum.photos/600/400?random=14"
            alt="Category 4"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h3 className="text-[1.25rem] font-bold uppercase">CLOTHS</h3>
            <p className="text-[0.875rem] mt-[0.625rem] uppercase">5 items</p>
          </div>
        </div>

        {/* 5. Kategori */}
        <div className="relative w-full h-[21.875rem]">
          <img
            src="https://picsum.photos/600/400?random=15"
            alt="Category 5"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h3 className="text-[1.25rem] font-bold uppercase">CLOTHS</h3>
            <p className="text-[0.875rem] mt-[0.625rem] uppercase">5 items</p>
          </div>
        </div>
      </div>
    </div>
  );
}
