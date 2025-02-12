import '../App.css';
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white p-6">
      {/* Mobil Düzen */}
      <div className="md:hidden text-left">
        {/* Logo ve Sosyal Medya - Tam Genişlik, 173px Yükseklik */}
        <div className="w-full m-0 p-0 h-[173px] flex justify-between items-center bg-[#FAFAFA] p-4">
          <h1 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-black">
            Bandage
          </h1>
          <div className="flex space-x-4">
            <Facebook className="w-6 h-6 text-black cursor-pointer" />
            <Instagram className="w-6 h-6 text-black cursor-pointer" />
            <Twitter className="w-6 h-6 text-black cursor-pointer" />
          </div>
        </div>

        {/* Diğer İçerikler (menüler, Get In Touch vs.) */}
        <div className="mt-6">
          <h2 className="font-bold text-[16px] leading-[2rem] tracking-[0.1px] text-[#252B42]">
            Company Info
          </h2>
          <ul className="space-y-1">
            <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
              About Us
            </li>
            <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
              Carrier
            </li>
            <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
              We are hiring
            </li>
            <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
              Blog
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="font-bold text-[16px] leading-[2rem] tracking-[0.1px] text-[#252B42]">
            Legal
          </h2>
          <ul className="space-y-1">
            <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
              About Us
            </li>
            <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
              Carrier
            </li>
            <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
              We are hiring
            </li>
            <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
              Blog
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="font-bold text-[16px] leading-[2rem] tracking-[0.1px] text-[#252B42]">
            Features
          </h2>
          <ul className="space-y-1">
            <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
              Business Marketing
            </li>
            <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
              User Analytic
            </li>
            <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
              Live Chat
            </li>
            <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
              Unlimited Support
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="font-bold text-[16px] leading-[2rem] tracking-[0.1px] text-[#252B42]">
            Resources
          </h2>
          <ul className="space-y-1">
            <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
              IOS & Android
            </li>
            <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
              Watch a Demo
            </li>
            <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
              Customers
            </li>
            <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
              API
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="font-bold text-[16px] leading-[2rem] tracking-[0.1px] text-[#252B42]">
            Get In Touch
          </h2>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Your Email"
              className="border p-2 flex-1"
            />
            <button className="bg-[#23A6F0] text-white px-4 py-2">
              Subscribe
            </button>
          </div>
          <p className="mt-2 text-gray-500">
            Lorem imp sum dolor Amit
          </p>
        </div>
      </div>

      {/* Bilgisayar Düzeni */}
      <div className="hidden md:block mt-10">
        {/* Logo ve Sosyal Medya - Tam Genişlik, 142px Yükseklik */}
        <div className="w-full h-[142px] flex justify-between items-center mb-6 bg-[#FAFAFA] p-4">
          <h1 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-black">
            Bandage
          </h1>
          <div className="flex space-x-4">
            <Facebook className="w-6 h-6 text-black cursor-pointer" />
            <Instagram className="w-6 h-6 text-black cursor-pointer" />
            <Twitter className="w-6 h-6 text-black cursor-pointer" />
          </div>
        </div>

        {/* Menü Linkleri */}
        <div className="grid grid-cols-5 gap-6">
          <div>
            <h2 className="font-bold text-[16px] leading-[2rem] tracking-[0.1px] text-[#252B42]">
              Company Info
            </h2>
            <ul className="space-y-1">
              <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
                About Us
              </li>
              <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
                Carrier
              </li>
              <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
                We are hiring
              </li>
              <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
                Blog
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[16px] leading-[2rem] tracking-[0.1px] text-[#252B42]">
              Legal
            </h2>
            <ul className="space-y-1">
              <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
                About Us
              </li>
              <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
                Carrier
              </li>
              <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
                We are hiring
              </li>
              <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
                Blog
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[16px] leading-[2rem] tracking-[0.1px] text-[#252B42]">
              Features
            </h2>
            <ul className="space-y-1">
              <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
                Business Marketing
              </li>
              <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
                User Analytic
              </li>
              <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
                Live Chat
              </li>
              <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
                Unlimited Support
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[16px] leading-[2rem] tracking-[0.1px] text-[#252B42]">
              Resources
            </h2>
            <ul className="space-y-1">
              <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
                IOS & Android
              </li>
              <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
                Watch a Demo
              </li>
              <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
                Customers
              </li>
              <li className="font-bold text-[14px] leading-[2rem] tracking-[0.2px] text-[#737373]">
                API
              </li>
            </ul>
          </div>

          {/* Get In Touch - Bu sütuna justify-self-center ekleyerek içeriklerin ortalanmasını sağlıyoruz */}
          <div className="justify-self-center">
            <h2 className="font-bold text-[16px] leading-[2rem] tracking-[0.1px] text-[#252B42]">
              Get In Touch
            </h2>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Your Email"
                className="border p-2 flex-1"
              />
              <button className="bg-[#23A6F0] text-white px-4 py-2">
                Subscribe
              </button>
            </div>
            <p className="mt-2 text-gray-500">
              Lorem imp sum dolor Amit
            </p>
          </div>
        </div>
      </div>

      {/* Alt Kısım - Made With Love - Tam Genişlik, Mobil: 114px, Bilgisayar: 74px */}
      <h6 className="w-full bg-[#FAFAFA] text-center mt-6 font-bold text-[14px] leading-[24px] tracking-[0.2px] text-gray-500 h-[114px] md:h-[74px] flex items-center justify-center">
        Made With Love By Finland All Right Reserved
      </h6>
    </footer>
  );
}
