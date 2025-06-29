import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our products or services? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <div className="px-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Contact Information</h3>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 bg-green-100 rounded-lg">
                  <Mail className="h-5 sm:h-6 w-5 sm:w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600 text-sm sm:text-base">support@givmi.com</p>
                  <p className="text-gray-600 text-sm sm:text-base">sales@givmi.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 bg-green-100 rounded-lg">
                  <Phone className="h-5 sm:h-6 w-5 sm:w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600 text-sm sm:text-base">+1 (555) 123-4567</p>
                  <p className="text-gray-600 text-sm sm:text-base">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 bg-green-100 rounded-lg">
                  <MapPin className="h-5 sm:h-6 w-5 sm:w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Visit Us</h4>
                  <p className="text-gray-600 text-sm sm:text-base">123 Commerce Street</p>
                  <p className="text-gray-600 text-sm sm:text-base">New York, NY 10001</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 sm:mt-12">
              <div className="bg-gray-200 rounded-2xl h-48 sm:h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 sm:h-12 w-8 sm:w-12 text-gray-400 mx-auto mb-2 sm:mb-4" />
                  <p className="text-gray-500 text-sm sm:text-base">Interactive Map</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="px-4 mt-8 lg:mt-0">
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Send us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8 sm:py-12">
                  <CheckCircle className="h-12 sm:h-16 w-12 sm:w-16 text-green-500 mx-auto mb-3 sm:mb-4" />
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="sales">Sales Question</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <Send className="h-4 sm:h-5 w-4 sm:w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;