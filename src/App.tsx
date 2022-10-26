import { useState } from "react";

import { Column } from "./features/Column";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative p-6 h-full flex flex-col grow   bg-black">
      <h1 className="mb-4 text-white text-2xl font-bold">Deals</h1>
      <div className="relative flex flex-1">
        <div className="absolute inset-0 grow-1 whitespace-nowrap overflow-x-auto overflow-y-hidden">
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
        </div>
      </div>
    </div>
  );
}

export default App;
