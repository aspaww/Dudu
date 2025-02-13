// data/sahteVeri.js

const sahteVeri = Array.from({ length: 85 }, (_, index) => {
    const id = index + 1;
  
    // oldPrice: 20 ile 100 arasında rastgele bir değer
    const oldPrice = parseFloat((Math.random() * 80 + 20).toFixed(2));
  
    // newPrice: oldPrice'ın %50 ile %90'ı arasında rastgele bir değer (oldPrice'dan düşük)
    const newPrice = parseFloat((oldPrice * (0.5 + Math.random() * 0.4)).toFixed(2));
  
    // rating: 0 ile 5 arasında rastgele bir değer (1 ondalık basamak)
    const rating = parseFloat((Math.random() * 5).toFixed(1));
  
    return {
      id,
      // Masaüstü için alanlar
      name: "Graphic Design",
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
    };
  });
  
  export default sahteVeri;
  