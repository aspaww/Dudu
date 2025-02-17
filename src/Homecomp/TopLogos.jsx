// src/Homecomp/TopLogos.jsx
export default function TopLogos() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-24 px-4 py-12">
      <a
        href="https://www.hooli.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/hooli.png"
          alt="Hooli"
          className="h-12 md:h-16 object-contain"
        />
      </a>
      <a
        href="https://www.lyft.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/lyft.png"
          alt="Lyft"
          className="h-12 md:h-16 object-contain"
        />
      </a>
      <a
        href="https://www.leaf.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/leaf.png"
          alt="Leaf"
          className="h-12 md:h-16 object-contain"
        />
      </a>
      <a
        href="https://stripe.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/stripe.png"
          alt="Stripe"
          className="h-12 md:h-16 object-contain"
        />
      </a>
      <a
        href="https://aws.amazon.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/aws.png"
          alt="AWS"
          className="h-12 md:h-16 object-contain"
        />
      </a>
      <a
        href="https://www.reddit.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/reddit.png"
          alt="Reddit"
          className="h-12 md:h-16 object-contain"
        />
      </a>
    </div>
  );
}
