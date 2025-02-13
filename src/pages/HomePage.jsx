export default function HomePage() {
    return (
      <div className="w-full flex flex-col items-center py-12">
        {/* 1) LOGO BÖLÜMÜ */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-24 px-4">
          <img src="/assets/hooli.png" alt="Hooli" className="h-12 md:h-16 object-contain" />
          <img src="/assets/lyft.png" alt="Lyft" className="h-12 md:h-16 object-contain" />
          <img src="/assets/leaf.png" alt="Leaf" className="h-12 md:h-16 object-contain" />
          <img src="/assets/stripe.png" alt="Stripe" className="h-12 md:h-16 object-contain" />
          <img src="/assets/aws.png" alt="AWS" className="h-12 md:h-16 object-contain" />
          <img src="/assets/reddit.png" alt="Reddit" className="h-12 md:h-16 object-contain" />
        </div>
  
        {/* 2) TOP PRODUCT BÖLÜMÜ */}
        <div className="max-w-6xl w-full mt-8 md:mt-12 px-4 md:px-6">
          {/* Mobilde tek sütun, masaüstünde solda büyük, sağda 2 küçük foto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Soldaki büyük resim */}
            <div className="relative md:col-span-2 md:h-[37.5rem]">
              <img
                src="https://picsum.photos/600/800?random=1"
                alt="Product 1"
                className="w-full h-full object-cover"
              />
              {/* Yarı saydam mavi overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-blue-600/70 text-white p-4 md:p-6">
                <h3 className="font-bold text-lg">Top Product Of the Week</h3>
                <button className="mt-2 border border-white px-4 py-2 hover:bg-white hover:text-blue-600 transition">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>
  
            {/* Sağdaki iki küçük resim */}
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Üstteki resim */}
              <div className="relative md:h-[18.75rem]">
                <img
                  src="https://picsum.photos/600/800?random=2"
                  alt="Product 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-blue-600/70 text-white p-4 md:p-6">
                  <h3 className="font-bold text-lg">Top Product Of the Week</h3>
                  <button className="mt-2 border border-white px-4 py-2 hover:bg-white hover:text-blue-600 transition">
                    EXPLORE ITEMS
                  </button>
                </div>
              </div>
  
              {/* Alttaki resim */}
              <div className="relative md:h-[16.75rem]">
                <img
                  src="https://picsum.photos/600/800?random=3"
                  alt="Product 3"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-blue-600/70 text-white p-4 md:p-6">
                  <h3 className="font-bold text-lg">Top Product Of the Week</h3>
                  <button className="mt-2 border border-white px-4 py-2 hover:bg-white hover:text-blue-600 transition">
                    EXPLORE ITEMS
                  </button>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
  }
  