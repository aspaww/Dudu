// src/pages/Contact.jsx
export default function Contact() {
    return (
      <div className="relative w-screen min-h-screen overflow-auto">
        {/* Arka Plan Resmi */}
        <img
          src="/assets/background.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
  
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d88bc]/80 to-[#53b8d7]/80"></div>
  
        {/* İçerik */}
        <div className="relative z-10 w-full min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Sol Kısım: Başlık, Açıklama, Buton */}
              <div className="text-white space-y-6 max-w-lg mx-auto md:mx-0">
                <h1 className="text-3xl md:text-4xl font-bold">CONTACT US</h1>
                <p className="leading-relaxed">
                  Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </p>
                <button className="bg-white text-[#0d88bc] px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
                  CONTACT US
                </button>
              </div>
  
              {/* Sağ Kısım: Şehir Bilgileri */}
              <div className="text-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Paris */}
                  <div className="space-y-1">
                    <h2 className="font-bold text-xl">Paris</h2>
                    {/* Şehir isminin hemen altında mavi çizgi */}
                    <div className="mt-1 w-16 h-[0.125rem] bg-[#23A6F0]"></div>
                    <p>1901 Thorn ridge Cir.</p>
                    <p>75000 Paris</p>
                    <p>Phone: +453 125 215</p>
                    <p>Fax: +453 125 215</p>
                  </div>
  
                  {/* New York */}
                  <div className="space-y-1">
                    <h2 className="font-bold text-xl">New York</h2>
                    <div className="mt-1 w-16 h-[0.125rem] bg-[#23A6F0]"></div>
                    <p>2715 Ash Dr. San Jose</p>
                    <p>75000 Paris</p>
                    <p>Phone: +453 125 215</p>
                    <p>Fax: +453 125 215</p>
                  </div>
  
                  {/* Berlin */}
                  <div className="space-y-1">
                    <h2 className="font-bold text-xl">Berlin</h2>
                    <div className="mt-1 w-16 h-[0.125rem] bg-[#23A6F0]"></div>
                    <p>4140 Parker Rd.</p>
                    <p>75000 Paris</p>
                    <p>Phone: +453 125 215</p>
                    <p>Fax: +453 125 215</p>
                  </div>
  
                  {/* London */}
                  <div className="space-y-1">
                    <h2 className="font-bold text-xl">London</h2>
                    <div className="mt-1 w-16 h-[0.125rem] bg-[#23A6F0]"></div>
                    <p>1419 W. Gray St. Utica</p>
                    <p>75000 Paris</p>
                    <p>Phone: +453 125 215</p>
                    <p>Fax: +453 125 215</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  