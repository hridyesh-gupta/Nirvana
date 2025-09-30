import { useState } from 'react';

interface SauceSelectionModalProps {
  dish: any;
  onClose: () => void;
  onSelectSauce: (sauce: string) => void;
  sauces: string[];
}

export default function SauceSelectionModal({ dish, onClose, onSelectSauce, sauces }: SauceSelectionModalProps) {
  const [selectedSauce, setSelectedSauce] = useState<string | null>(null);

  const handleConfirm = () => {
    if (selectedSauce) {
      onSelectSauce(selectedSauce);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <i className="ri-close-line text-2xl"></i>
        </button>
        <h2 className="text-2xl font-bold text-primary mb-6">Select Sauce for {dish.name}</h2>
        <div className="mb-6">
          <label htmlFor="sauce-select" className="block text-gray-700 text-sm font-medium mb-2">Choose your sauce:</label>
          <select
            id="sauce-select"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            onChange={(e) => setSelectedSauce(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>Select a sauce</option>
            {sauces.map((sauce) => (
              <option key={sauce} value={sauce}>{sauce}</option>
            ))}
          </select>
        </div>
        <button
          onClick={handleConfirm}
          disabled={!selectedSauce}
          className={`w-full px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg ${selectedSauce ? 'bg-gradient-to-r from-primary to-secondary hover:scale-105 hover:shadow-xl text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
