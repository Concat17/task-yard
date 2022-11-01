import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Board } from "./features/Board";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="relative p-6 h-full flex flex-col grow bg-black">
        <h1 className="mb-4 text-white text-2xl font-bold">Deals</h1>
        <div className="relative flex flex-1">
          <Board />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
