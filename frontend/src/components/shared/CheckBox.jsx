import React from "react";

export default function CheckBox({ checked, onChange }) {
  return (
    <label className="relative inline-block cursor-pointer group">
      <input
        type="checkbox"
        className="hidden peer"
        checked={checked}
        onChange={onChange}
      />
      <div
        className="h-6 w-6 border-2 border-gray-300 hover:border-gray-500 rounded-md flex items-center justify-center transition-all
         peer-checked:bg-[#5087F8] peer-checked:border-[#a6b7da] peer-checked:text-white 
          peer-checked:hover:bg-[#2469F6] peer-checked:hover:border-[#2469F6] 
          active:ring-2 active:ring-[#2469F6]"
      >
        <span
          className="transition-opacity duration-100 text-white
           group-checked:text-white hover:text-gray-400 group-checked:hover:text-white"
        >
          ✓
        </span>
      </div>
    </label>
  );
}
