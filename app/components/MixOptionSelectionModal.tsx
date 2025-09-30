import { useState } from 'react';

interface MixOptionSelectionModalProps {
  dish: any;
  onClose: () => void;
  onSelectMixOption: (mixOption: string) => void;
  mixOptions: string[];
}

export default function MixOptionSelectionModal({ dish, onClose, onSelectMixOption, mixOptions }: MixOptionSelectionModalProps) {
  const [selectedMixOption, setSelectedMixOption] = useState<string | null>(null);

  const handleConfirm = () => {
    if (selectedMixOption) {
      onSelectMixOption(selectedMixOption);
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
        <h2 className="text-2xl font-bold text-primary mb-6">Select Mix Option for {dish.name}</h2>
        <div className="mb-6">
          <label htmlFor="mix-option-select" className="block text-gray-700 text-sm font-medium mb-2">Choose your mix option:</label>
          <select
            id="mix-option-select"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            onChange={(e) => setSelectedMixOption(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>Select a mix option</option>
            {mixOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <button
          onClick={handleConfirm}
          disabled={!selectedMixOption}
          className={`w-full px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg ${selectedMixOption ? 'bg-gradient-to-r from-primary to-secondary hover:scale-105 hover:shadow-xl text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
