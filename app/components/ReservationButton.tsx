'use client';

import { useState } from 'react';

export default function ReservationButton() {
  const [isFormOpen, setIsFormOpen] = useState(false);
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
        setTimeout(() => setIsFormOpen(false), 2000);
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
    <>
      <button
        onClick={() => setIsFormOpen(true)}
        className="fixed bottom-8 right-8 w-20 h-20 bg-red-400 hover:bg-red-500 rounded-full shadow-2xl shadow-red-400/50 flex items-center justify-center text-white text-3xl font-bold transition-all duration-300 hover:scale-110 z-50 group"
        style={{ fontFamily: 'serif' }}
      >
        <div className="transform group-hover:rotate-12 transition-transform">
          予約
        </div>
      </button>

      {isFormOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-black/90 border-2 border-red-400/30 rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-light text-white" style={{ fontFamily: 'serif' }}>
                  Reservation
                </h3>
                <div className="text-red-400">予約</div>
              </div>
              <button
                onClick={() => setIsFormOpen(false)}
                className="w-8 h-8 rounded-full border border-red-400/30 hover:border-red-400 flex items-center justify-center text-red-400 hover:bg-red-400/10 transition-colors"
              >
                ×
              </button>
            </div>

            <form id="kaiseki-reservation" onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 border border-red-400/30 rounded px-3 py-2 text-white text-sm focus:border-red-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 border border-red-400/30 rounded px-3 py-2 text-white text-sm focus:border-red-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 border border-red-400/30 rounded px-3 py-2 text-white text-sm focus:border-red-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-red-400/30 rounded px-3 py-2 text-white text-sm focus:border-red-400 focus:outline-none pr-8"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Time *</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-red-400/30 rounded px-3 py-2 text-white text-sm focus:border-red-400 focus:outline-none pr-8"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">Number of Guests</label>
                <div className="relative">
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-red-400/30 rounded px-3 py-2 text-white text-sm focus:border-red-400 focus:outline-none appearance-none pr-8"
                  >
                    {[...Array(8)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-arrow-down-s-line text-red-400"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">Special Requests (Max 500 characters)</label>
                <textarea
                  name="requests"
                  value={formData.requests}
                  onChange={handleInputChange}
                  maxLength={500}
                  rows={3}
                  className="w-full bg-black/50 border border-red-400/30 rounded px-3 py-2 text-white text-sm focus:border-red-400 focus:outline-none resize-none"
                  placeholder="Dietary restrictions, allergies, special occasions..."
                />
                <div className="text-right text-gray-500 text-xs mt-1">
                  {formData.requests.length}/500
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-400 hover:bg-red-500 text-white py-3 rounded font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? 'Submitting...' : 'Reserve Table'}
              </button>

              {submitStatus && (
                <div className={`text-center text-sm p-3 rounded ${
                  submitStatus.includes('success') ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'
                }`}>
                  {submitStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}