import React from "react";

function Text({ heading, icon, placeholder, setData }) {
  return (
    <div className="flex flex-col h-full text-white mt-2">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-4">
        <img src={icon} alt={heading} className="w-10 h-10" />
        <h2 className="text-lg font-semibold">{heading}</h2>
      </div>

      {/* Textarea */}
      <textarea
        onChange={(e) => setData(e.target.value)}
        className="flex-1 w-full bg-gray-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 custom-scrollbar"
        placeholder={placeholder || "Enter your text here..."}
      />
    </div>
  );
}

export default Text;