import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { AddElementCard } from "../../components";
import { Column } from "../Column";
import { addColumn, selectColumns } from "./boardSlice";

export const Board = () => {
  const columns = useAppSelector(selectColumns);
  const dispatch = useAppDispatch();
  return (
    <div className="absolute inset-0 grow-1 whitespace-nowrap overflow-x-auto overflow-y-hidden">
      <div className="flex">
        {columns.map(({ title }) => (
          <Column key={title} title={title} />
        ))}
        <AddElementCard onAddElement={addColumn} />
      </div>

      {/* <button onClick={() => dispatch(addColumn("test"))}>Add column</button> */}
    </div>
  );
};
