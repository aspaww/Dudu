import { useState } from "react";
import { Grid3X3, List } from "lucide-react";
import sahteVeri from "../data/sahteVeri";

// Renk ismi -> Tailwind renk sınıfı eşleştirmesi
const colorMap = {
  Blue: "bg-blue-500",
  Green: "bg-green-500",
  Orange: "bg-orange-500",
  Red: "bg-red-500",
};

const ShopFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  const categories = [...new Set(sahteVeri.map((item) => item.category))];
  const brands = [...new Set(sahteVeri.map((item) => item.brand))];
  const colors = ["Blue", "Green", "Orange", "Red"];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleFilterClick = () => {
    if (!isFilterOpen) {
      setIsFilterOpen(true);
    } else {
      setIsFiltered(true);
      setIsFilterOpen(false);

      console.log("Filtreler Uygulanıyor...", {
        categories: selectedCategories,
        brands: selectedBrands,
        colors: selectedColors,
        priceRange,
      });
    }
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleColorChange = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setPriceRange([0, value]);
  };

  return (
    // Wrapper tam genişlikte olsun
    <div className="w-full relative">
      {/* Üst filtre çubuğu */}
      <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between my-4">
        <div className="text-gray-700 font-semibold text-center md:text-left">
          {isFiltered
            ? "Showing filtered results..."
            : `Showing all ${sahteVeri.length} results`}
        </div>

        <div className="flex flex-col items-center gap-2 md:flex-row">
          <span className="text-gray-700 font-semibold">Views:</span>
          <div className="flex gap-2">
            <button className="p-2 border rounded-lg bg-white text-black shadow-md">
              <Grid3X3 size={20} />
            </button>
            <button className="p-2 border rounded-lg bg-white text-gray-500 shadow-md">
              <List size={20} />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <select className="border border-gray-300 rounded px-4 py-2 shadow-md">
            <option value="popularity">Popularity</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
          </select>
          <button
            onClick={handleFilterClick}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow-md"
          >
            Filter
          </button>
        </div>
      </div>

      {/* Dropdown: Tam genişlikte, mobilde dikey, masaüstünde yatay */}
      {isFilterOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded shadow-md p-4 z-10">
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-4">
            {/* Filter By Category */}
            <div className="flex-1">
              <h4 className="font-semibold mb-2">Filter By Category</h4>
              {categories.map((category) => (
                <div key={category} className="flex items-center mb-1">
                  <input
                    id={`cat-${category}`}
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="mr-2 cursor-pointer"
                  />
                  <label
                    htmlFor={`cat-${category}`}
                    className="cursor-pointer select-none"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>

            {/* Filter By Brand */}
            <div className="flex-1">
              <h4 className="font-semibold mb-2">Filter By Brand</h4>
              {brands.map((brand) => (
                <div key={brand} className="flex items-center mb-1">
                  <input
                    id={`brand-${brand}`}
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="mr-2 cursor-pointer"
                  />
                  <label
                    htmlFor={`brand-${brand}`}
                    className="cursor-pointer select-none"
                  >
                    {brand}
                  </label>
                </div>
              ))}
            </div>

            {/* Filter By Color */}
            <div className="flex-1">
              <h4 className="font-semibold mb-2">Filter By Color</h4>
              {colors.map((color, index) => {
                const isChecked = selectedColors.includes(color);
                return (
                  <div key={color} className="flex items-center mb-2">
                    <input
                      id={`color-${index}`}
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleColorChange(color)}
                      className="hidden"
                    />
                    <label
                      htmlFor={`color-${index}`}
                      className="flex items-center cursor-pointer select-none"
                    >
                      <div
                        className={`relative w-5 h-5 rounded-full border border-gray-300 mr-2 ${
                          colorMap[color] || ""
                        }`}
                      >
                        {isChecked && (
                          <svg
                            className="absolute top-0 left-0 w-full h-full p-1"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M20.66 5.64l-1.41-1.41-11.66 11.66-4.24-4.24-1.41 1.41 5.65 5.66z"
                              fill="#fff"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm">{color}</span>
                    </label>
                  </div>
                );
              })}
            </div>

            {/* Filter By Price */}
            <div className="flex-1">
              <h4 className="font-semibold mb-2">Filter By Price</h4>
              <input
                type="range"
                min={0}
                max={1000}
                value={priceRange[1]}
                onChange={handlePriceChange}
                className="w-full"
              />
              <div className="flex justify-between text-sm">
                <span>0</span>
                <span>{priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopFilter;
