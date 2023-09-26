import React from 'react'

const Loading = () => {
  return (
    <div class="flex gap-2 justify-center items-center h-screen">
      <div class="w-5 h-5 rounded-full animate-pulse bg-slate-400"></div>
      <div class="w-5 h-5 rounded-full animate-pulse bg-slate-400"></div>
      <div class="w-5 h-5 rounded-full animate-pulse bg-slate-400"></div>
    </div>
  );
}

export default Loading
