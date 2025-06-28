import React from 'react';
import { Truck, Shield, Headphones, Gift, CreditCard, RotateCcw } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Free Shipping",
      description: "Free delivery on orders over $50. Fast and reliable shipping worldwide."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Payments",
      description: "Your transactions are protected with bank-level security and SSL encryption."
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you with any questions or concerns."
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: "Gift Cards",
      description: "Perfect for any occasion. Give the gift of choice with our digital gift cards."
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Easy Returns",
      description: "Hassle-free returns within 30 days. Your satisfaction is our priority."
    },
    {
      icon: <RotateCcw className="h-8 w-8" />,
      title: "Price Match",
      description: "Found a better price? We'll match it and give you an additional 5% off."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Givmi?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're committed to providing you with the best shopping experience possible. 
            Here's what makes us different from the competition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-transparent hover:border-green-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-600 text-white rounded-xl group-hover:bg-green-700 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Givmi for their shopping needs. 
              Start exploring our premium collection today.
            </p>
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Shopping Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;