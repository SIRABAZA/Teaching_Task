import React from "react";

export default function Spinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
      <span className="block w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></span>
    </div>
  );
}
