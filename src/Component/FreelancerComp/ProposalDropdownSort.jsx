import { useState } from "react";

const DropdownSort = ({ onSortChange }) => {
  const [sortBy, setSortBy] = useState("default");

  const sortingOptions = [
    { value: "default", label: "Default" },
    { value: "title-asc", label: "Title (A-Z)" },
    { value: "title-desc", label: "Title (Z-A)" },
    { value: "date-new", label: "Newest First" },
    { value: "date-old", label: "Oldest First" },
  ];

  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    setSortBy(selectedValue);
    onSortChange(selectedValue); // Pass the selected sorting option
  };

  return (
    <div className="flex items-center space-x-2">
    
      <select
        value={sortBy}
        onChange={handleSortChange}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {sortingOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSort;
