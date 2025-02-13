// src/components2/HeroImage.jsx


export default function HeroImage() {
  return (
    <div>
      {/* MASAÜSTÜ HERO (Desktop) */}
      <div className="hidden md:block relative w-full h-[810px] mt-4 rounded-3xl overflow-hidden">
        <img
          src="https://picsum.photos/600/800"
          alt="Random Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <p className="text-[clamp(1rem,3vw,1.5rem)] text-[#2A7CC7] mb-5">SUMMER 2020</p>
          <h1 className="mt-2 text-[clamp(1.5rem,3vw,2rem)] text-white font-bold mb-5">NEW COLLECTION</h1>
          <p className="mt-2 text-[clamp(0.8rem,3vw,1rem)] text-gray-200 break-words">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="mt-4 bg-[#23A6F0] text-white rounded-[5px] px-4 py-2">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* MOBİL HERO (Mobile) */}
      <div className="block md:hidden w-full p-6">
        <div className="relative mt-10">
          <img
            className="rounded-3xl w-[clamp(100%,80vw,100%)] h-auto"
            src="https://picsum.photos/600/800"
            alt="Random Image"
          />
          <div className="absolute inset-x-0 top-[15%] flex flex-col items-center text-center px-4">
            <p className="text-[clamp(1rem,3vw,1.5rem)] text-[#2A7CC7] mb-5">SUMMER 2020</p>
            <h1 className="mt-2 text-[clamp(1.5rem,3vw,2rem)] text-[#252B42] font-bold mb-5">
              NEW COLLECTION
            </h1>
            <p className="mt-2 text-[clamp(0.8rem,3vw,1rem)] text-[#737373] break-words">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="mt-4 bg-[#23A6F0] text-white rounded-[5px] px-4 py-2">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
