'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ReservationButton() {
  return (
    <Link href="/reservations">
      <button
        className="fixed bottom-8 right-8 w-20 h-20 bg-red-400 hover:bg-red-500 rounded-full shadow-2xl shadow-red-400/50 flex items-center justify-center text-white text-3xl font-bold transition-all duration-300 hover:scale-110 z-50 group"
        style={{ fontFamily: 'serif' }}
      >
        <div className="transform group-hover:rotate-12 transition-transform">
          予約
        </div>
      </button>
    </Link>
  );
}