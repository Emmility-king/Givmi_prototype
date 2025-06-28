import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Givmi</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your premier destination for curated premium products. 
                Quality, style, and exceptional service since 2018.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors duration-200">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors duration-200">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors duration-200">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="#products" className="text-gray-300 hover:text-white transition-colors duration-200">Products</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Careers</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Customer Service</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Shipping Info</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Returns</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Size Guide</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Track Order</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Support</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">support@givmi.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <p className="text-gray-300">123 Commerce Street</p>
                    <p className="text-gray-300">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300">Subscribe to our newsletter for exclusive offers and updates.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-center md:text-left">
              © {currentYear} Givmi. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;