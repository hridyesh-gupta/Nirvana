import { useState } from 'react';

interface IceCreamFlavorSelectionModalProps {
  dish: any;
  onClose: () => void;
  onSelectFlavor: (flavor: string) => void;
  flavors: string[];
}

export default function IceCreamFlavorSelectionModal({ dish, onClose, onSelectFlavor, flavors }: IceCreamFlavorSelectionModalProps) {
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);

  const handleConfirm = () => {
    if (selectedFlavor) {
      onSelectFlavor(selectedFlavor);
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
        <h2 className="text-2xl font-bold text-primary mb-6">Select Flavor for {dish.name}</h2>
        <div className="mb-6">
          <label htmlFor="flavor-select" className="block text-gray-700 text-sm font-medium mb-2">Choose your flavor:</label>
          <select
            id="flavor-select"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            onChange={(e) => setSelectedFlavor(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>Select a flavor</option>
            {flavors.map((flavor) => (
              <option key={flavor} value={flavor}>{flavor}</option>
            ))}
          </select>
        </div>
        <button
          onClick={handleConfirm}
          disabled={!selectedFlavor}
          className={`w-full px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg ${selectedFlavor ? 'bg-gradient-to-r from-primary to-secondary hover:scale-105 hover:shadow-xl text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
