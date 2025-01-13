import { useState } from 'react';

const DropdownBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleBox}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Box
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-2 bg-gray-200 w-full p-4 rounded"
          style={{
            width: 'auto',
          }}
        >
          This is a dropdown box!
        </div>
      )}
    </div>
  );
};

export default DropdownBox;
