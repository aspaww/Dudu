// data/sahteVeri.js

const sahteVeri = Array.from({ length: 85 }, (_, index) => {
  const id = index + 1;

  // oldPrice: 20 ile 100 arasında rastgele bir değer
  const oldPrice = parseFloat((Math.random() * 80 + 20).toFixed(2));

  // newPrice: oldPrice'ın %50 ile %90'ı arasında rastgele bir değer
  const newPrice = parseFloat(
    (oldPrice * (0.5 + Math.random() * 0.4)).toFixed(2)
  );

  // rating: 0 ile 5 arasında rastgele bir değer (1 ondalık basamak)
  const rating = parseFloat((Math.random() * 5).toFixed(1));

  // Yeni alanlar (hiçbir eski alanı bozmadan ekliyoruz):
  const reviewCount = Math.floor(Math.random() * 50) + 1; // 1-50
  const availability = "In Stock"; // Örnek: Tümü "In Stock"
  const shortDesc =
    "Met minim Mollit non deserunt! Aliqua do amet sint cliquey dolor do amet sint. RELIT official consequent odor ENIM RELIT Mollit. Exciation venial occaecum sent nostrum met.";
  const colorSwatches = ["#F15A29", "#FFDF00", "#8E44AD", "#3498DB"];
  const thumbnails = [
    `https://picsum.photos/200/200?random=${id + 100}`,
    `https://picsum.photos/200/200?random=${id + 200}`,
  ];

  return {
    id,
    name: "Floating Phone", // Görselde "Floating Phone" vardı, isterseniz değiştirin
    subTitle: "Shirt",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    department: "English Department",
    rating: rating,
    salesCount: 15,
    oldPrice: oldPrice,
    newPrice: newPrice,
    isSale: true,
    hours: "22h",
    lessons: 64,

    // Mobil için ek alanlar
    isNew: true,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'Integral)",
    date: "22 April 2021",
    comments: 10,

    // Resim
    image: `https://picsum.photos/300/400?random=${id}`,

    // Yeni ek alanlar:
    reviewCount,
    availability,
    shortDesc,
    colorSwatches,
    thumbnails,
  };
});

export default sahteVeri;
