// data/sahteVeri.js

const sahteVeri = Array.from({ length: 100 }, (_, index) => {
    const id = index + 1;
    return {
      id,
      name: `Product ${id}`,
      subTitle: "Shirt",
      oldPrice: 30 + (id % 5) * 5,  // Farklılık yaratmak için
      newPrice: 20 + (id % 5) * 4,  // Farklılık yaratmak için
      image: `https://picsum.photos/300/400?random=${id}`,
    };
  });
  
  export default sahteVeri;
  