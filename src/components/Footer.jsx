import '../App.css';
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white w-full">
      {/* ========== MOBİL DÜZEN ========== */}
      <div className="md:hidden text-left">
        {/* Logo ve Sosyal Medya */}
        <div className="w-full m-0 p-0 h-[10.8125rem] flex justify-between items-center bg-[#FAFAFA] p-[1rem]">
          <h1 className="font-bold text-[1.5rem] leading-[2rem] tracking-[0.1px] text-black">
            Dudu
          </h1>
          <div className="flex space-x-[1rem]">
            <Facebook stroke="#23A6F0" className="w-6 h-6 text-black cursor-pointer" />
            <Instagram stroke="#23A6F0" className="w-6 h-6 text-black cursor-pointer" />
            <Twitter stroke="#23A6F0" className="w-6 h-6 text-black cursor-pointer" />
          </div>
        </div>

        {/* Diğer İçerikler */}
        <div className="mt-[1.5rem] pl-[0.75rem]">
          <h2 className="font-bold text-[1rem] leading-[2rem] tracking-[0.1px] text-[#252B42]">
            Company Info
          </h2>
          <ul className="space-y-[0.25rem]">
            <li className="font-bold text-[0.875rem] leading-[2rem] tracking-[0.2px] text-[#737373]">
              About Us
            </li>
            <li className="font-bold text-[0.875rem] leading-[2rem] tracking-[0.2px] text-[#737373]">
              Carrier
            </li>
            <li className="font-bold text-[0.875rem] leading-[2rem] tracking-[0.2px] text-[#737373]">
              We are hiring
            </li>
            <li className="font-bold text-[0.875rem] leading-[2rem] tracking-[0.2px] text-[#737373]">
              Blog
            </li>
          </ul>
        </div>

        <div className="mt-[1rem] pl-[0.75rem]">
          <h2 className="font-bold text-[1rem] leading-[2rem] tracking-[0.1px] text-[#252B42]">
            Legal
          </h2>
          <ul className="space-y-[0.25rem]">
            <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
              About Us
            </li>
            <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
              Carrier
            </li>
            <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
              We are hiring
            </li>
            <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
              Blog
            </li>
          </ul>
        </div>

        <div className="mt-[1rem] pl-[0.75rem]">
          <h2 className="font-bold text-[1rem] leading-[2rem] tracking-[0.1px] text-[#252B42]">
            Features
          </h2>
          <ul className="space-y-[0.25rem]">
            <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
              Business Marketing
            </li>
            <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
              User Analytic
            </li>
            <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
              Live Chat
            </li>
            <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
              Unlimited Support
            </li>
          </ul>
        </div>

        <div className="mt-[1rem] pl-[0.75rem]">
          <h2 className="font-bold text-[1rem] leading-[2rem] tracking-[0.1px] text-[#252B42]">
            Resources
          </h2>
          <ul className="space-y-[0.25rem]">
            <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
              IOS & Android
            </li>
            <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
              Watch a Demo
            </li>
            <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
              Customers
            </li>
            <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
              API
            </li>
          </ul>
        </div>

        <div className="mt-[1.5rem] pl-[0.75rem]">
          <h2 className="font-bold text-[1rem] leading-[2rem] tracking-[0.1px] text-[#252B42]">
            Get In Touch
          </h2>
          <div className="flex mt-[0.5rem] flex-wrap gap-[0.5rem]">
            <input
              type="email"
              placeholder="Your Email"
              className="border p-[0.5rem] flex-1 min-w-[10rem]"
            />
            <button className="bg-[#23A6F0] text-white px-[1rem] py-[0.5rem]">
              Subscribe
            </button>
          </div>
          <p className="mt-[0.5rem] text-gray-500">Lorem imp sum dolor Amit</p>
        </div>
      </div>

      {/* ========== DESKTOP DÜZEN ========== */}
      <div className="hidden md:block mt-[2.5rem] w-full">
        {/* Logo ve Sosyal Medya */}
        <div className="w-full h-[8.875rem] flex justify-between items-center mb-[1.5rem] bg-[#FAFAFA] p-[1rem]">
          <h1 className="font-bold text-[1.5rem] leading-[2rem] tracking-[0.1px] text-black">
            Bandage
          </h1>
          <div className="flex space-x-[1rem]">
            <Facebook stroke="#23A6F0" className="w-6 h-6 cursor-pointer" />
            <Instagram stroke="#23A6F0" className="w-6 h-6 cursor-pointer" />
            <Twitter stroke="#23A6F0" className="w-6 h-6 cursor-pointer" />
          </div>
        </div>

        {/* Menü Linkleri */}
        <div className="grid grid-cols-5 gap-[1.5rem] px-[1rem]">
          <div>
            <h2 className="font-bold text-[1rem] leading-[2rem] tracking-[0.1px] text-[#252B42]">
              Company Info
            </h2>
            <ul className="space-y-[0.25rem]">
              <li className="font-bold text-[0.875rem] leading-[2rem] tracking-[0.2px] text-[#737373]">
                About Us
              </li>
              <li className="font-bold text-[0.875rem] leading-[2rem] tracking-[0.2px] text-[#737373]">
                Carrier
              </li>
              <li className="font-bold text-[0.875rem] leading-[2rem] tracking-[0.2px] text-[#737373]">
                We are hiring
              </li>
              <li className="font-bold text-[0.875rem] leading-[2rem] tracking-[0.2px] text-[#737373]">
                Blog
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[1rem] leading-[2rem] tracking-[0.1px] text-[#252B42]">
              Legal
            </h2>
            <ul className="space-y-[0.25rem]">
              <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
                About Us
              </li>
              <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
                Carrier
              </li>
              <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
                We are hiring
              </li>
              <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
                Blog
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[1rem] leading-[2rem] tracking-[0.1px] text-[#252B42]">
              Features
            </h2>
            <ul className="space-y-[0.25rem]">
              <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
                Business Marketing
              </li>
              <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
                User Analytic
              </li>
              <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
                Live Chat
              </li>
              <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
                Unlimited Support
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[1rem] leading-[2rem] tracking-[0.1px] text-[#252B42]">
              Resources
            </h2>
            <ul className="space-y-[0.25rem]">
              <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
                IOS & Android
              </li>
              <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
                Watch a Demo
              </li>
              <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
                Customers
              </li>
              <li className="font-bold text-[0.875rem] leading-[2rem] text-[#737373]">
                API
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="justify-self-center">
            <h2 className="font-bold text-[1rem] leading-[2rem] tracking-[0.1px] text-[#252B42]">
              Get In Touch
            </h2>
            {/* flex-wrap ekledik */}
            <div className="flex mt-[0.5rem] flex-wrap gap-[0.5rem]">
              <input
                type="email"
                placeholder="Your Email"
                className="border p-[0.5rem] flex-1 min-w-[10rem]"
              />
              <button className="bg-[#23A6F0] text-white px-[1rem] py-[0.5rem]">
                Subscribe
              </button>
            </div>
            <p className="mt-[0.5rem] text-gray-500">Lorem imp sum dolor Amit</p>
          </div>
        </div>
      </div>

      {/* Alt Kısım */}
      <h6 className="w-full bg-[#FAFAFA] text-center mt-[1.5rem] font-bold text-[0.875rem] leading-[1.5rem] tracking-[0.2px] text-gray-500 h-[7.125rem] md:h-[4.625rem] flex items-center justify-center">
        Made With Love By Finland All Right Reserved
      </h6>
    </footer>
  );
}
