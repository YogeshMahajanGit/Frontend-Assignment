import React from "react";

export default function Button({ label }) {
  return (
    <button className="w-[340px] h-10 rounded py-[10px] px-5 bg-[#FFCE22] hover:bg-[#FFD84D]">
      {label}
    </button>
  );
}
