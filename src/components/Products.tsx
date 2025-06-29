import React from 'react';
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$299",
      originalPrice: "$399",
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 245,
      category: "Electronics",
      isNew: true
    },
    {
      id: 2,
      name: "Designer Leather Handbag",
      price: "$459",
      originalPrice: "$599",
      image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.9,
      reviews: 189,
      category: "Fashion",
      isNew: false
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      price: "$199",
      originalPrice: "$249",
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.7,
      reviews: 432,
      category: "Electronics",
      isNew: true
    },
    {
      id: 4,
      name: "Organic Skincare Set",
      price: "$129",
      originalPrice: "$179",
      image: "https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.6,
      reviews: 156,
      category: "Beauty",
      isNew: false
    },
    {
      id: 5,
      name: "Minimalist Desk Lamp",
      price: "$89",
      originalPrice: "$119",
      image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.5,
      reviews: 98,
      category: "Home",
      isNew: false
    },
    {
      id: 6,
      name: "Professional Camera",
      price: "$899",
      originalPrice: "$1199",
      image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.9,
      reviews: 324,
      category: "Electronics",
      isNew: true
    }
  ];

  const categories = ["All", "Electronics", "Fashion", "Beauty", "Home"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Featured Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked collection of premium products, carefully selected for quality, 
            style, and value. Each item represents our commitment to excellence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-8 sm:mb-12 gap-2 sm:gap-4 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-green-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </span>
                  )}
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Sale
                  </span>
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-200">
                    <Heart className="h-5 w-5 text-gray-700 hover:text-red-500" />
                  </button>
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-200">
                    <Eye className="h-5 w-5 text-gray-700 hover:text-green-600" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-6">
                <div className="mb-2">
                  <span className="text-sm text-green-600 font-medium">{product.category}</span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">{product.price}</span>
                  <span className="text-base sm:text-lg text-gray-500 line-through">{product.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8 sm:mt-12 px-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;