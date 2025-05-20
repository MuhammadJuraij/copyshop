import { useState } from 'react';

// Product type definition
type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  featured?: boolean;
  newArrival?: boolean;
  bestselling?: boolean;
};

// Main component
export default function featuredSection() {
  // Sample product data
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'Classic Blue Watch',
      price: 90,
      image: 'images/p2.jpg',
      featured: true
    },
    {
      id: '2',
      name: 'Striped Band Watch',
      price: 90,
      image: 'images/p2.jpg',
      featured: true,
      newArrival: true
    },
    {
      id: '3',
      name: 'Sport Digital Watch',
      price: 90,
      image: 'images/p1.jpg',
      newArrival: true
    },
    {
      id: '4',
      name: 'Smart Watch',
      price: 90,
      image: 'images/p2.jpg',
      
    },
    {
      id: '5',
      name: 'Luxury Gold Watch',
      price: 120,
      image: 'images/p2.jpg',
      featured: true
    },
    {
      id: '6',
      name: 'Fitness Tracker',
      price: 75,
      image: 'images/p2.jpg',

      bestselling: true
    }
  ]);

  // Filter states
  const [activeFilter, setActiveFilter] = useState('FEATURED');
  
  // Filtered products based on active filter
  const filteredProducts = products.filter(product => {
    if (activeFilter === 'FEATURED') return product.featured;
    if (activeFilter === 'BEST SELLING') return product.bestselling; 
    if (activeFilter === 'NEW ARRIVALS') return product.newArrival;
    
    return true;
  });

  // Handle adding product to cart
  const addToCart = (productId: string) => {
    alert(`Added product ${productId} to cart!`);
  };

  // Handle quick view
  const quickView = (productId: string) => {
    alert(`Quick view for product ${productId}`);
  };

  return (
    <div className="container mx-auto px-4 md:px-20 py-10">
      {/* Filter tabs */}
      <div className="flex flex-wrap  border-b mb-6 justify-center">
        {['FEATURED', 'BEST SELLING', 'NEW ARRIVALS'].map((filter) => (
          <button
            key={filter}
            className={`
                
              px-4 py-2 text-[10px]
              md:px-10 md:py-2 md:text-sm font-medium cursor-pointer ${
              activeFilter === filter
                ? 'bg-black text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-gray-50 ">
            <div className="relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full  object-contain "
              />
              <div className="absolute bottom-0 left-0 right-0 flex opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => addToCart(product.id)}
                  className="bg-blue-600 text-white text-xs py-2 px-3 flex-1"
                >
                  Add To Cart
                </button>
                <button 
                  onClick={() => quickView(product.id)}
                  className="bg-gray-800 text-white text-xs py-2 px-3 flex-1"
                >
                  Quick View
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-gray-700 text-sm font-medium">
                {product.name}
              </h3>
              <p className="text-gray-900 mt-1">
                $ {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}