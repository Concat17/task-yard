import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { AddElementCard, CloseIcon, EditableInput } from "../../components";
import { addTask, renameColumn, selectSelectColumnByTitle } from "../Board";
import { TaskList } from "./TaskList";

type ColumnProps = {
  title: string;
};

export const Column = ({ title }: ColumnProps) => {
  const dispatch = useAppDispatch();
  const column = useAppSelector((state) =>
    selectSelectColumnByTitle(state, title)
  );

  if (!column) return <></>;

  //TODO: move away or rewrite
  const curriedAddTask =
    (columnTitle: string): ((foo: string) => void) =>
    (taskTitle: string) =>
      dispatch(addTask({ columnTitle, taskTitle }));

  const addNewTask = curriedAddTask(title);

  const curriedRename =
    (columnTitle: string): ((foo: string) => void) =>
    (newTitle: string) =>
      dispatch(renameColumn({ columnTitle, newTitle }));

  const rename = curriedRename(title);

  return (
    <div className="inline-block mx-2 w-[250px] h-fit px-2 py-2 rounded bg-violet-800 text-white">
      <div className="flex">
        <h2 className="mb-4 grow font-bold">
          <EditableInput text={title} onChange={rename} />
        </h2>

        <CloseIcon
          // onClick={() => dispatch(deleteColumn(title))}
          className="cursor-pointer hover:stroke-gray-300"
        />
      </div>
      <TaskList title={column.title} tasks={column.tasks} />
      <AddElementCard onAddElement={addNewTask} />
    </div>
  );
};
