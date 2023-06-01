import Card from "../components/Card";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Ceket",
      image: "https://picsum.photos/200",
      price: 1200,
    },
    {
      id: 2,
      name: "Ayakkabı",
      image: "https://picsum.photos/201",
      price: 990,
    },
    {
      id: 3,
      name: "T-Shirt",
      image: "https://picsum.photos/203",
      price: 349,
    },
    { id: 4, name: "Mont", image: "https://picsum.photos/204", price: 1399 },
    {
      id: 5,
      name: "Pantolon",
      image: "https://picsum.photos/205",
      price: 650,
    },
    {
      id: 6,
      name: "Çorap",
      image: "https://picsum.photos/201",
      price: 90,
    },
    {
      id: 7,
      name: "Gömlek",
      image: "https://picsum.photos/203",
      price: 350,
    },
    {
      id: 8,
      name: "Cüzdan",
      image: "https://picsum.photos/204",
      price: 349,
    },
  ];
  return (
    <div className='container d-flex flex-wrap justify-content-between gap-5 p-4'>
      {products.map(product => (
        <Card product={product} />
      ))}
    </div>
  );
};

export default Products;
