import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "100K+", label: "Happy Customers" },
    { icon: <Award className="h-8 w-8" />, number: "50+", label: "Awards Won" },
    { icon: <Globe className="h-8 w-8" />, number: "50+", label: "Countries Served" },
    { icon: <Heart className="h-8 w-8" />, number: "99.9%", label: "Satisfaction Rate" }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Visionary leader with 15+ years in retail innovation"
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Award-winning designer passionate about user experience"
    },
    {
      name: "Emily Rodriguez",
      role: "Chief Technology Officer",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Tech innovator driving our digital transformation"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Givmi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2024, Givmi has grown from a small startup to a global leader in premium retail. 
            Our mission is to curate exceptional products and deliver unparalleled shopping experiences.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                What started as a passion project in a small garage has evolved into a trusted global brand. 
                We believe that shopping should be more than just a transaction – it should be an experience 
                that brings joy and adds value to your life.
              </p>
              <p>
                Our commitment to quality, innovation, and customer satisfaction has earned us the trust of 
                over 100,000 customers worldwide. Every product in our collection is carefully selected and 
                tested to meet our high standards.
              </p>
              <p>
                Today, we continue to push boundaries, explore new possibilities, and create meaningful 
                connections with our customers through exceptional products and service.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Our team at work"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Behind every great product is a passionate team dedicated to excellence. 
            Get to know the people who make Treo possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
              <p className="text-green-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mt-20 bg-white rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Customer First</h4>
              <p className="text-gray-600">
                Every decision we make is guided by what's best for our customers. 
                Your satisfaction is our success.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Quality Excellence</h4>
              <p className="text-gray-600">
                We never compromise on quality. Every product meets our rigorous 
                standards before reaching you.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Global Impact</h4>
              <p className="text-gray-600">
                We're committed to making a positive impact on communities 
                and the environment worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;