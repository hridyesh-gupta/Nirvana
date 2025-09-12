'use client';

import { useState } from 'react';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    requests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'requests' && value.length > 500) return;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      setSubmitStatus('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          id: 'kaiseki-reservation',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          guests: formData.guests,
          requests: formData.requests
        })
      });
      
      if (response.ok) {
        setSubmitStatus('Reservation request submitted successfully! We will contact you to confirm.');
        setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '2', requests: '' });
      } else {
        setSubmitStatus('Failed to submit reservation. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white-100">
      <Navigation />
      <main className="pt-1">
        <div className="w-full">
          {/* Centralized Heading for Reservation Page */}
          <div className="text-center py-20 px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-light mb-6 text-primary font-['fairdisplay']">
              Table Reservation
            </h1>
            <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
          </div>
          
          <div className="bg-white rounded-2xl p-8 border border-primary max-w-3xl mx-auto">
            <form id="kaiseki-reservation" onSubmit={handleSubmit} className="space-y-4">


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm mb-2">Date *</label>
                <DatePicker
                  selected={formData.date ? new Date(formData.date) : null}
                  onChange={(date: Date | null) => setFormData(prev => ({ ...prev, date: date ? date.toISOString().split('T')[0] : '' }))}
                  className="w-full bg-gray-50 border border-primary/30 rounded px-3 py-2 text-gray-800 text-sm focus:border-primary focus:outline-none pr-8"
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a date"
                  required
                  wrapperClassName="w-full"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">Time *</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-primary/30 rounded px-3 py-2 text-gray-800 text-sm focus:border-primary focus:outline-none pr-8"
                  required
                />
              </div>
            </div>


              <div>
                <label className="block text-gray-700 text-sm mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-primary/30 rounded px-3 py-2 text-gray-800 text-sm focus:border-primary focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-primary/30 rounded px-3 py-2 text-gray-800 text-sm focus:border-primary focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-primary/30 rounded px-3 py-2 text-gray-800 text-sm focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">Number of Guests</label>
                <div className="relative">
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-primary/30 rounded px-3 py-2 text-gray-800 text-sm focus:border-primary focus:outline-none appearance-none pr-8"
                  >
                    {[...Array(8)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-arrow-down-s-line text-secondary"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-2">Special Requests (Max 500 characters)</label>
                <textarea
                  name="requests"
                  value={formData.requests}
                  onChange={handleInputChange}
                  maxLength={500}
                  rows={3}
                  className="w-full bg-gray-50 border border-primary/30 rounded px-3 py-2 text-gray-800 text-sm focus:border-primary focus:outline-none resize-none"
                  placeholder="Dietary restrictions, allergies, special occasions..."
                />
                <div className="text-right text-gray-500 text-xs mt-1">
                  {formData.requests.length}/500
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-auto mx-auto bg-primary hover:bg-secondary text-white px-3 py-3 rounded font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? 'Submitting...' : 'Reserve Table'}
              </button>

              {submitStatus && (
                <div className={`text-center text-sm mb-6 p-4 rounded ${submitStatus.includes('success') ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700'}`}>
                  {submitStatus}
                </div>
              )}
            </form>
          </div>
        </div>
        <div><br /></div>
      </main>
      <Footer />
    </div>
  );
}
