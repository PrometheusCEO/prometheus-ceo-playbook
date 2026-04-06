import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from './ContactForm';

interface RoofingDemoPageProps {
  // Customizable fields
  businessName?: string;
  city?: string;
  phone?: string;
  email?: string;
  serviceArea?: string[];
  services?: string[];
  isDemo?: boolean;
}

export default function RoofingDemoPage({
  businessName = "Summit Roofing Co.",
  city = "Dallas, TX",
  phone = "(555) 123-4567",
  email = "contact@example.com",
  serviceArea = ["Dallas", "Fort Worth", "Arlington", "Plano", "Irving"],
  services = [
    "Roof Repair",
    "Roof Replacement", 
    "Storm Damage Repair",
    "Emergency Roof Service",
    "Insurance Claim Assistance",
    "Roof Inspections",
    "Gutter Installation",
    "Roof Maintenance"
  ],
  isDemo = true
}: RoofingDemoPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* Demo Banner */}
      {isDemo && (
        <div className="bg-amber-500 text-amber-950 text-center py-2 px-4 font-bold text-sm">
          SAMPLE DEMO PAGE — This is a fictional example for a roofing business
        </div>
      )}

      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900">
              {businessName}
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-600 hover:text-gray-900 font-medium">
                Services
              </a>
              <a href="#service-area" className="text-gray-600 hover:text-gray-900 font-medium">
                Service Area
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">
                Contact
              </a>
            </div>
            <a 
              href="#contact" 
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-lg transition"
            >
              Free Estimate
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/demo-images/niches/roofing.png"
            alt="Roof repair and installation collage showing professional roofing work"
            fill
            className="object-cover opacity-70"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 to-gray-800/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            {isDemo && (
              <span className="inline-block bg-amber-500/30 border border-amber-500/40 text-amber-100 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Example Roofing Landing Page
              </span>
            )}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Professional Roofing Services in {city}
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl">
              Quality roof repair, replacement, and maintenance with honest pricing and reliable service. 
              Serving {city} and surrounding areas with over 15 years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg text-lg text-center transition"
              >
                Request Free Estimate
              </a>
              <a 
                href="#services" 
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg text-lg text-center border border-white/20 transition"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">Free</div>
              <div className="text-gray-600">Estimates & Inspections</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">Licensed & Insured</div>
              <div className="text-gray-600">Full Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Roofing Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive roofing solutions for residential and commercial properties in {city}.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition"
              >
                <div className="text-amber-500 text-2xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service}</h3>
                <p className="text-gray-600">
                  Professional {service.toLowerCase()} with quality materials and expert craftsmanship.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section id="service-area" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving {city} & Surrounding Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide roofing services throughout the greater {city} metropolitan area.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {serviceArea.map((area, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg p-4 text-center border border-gray-200"
                  >
                    <div className="font-medium text-gray-900">{area}</div>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-6">
                Not sure if we service your area? Contact us to check availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for a New Roof?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate for your roofing project. We'll assess your needs and provide honest recommendations.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-amber-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-lg transition"
          >
            Get Your Free Estimate
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contact Us for a Free Estimate
              </h2>
              <p className="text-gray-600">
                Fill out the form below or give us a call. We'll respond within 24 hours.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ContactForm 
                businessName={businessName}
                serviceType="Roofing Services"
                source="roofing-demo"
                isDemo={isDemo}
              />
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="text-amber-500 text-2xl mr-4">📞</div>
                      <div>
                        <div className="font-bold text-gray-900">Phone</div>
                        <div className="text-gray-600 text-xl">{phone}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-amber-500 text-2xl mr-4">✉️</div>
                      <div>
                        <div className="font-bold text-gray-900">Email</div>
                        <div className="text-gray-600">{email}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-amber-500 text-2xl mr-4">📍</div>
                      <div>
                        <div className="font-bold text-gray-900">Service Area</div>
                        <div className="text-gray-600">{city} and surrounding communities</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">What to Expect</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="text-amber-500 mr-2">✓</span>
                      Free, no-obligation estimate
                    </li>
                    <li className="flex items-center">
                      <span className="text-amber-500 mr-2">✓</span>
                      Licensed & insured professionals
                    </li>
                    <li className="flex items-center">
                      <span className="text-amber-500 mr-2">✓</span>
                      Quality materials & workmanship
                    </li>
                    <li className="flex items-center">
                      <span className="text-amber-500 mr-2">✓</span>
                      Clear communication throughout
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-xl font-bold mb-4">{businessName}</div>
            <p className="text-gray-400 mb-6">
              Professional roofing services in {city} • {phone} • {email}
            </p>
            {isDemo && (
              <div className="text-gray-500 text-sm max-w-2xl mx-auto border-t border-gray-800 pt-6 mt-6">
                <p>
                  <strong>Note:</strong> This is a sample demo page created by Prometheus CEO to show the type of simple landing page we can build for roofing businesses. 
                  The contact form submits to Prometheus CEO for demonstration. In a real client version, it would send leads directly to the business owner's email.
                </p>
                <p className="mt-3">
                  For a real, functional version with your business information, contact Prometheus CEO.
                </p>
              </div>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}