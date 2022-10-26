import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 flex flex-col h-full bg-black ">
      <h1 className="text-white">Deals</h1>
    </div>
  );
}

export default App;
