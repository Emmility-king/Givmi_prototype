import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, User, Star } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-green-600">Givmi</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">Home</a>
              <a href="#products" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">Products</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">Contact</a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 text-gray-700 hover:text-green-600 transition-colors duration-200">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-700 hover:text-green-600 transition-colors duration-200">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-700 hover:text-green-600 transition-colors duration-200 relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
                <a href="#home" className="block px-3 py-2 text-white hover:text-green-600 transition-colors duration-200 font-medium">Home</a>
                <a href="#products" className="block px-3 py-2 text-white hover:text-green-600 transition-colors duration-200 font-medium">Products</a>
                <a href="#about" className="block px-3 py-2 text-white hover:text-green-600 transition-colors duration-200 font-medium">About</a>
                <a href="#contact" className="block px-3 py-2 text-white hover:text-green-600 transition-colors duration-200 font-medium">Contact</a>
                <div className="flex items-center space-x-4 px-3 py-2">
                  <button className="p-2 text-white hover:text-green-600 transition-colors duration-200">
                    <Search className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-white hover:text-green-600 transition-colors duration-200">
                    <User className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-white hover:text-green-600 transition-colors duration-200 relative">
                    <ShoppingBag className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
                  </button>
                </div>
              </div>
               
            </div>
          )}
        </div>
      </header>

      {/* Trusted Badge - flows with header */}
      <div className={`fixed top-16 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ${
        isScrolled ? 'mt-2' : 'mt-8'
      }`}>
        <div className={`inline-flex items-center space-x-1 backdrop-blur-md rounded-full px-4 py-2 shadow-lg transition-all duration-300 ${
          isScrolled ? 'bg-white/90 border border-green-100' : 'bg-white/10 border border-white/20'
        }`}>
          <div className="flex items-center space-x-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className={`text-sm font-medium transition-colors duration-300 ${
            isScrolled ? 'text-gray-800/50' : 'text-white/70'
          }`}>Trusted by 10,000+ customers</span>
        </div>
      </div>

    </>
  );
};

export default Header;