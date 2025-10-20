'use client';

interface RefreshButtonProps {
  sessionId: string;
}

export default function RefreshButton({ sessionId }: RefreshButtonProps) {
  return (
    <button 
      onClick={() => window.location.reload()} 
      className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all"
    >
      Refresh Page
    </button>
  );
}
