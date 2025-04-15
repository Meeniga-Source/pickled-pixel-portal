
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Classic Dill Pickles",
    description: "Traditional dill pickles made with fresh cucumbers and herbs",
    price: "$6.99",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    id: 2,
    name: "Spicy Garlic Pickles",
    description: "Zesty pickles with a perfect blend of garlic and chili",
    price: "$7.99",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
  },
  {
    id: 3,
    name: "Sweet & Tangy Pickles",
    description: "The perfect balance of sweet and sour flavors",
    price: "$6.99",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
  }
];

const ProductList = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#2C4001]">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-[#2C4001]">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-[#718F2A] font-bold mt-2">{product.price}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
