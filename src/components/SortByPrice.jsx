"use client";
import { useState } from "react";
import { FaSort } from "react-icons/fa";

const SortByPrice = ({ onSort }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Sort By");

  const handleSelect = (label, value) => {
    setSelected(label);
    setOpen(false);
onSort && onSort(value);
  };

  return (
    <div className="relative w-48">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between border px-4 py-2 rounded-lg cursor-pointer bg-blue-900 text-white">
        <span>{selected}</span>
        <FaSort className="text-green-400" />
      </div>

      {open && (
        <div className="absolute top-full left-0 w-full bg-cyan-500 border rounded-lg shadow mt-2 z-50">
          <div
            onClick={() => handleSelect("Price Low to High", "asc")}
            className="px-4 py-2 hover:bg-red-800 cursor-pointer">
            Price Low to High
          </div>

          <div
            onClick={() => handleSelect("Price High to Low", "desc")}
            className="px-4 py-2 hover:bg-amber-300 cursor-pointer">
            Price High to Low
          </div>
        </div>
      )}
    </div>
  );
};

export default SortByPrice;