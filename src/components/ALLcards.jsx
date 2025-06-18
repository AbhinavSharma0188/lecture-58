const data = Array.from({ length: 100 }, (_, index) => ({
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

function ALLCards({data}) {
  console.log();
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", // 4 items per row
        gap: "20px",
        padding: "20px"
      }}
    >
      {data.map((singleItem) => (
        <div
          key={singleItem.id}
          style={{
            backgroundColor: "#333",
            padding: "20px",
            borderRadius: "10px",
            color: "white",
            height: "auto"
          }}
        >
          <img
            src={singleItem.image}
            alt={singleItem.title}
            style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
          />
          <h2>{singleItem.title}</h2>
          <p>₹ {singleItem.price}</p>
          <p style={{ fontSize: "0.9rem" }}>{singleItem.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ALLCards;
