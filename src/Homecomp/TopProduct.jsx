// src/components/TopProduct.jsx

const TopProduct = () => {
    return (
      <div className=" w-full mx-auto mt-8 md:mt-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Solda Büyük Resim */}
          <div className="relative md:col-span-2 md:h-[37.5rem]">
            <img
              src="https://picsum.photos/600/800?random=1"
              alt="Product 1"
              className="w-[110%] h-full object-cover mx-auto"
            />
            <div className="absolute bottom-0 left-0 w-full bg-[#2D8BC0]/75 text-white p-4 md:p-6">
              <h3 className="font-bold text-lg">Top Product Of the Week</h3>
              <button className="mt-2 border border-white px-4 py-2 hover:bg-white hover:text-[#2D8BC0] transition">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
  
          {/* Sağdaki 2 Küçük Resim */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="relative md:h-[18.75rem]">
              <img
                src="https://picsum.photos/600/800?random=2"
                alt="Product 2"
                className="w-[110%] h-full object-cover mx-auto"
              />
              <div className="absolute bottom-0 left-0 w-full bg-[#2D8BC0]/75 text-white p-4 md:p-6">
                <h3 className="font-bold text-lg">Top Product Of the Week</h3>
                <button className="mt-2 border border-white px-4 py-2 hover:bg-white hover:text-[#2D8BC0] transition">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>
            <div className="relative md:h-[16.75rem]">
              <img
                src="https://picsum.photos/600/800?random=3"
                alt="Product 3"
                className="w-[110%] h-full object-cover mx-auto"
              />
              <div className="absolute bottom-0 left-0 w-full bg-[#2D8BC0]/75 text-white p-4 md:p-6">
                <h3 className="font-bold text-lg">Top Product Of the Week</h3>
                <button className="mt-2 border border-white px-4 py-2 hover:bg-white hover:text-[#2D8BC0] transition">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TopProduct;
  