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

  // Yeni ek alanlar
  const reviewCount = Math.floor(Math.random() * 50) + 1; // 1-50
  const availability = "In Stock";
  const shortDesc =
    "Met minim Mollit non deserunt! Aliqua do amet sint cliquey dolor do amet sint. RELIT official consequent odor ENIM RELIT Mollit. Exciation venial occaecum sent nostrum met.";
  const colorSwatches = ["#F15A29", "#FFDF00", "#8E44AD", "#3498DB"];
  const thumbnails = [
    `https://picsum.photos/200/200?random=${id + 100}`,
    `https://picsum.photos/200/200?random=${id + 200}`,
  ];

  // Yeni DetailTabs alanları
  const detailTabsMiddleHeading = "the quick fox jumps over";
  const detailTabsMiddleTexts = [
    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  ];
  const detailTabsRightTopHeading = "the quick fox jumps over";
  const detailTabsRightTopRows = [
    "the quick fox jumps over the lazy dog",
    "the quick fox jumps over the lazy dog",
    "the quick fox jumps over the lazy dog",
    "the quick fox jumps over the lazy dog",
  ];
  const detailTabsRightBottomHeading = "the quick fox jumps over";
  const detailTabsRightBottomRows = [
    "the quick fox jumps over the lazy dog",
    "the quick fox jumps over the lazy dog",
    "the quick fox jumps over the lazy dog",
  ];

  return {
    id,
    name: "Floating Phone",
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
    isNew: true,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'Integral)",
    date: "22 April 2021",
    comments: 10,
    image: `https://picsum.photos/300/400?random=${id}`,
    reviewCount,
    availability,
    shortDesc,
    colorSwatches,
    thumbnails,
    // Yeni DetailTabs alanları:
    detailTabsMiddleHeading,
    detailTabsMiddleTexts,
    detailTabsRightTopHeading,
    detailTabsRightTopRows,
    detailTabsRightBottomHeading,
    detailTabsRightBottomRows,
  };
});

export default sahteVeri;
