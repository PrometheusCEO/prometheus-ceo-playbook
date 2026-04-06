"use client";

import React, { useState } from 'react';

interface ContactFormProps {
  businessName?: string;
  serviceType?: string;
  source?: string;
  isDemo?: boolean;
}

export default function ContactForm({ 
  businessName = "",
  serviceType = "Roofing Services",
  source = "roofing-demo",
  isDemo = true
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    businessName: businessName
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim()) {
      setErrorMessage('Name is required');
      setStatus('error');
      return;
    }
    
    if (!formData.email.trim()) {
      setErrorMessage('Email is required');
      setStatus('error');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          serviceType,
          source
        }),
      });

      const result = await response.json();

      if (result.ok) {
        setStatus('success');
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          businessName: businessName
        });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
      
      {isDemo && (
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-800">
            <strong>Demo Note:</strong> This form submits to Prometheus CEO for demonstration purposes. 
            In a real client version, it would send leads directly to the business owner's email.
          </p>
        </div>
      )}
      
      {status === 'success' ? (
        <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <div className="text-green-500 text-2xl mr-3">✓</div>
            <div>
              <h4 className="font-bold text-green-800">Message Sent Successfully!</h4>
              <p className="text-green-700 mt-1">
                Thank you for your inquiry. We'll respond as soon as possible.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 text-sm text-green-700 underline hover:text-green-900"
              >
                Send another message
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="Your name"
              disabled={status === 'submitting'}
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="your@email.com"
              disabled={status === 'submitting'}
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="(555) 123-4567"
              disabled={status === 'submitting'}
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent h-32"
              placeholder="Tell us about your roofing needs..."
              disabled={status === 'submitting'}
            />
          </div>
          
          {status === 'error' && errorMessage && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700">{errorMessage}</p>
            </div>
          )}
          
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-400 text-white font-bold py-4 rounded-lg text-lg transition disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Request Free Estimate'
            )}
          </button>
          
          <p className="text-xs text-gray-500 text-center">
            * Required fields
          </p>
        </form>
      )}
    </div>
  );
}