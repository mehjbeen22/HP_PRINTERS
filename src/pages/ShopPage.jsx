import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ShopPage = () => {
  return (
    <main>
      <div>
        <h1> Our Products </h1>
        <section>
          <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src="" className="rounded-lg h-[15rem]" />
            <Card.Body className="border-t-4 border-black rounded-lg">
              <Card.Title>product Name</Card.Title>
              <Card.Text>
                <span className="text-blue-600 text-xl mr-3">price</span>
                <span className="text-red-600 line-through">
                  previous price
                </span>
                <p className="text-gray-600 font-bold">type</p>
              </Card.Text>

              <Button
                variant="primary"
                className="bg-red-500 border-0 rounded-none"
              >
                ADD TO CART
              </Button>
            </Card.Body>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default ShopPage;

const products = [
  {
    id: 1,
    name: 'HP [Windows 11 Home] 255 G8 Notebook',
    originalPrice: 950.0,
    currentPrice: 825.0,
    rating: 3.0,
    category: 'LAPTOPS',
    sale: 'SALE',
  },
  {
    id: 2,
    name: 'HP 15s, Ryzen 5-5500U, 16GB RAM',
    originalPrice: 1145.0,
    currentPrice: 1060.0,
    rating: 4.0,
    category: 'LAPTOPS',
    sale: 'SALE',
  },
  {
    id: 3,
    name: 'HP AIO PC 12th Gen Intel Core i3',
    originalPrice: 1050.0,
    currentPrice: 970.0,
    category: 'COMPUTERS',
    sale: 'SALE',
  },
  {
    id: 4,
    name: 'HP All-in-One PC 13th Gen',
    originalPrice: 705.0,
    currentPrice: 650.0,
    category: 'COMPUTERS',
    sale: 'SALE',
  },
  {
    id: 5,
    name: 'HP All-in-One PC Intel Pentium',
    originalPrice: 380.0,
    currentPrice: 350.0,
    rating: 5.0,
    category: 'COMPUTERS',
    sale: 'SALE',
  },
  {
    id: 6,
    name: 'HP DeskJet 2332 Inkjet Printer',
    originalPrice: 415.0,
    currentPrice: 380.0,
    category: 'PRINTERS',
    sale: 'SALE',
  },
  {
    id: 7,
    name: 'HP Ink Tank 419 wifi Printer',
    originalPrice: 749.0,
    currentPrice: 700.0,
    category: 'PRINTERS',
    sale: 'SALE',
  },
  {
    id: 8,
    name: 'HP Ink Tank 516 Color Printer',
    originalPrice: 415.0,
    currentPrice: 400.0,
    category: 'PRINTERS',
    sale: 'SALE',
  },
  {
    id: 9,
    name: 'HP Ink Tank 516 Color Printer',
    originalPrice: 390.0,
    currentPrice: 365.0,
    category: 'PRINTERS',
    sale: 'SALE',
  },
  {
    id: 10,
    name: 'HP Laptop 15, 13th Gen Intel Core i3',
    originalPrice: 315.0,
    currentPrice: 285.0,
    category: 'LAPTOPS',
    sale: 'SALE',
  },
  {
    id: 11,
    name: 'HP Laptop 15s, 12th Gen',
    originalPrice: 1085.0,
    currentPrice: 880.0,
    category: 'LAPTOPS',
    sale: 'SALE',
  },
  {
    id: 12,
    name: 'HP M24fw FHD Monitor',
    originalPrice: 70.0,
    currentPrice: 60.0,
    category: 'MONITORS',
    sale: 'SALE',
  },
  {
    id: 13,
    name: 'HP M27f 27-inches',
    originalPrice: 180.0,
    currentPrice: 150.0,
    rating: 5.0,
    category: 'MONITORS',
    sale: 'SALE',
  },
  {
    id: 14,
    name: 'HP V20 19.5 inch(49.53 cm)',
    originalPrice: 120.0,
    currentPrice: 90.0,
    rating: 4.5,
    category: 'MONITORS',
    sale: 'SALE',
  },
  {
    id: 15,
    name: 'HP V22i G5 FHD Monitor, 21.5 inch',
    originalPrice: 160.0,
    currentPrice: 155.0,
    category: 'MONITORS',
    sale: 'SALE',
  },
  {
    id: 16,
    name: 'HP M27f 27-inches',
    originalPrice: 180.0,
    currentPrice: 150.0,
    rating: 5.0,
    category: 'MONITORS',
    sale: 'SALE',
  },
  {
    id: 17,
    name: 'HP V20 19.5 inch(49.53 cm)',
    originalPrice: 120.0,
    currentPrice: 90.0,
    rating: 4.5,
    category: 'MONITORS',
    sale: 'SALE',
  },
  {
    id: 18,
    name: 'HP V22i G5 FHD Monitor, 21.5 inch',
    originalPrice: 160.0,
    currentPrice: 155.0,
    category: 'MONITORS',
    sale: 'SALE',
  },
  {
    id: 19,
    name: 'HP M27f 27-inches',
    originalPrice: 180.0,
    currentPrice: 150.0,
    rating: 5.0,
    category: 'MONITORS',
    sale: 'SALE',
  },
];
