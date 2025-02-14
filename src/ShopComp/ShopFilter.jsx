import { Grid3X3, List } from "lucide-react";
import sahteVeri from "../data/sahteVeri"; // sahteVeri dosyasını içe aktar

const ShopFilter = () => {
  return (
    <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between my-4">
      {/* Üst Kısım: "Showing all X results" */}
      <div className="text-gray-700 font-semibold text-center md:text-left">
        Showing all {sahteVeri.length} results
      </div>

      {/* Orta Kısım: Görünüm (Views) Toggle */}
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

      {/* Alt Kısım: Sort (Popularity vs.) ve Filter Butonu */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center">
        <select className="border border-gray-300 rounded px-4 py-2 shadow-md">
          <option value="popularity">Popularity</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-md">
          Filter
        </button>
      </div>
    </div>
  );
};

export default ShopFilter;
