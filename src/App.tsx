import { Board } from "./features/Board";

function App() {
  return (
    <div className="relative p-6 h-full flex flex-col grow bg-black">
      <h1 className="mb-4 text-white text-2xl font-bold">Deals</h1>
      <div className="relative flex flex-1">
        <Board />
      </div>
    </div>
  );
}

export default App;
