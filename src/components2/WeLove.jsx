// components/WeLove.jsx

export default function WeLove() {
    return (
      <div className=" mx-auto px-4 mb-8 mt-8 mt-[5rem] mb-[5rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Metin (Mobilde üstte, Masaüstünde sağda) */}
          <div className="order-1 md:order-2 pl-8 pr-5" >
            <h2 className="text-[#23A6F0] font-semibold text-sm uppercase tracking-wide">
              Featured Products
            </h2>
            <h1 className="text-2xl font-bold mt-2">We love what we do</h1>
  
            <p className="text-gray-600 mt-4 leading-relaxed">
              Problems trying to resolve the conflict between the two major realms
              of Classical physics: Newtonian mechanics
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Problems trying to resolve the conflict between the two major realms
              of Classical physics: Newtonian mechanics
            </p>
          </div> 
  
          {/* Fotoğraflar (Mobilde altta, Masaüstünde solda) */}
          <div className="order-2 md:order-1 flex gap-4 justify-center">
            <img
              src="https://picsum.photos/300/400?random=101"
              alt="Woman with glasses"
              className="w-1/2 h-auto object-cover rounded"
            />
            <img
              src="https://picsum.photos/300/400?random=102"
              alt="Woman with headphones"
              className="w-1/2 h-auto object-cover rounded"
            />
          </div>
        </div>
      </div>
    );
  }
  