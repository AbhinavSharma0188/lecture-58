 export const data = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  title: `Product ${index + 1}`,
  price: (Math.random() * 1000 + 100).toFixed(2), // ₹100 to ₹1100
  description: `This is the description for Product ${index + 1}. It’s amazing!`,
  category: index % 2 === 0 ? "men's clothing" : "electronics",
  image: `https://picsum.photos/200?random=${index + 1}`,
  rating: {
    rate: (Math.random() * 2 + 3).toFixed(1), // 3.0 to 5.0
    count: Math.floor(Math.random() * 500) + 1
  }
}));