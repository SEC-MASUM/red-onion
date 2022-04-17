import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-[400px] flex justify-center items-center">
      <button
        type="button"
        class="bg-indigo-500 pr-10 py-2 text-white font-bold text-2xl flex justify-between items-center rounded-xl"
        disabled
      >
        <svg class="animate-spin h-5 w-5 mr-5" viewBox="0 0 24 24"></svg>
        Processing...
      </button>
    </div>
  );
};

export default Loading;
