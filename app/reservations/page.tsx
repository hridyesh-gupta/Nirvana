'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [reservationNumber, setReservationNumber] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const successMessageRef = useRef<HTMLDivElement>(null);
  const errorMessageRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'requests' && value.length > 500) return;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error message when user starts typing
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  // Auto-focus name field on page load
  useEffect(() => {
    const nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
    if (nameInput) {
      nameInput.focus();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous messages
    setErrorMessage(null);
    setSuccessMessage(null);
    setReservationNumber(null);
    
    // Client-side validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      setErrorMessage('Please fill in all required fields');
      if (errorMessageRef.current) {
        errorMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // Validate phone number
    if (!formData.phone.trim()) {
      setErrorMessage('Phone number is required');
      if (errorMessageRef.current) {
        errorMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // Validate date is not in the past (aligned with API's Europe/Zurich timezone)
    if (formData.date) {
      // Parse date using local components
      const [year, month, day] = formData.date.split('-').map(Number);
      const [hours, minutes] = (formData.time || '00:00').split(':').map(Number);
      const selectedDate = new Date(year, month - 1, day, hours, minutes);
      
      // Convert both to Europe/Zurich timezone for comparison
      const now = new Date();
      const nowInZurich = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Zurich' }));
      const selectedInZurich = new Date(selectedDate.toLocaleString('en-US', { timeZone: 'Europe/Zurich' }));
      
      if (selectedInZurich < nowInZurich) {
        setErrorMessage('Reservation date and time cannot be in the past');
        if (errorMessageRef.current) {
          errorMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return;
      }
    }

    setIsSubmitting(true);
    
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
        const result = await response.json();
        
        // Extract reservation details from response
        const reservationNum = result.reservationNumber;
        setReservationNumber(reservationNum);
        setSuccessMessage(`Reservation confirmed! Your reservation number is ${reservationNum}. We will contact you shortly to confirm.`);
        
        // Clear form
        setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '2', requests: '' });
        setErrorMessage(null);
        
        // Scroll to success message
        setTimeout(() => {
          if (successMessageRef.current) {
            successMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // Parse error from API response
        const errorData = await response.json();
        let errorMsg = 'Failed to submit reservation. Please try again.';
        
        if (errorData.error) {
          errorMsg = errorData.error;
        } else if (response.status === 400) {
          errorMsg = 'Invalid reservation data. Please check your information and try again.';
        } else if (response.status === 409) {
          errorMsg = 'Reservation number conflict. Please try again.';
        } else if (response.status === 500) {
          errorMsg = 'Server error. Please try again later.';
        }
        
        setErrorMessage(errorMsg);
        setSuccessMessage(null);
        setReservationNumber(null);
        
        // Scroll to error message
        setTimeout(() => {
          if (errorMessageRef.current) {
            errorMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your connection and try again.');
      setSuccessMessage(null);
      setReservationNumber(null);
      console.error('Network error during reservation submission:', error);
      
      // Scroll to error message
      setTimeout(() => {
        if (errorMessageRef.current) {
          errorMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
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
            {/* Success Message */}
            {successMessage && (
              <div ref={successMessageRef} className="bg-green-50 border-2 border-green-500 text-green-800 rounded-xl p-6 mb-6">
                <div className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-2xl mr-3 mt-1"></i>
                  <div className="flex-1">
                    <p className="font-semibold mb-2">{successMessage}</p>
                    {reservationNumber && (
                      <div className="mt-3 p-3 bg-green-100 rounded-lg">
                        <p className="text-sm font-medium mb-1">Reservation Number:</p>
                        <p className="text-xl font-bold">{reservationNumber}</p>
                      </div>
                    )}
                    <p className="text-sm mt-3 opacity-90">Check your email for confirmation details.</p>
                    <button
                      type="button"
                      onClick={() => {
                        setSuccessMessage(null);
                        setReservationNumber(null);
                      }}
                      className="mt-4 text-sm underline hover:no-underline"
                    >
                      Make Another Reservation
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div ref={errorMessageRef} className="bg-red-50 border-2 border-red-500 text-red-800 rounded-xl p-6 mb-6">
                <div className="flex items-start">
                  <i className="ri-error-warning-fill text-2xl mr-3 mt-1"></i>
                  <div className="flex-1">
                    <p className="font-semibold mb-2">{errorMessage}</p>
                    <p className="text-sm mt-2 opacity-90">Please check the form and try again.</p>
                    <button
                      type="button"
                      onClick={() => setErrorMessage(null)}
                      className="mt-4 text-sm underline hover:no-underline"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            )}

            <form id="kaiseki-reservation" onSubmit={handleSubmit} className={`space-y-4 ${isSubmitting ? 'opacity-75' : ''}`}>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm mb-2">Date *</label>
                <DatePicker
                  selected={formData.date ? (() => {
                    // Parse using local date components to avoid timezone issues
                    const [year, month, day] = formData.date.split('-').map(Number);
                    return new Date(year, month - 1, day);
                  })() : null}
                  onChange={(date: Date | null) => {
                    if (date) {
                      // Build YYYY-MM-DD string using local date parts to avoid timezone shift
                      const y = date.getFullYear();
                      const m = String(date.getMonth() + 1).padStart(2, '0');
                      const d = String(date.getDate()).padStart(2, '0');
                      setFormData(prev => ({ ...prev, date: `${y}-${m}-${d}` }));
                    } else {
                      setFormData(prev => ({ ...prev, date: '' }));
                    }
                  }}
                  className="w-full bg-gray-50 border border-primary/30 rounded px-3 py-2 text-gray-800 text-sm focus:border-primary focus:outline-none pr-8"
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a date"
                  minDate={new Date()}
                  filterDate={(date: Date) => {
                    // Compare only calendar days, not full Date objects
                    const today = new Date();
                    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                    const day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                    return day >= startOfToday;
                  }}
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
                <label className="block text-gray-700 text-sm mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-primary/30 rounded px-3 py-2 text-gray-800 text-sm focus:border-primary focus:outline-none"
                  required
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
                className="w-auto mx-auto bg-primary hover:bg-secondary text-white px-3 py-3 rounded font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Submitting...
                  </>
                ) : (
                  'Reserve Table'
                )}
              </button>
            </form>
          </div>
        </div>
        <div><br /></div>
      </main>
      <Footer />
    </div>
  );
}
