import React, { useState } from "react";

function DynamicClassExample() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="p-10">
      <button
        className={`${
          isActive ? "bg-green-500" : "bg-gray-500"
        } px-4 py-2 rounded`}
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? "활성화" : "비활성화"}
      </button>
    </div>
  );
}

export default DynamicClassExample;
