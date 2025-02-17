// src/Pdetailcomp/DetailTabs.jsx
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";

export default function DetailTabs({
  reviewCount,
  detailTabsMiddleHeading,
  detailTabsMiddleTexts,
  detailTabsRightTopHeading,
  detailTabsRightTopRows,
  detailTabsRightBottomHeading,
  detailTabsRightBottomRows,
}) {
  return (
    <div className="max-w-[72rem] mx-auto px-[1rem] py-[2rem]">
      {/* Üst Sekme Başlıkları (her zaman üstte, ortalanmış) */}
      <div className="flex justify-center items-center space-x-[2rem] border-b border-gray-200 pb-[1rem] mb-[2rem] text-[0.875rem]">
        <span className="cursor-pointer hover:text-[#23A6F0]">Description</span>
        <span className="cursor-pointer hover:text-[#23A6F0]">
          Additional Info
        </span>
        <span className="cursor-pointer hover:text-[#23A6F0]">
          Reviews ({reviewCount})
        </span>
      </div>

      {/* Masaüstünde 3 sütun, mobilde 1 sütun (üstte foto, ortada metin, altta sağ sütun) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem]">
        {/* SOLD AKTİF SÜTUN (Fotoğraf) */}
        <div className="order-1 md:order-1">
          <img
            src="https://picsum.photos/400/400?random=999"
            alt="Left Example"
            className="w-full h-auto object-cover rounded"
          />
        </div>

        {/* ORTA SÜTUN (Başlık + metin) */}
        <div className="order-2 md:order-2">
          <h3 className="font-bold text-[1.125rem] mb-[1rem]">
            {detailTabsMiddleHeading}
          </h3>
          <div className="space-y-[0.5rem] text-gray-700 text-[0.875rem] leading-relaxed">
            {detailTabsMiddleTexts.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>

        {/* SAĞ SÜTUN (2 başlık, ilkinde 4 satır, ikincisinde 3 satır) */}
        <div className="order-3 md:order-3 space-y-[1.5rem]">
          {/* İlk Alt Bölüm */}
          <div>
            <h3 className="font-bold text-[1.125rem] mb-[1rem]">
              {detailTabsRightTopHeading}
            </h3>
            <div className="space-y-[0.5rem]">
              {detailTabsRightTopRows.map((text, index) => (
                <div
                  key={index}
                  className="flex items-center cursor-pointer text-[0.875rem] hover:text-[#23A6F0]"
                >
                  <ChevronRight className="w-[1.25rem] h-[1.25rem] mr-[0.25rem]" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* İkinci Alt Bölüm */}
          <div>
            <h3 className="font-bold text-[1.125rem] mb-[1rem]">
              {detailTabsRightBottomHeading}
            </h3>
            <div className="space-y-[0.5rem]">
              {detailTabsRightBottomRows.map((text, index) => (
                <div
                  key={index}
                  className="flex items-center cursor-pointer text-[0.875rem] hover:text-[#23A6F0]"
                >
                  <ChevronRight className="w-[1.25rem] h-[1.25rem] mr-[0.25rem]" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

DetailTabs.propTypes = {
  reviewCount: PropTypes.number.isRequired,
  detailTabsMiddleHeading: PropTypes.string.isRequired,
  detailTabsMiddleTexts: PropTypes.arrayOf(PropTypes.string).isRequired,
  detailTabsRightTopHeading: PropTypes.string.isRequired,
  detailTabsRightTopRows: PropTypes.arrayOf(PropTypes.string).isRequired,
  detailTabsRightBottomHeading: PropTypes.string.isRequired,
  detailTabsRightBottomRows: PropTypes.arrayOf(PropTypes.string).isRequired,
};
