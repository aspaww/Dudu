// data/sahteVeri.js

const sahteVeri = Array.from({ length: 50 }, (_, index) => {
    const id = index + 1;
    return {
      id,
      // Masaüstü tarafında kullanılan (eski) alanlar
      name: "Graphic Design",
      subTitle: "Shirt", // <-- subTitle eklendi
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      department: "English Department",
      rating: 4.9,
      salesCount: 15,
      oldPrice: 16.48,
      newPrice: 6.48,
      isSale: true,
      hours: "22h",
      lessons: 64,
  
      // Mobil için ek alanlar (yeni tasarım)
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
  