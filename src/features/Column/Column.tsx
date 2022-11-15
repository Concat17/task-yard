import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { AddElementCard, CloseIcon, EditableInput } from "../../components";

import {
  addTask,
  deleteColumn,
  removeTask,
  renameColumn,
  selectSelectColumnByTitle,
} from "../Board";
import { Task } from "../Task";

type ColumnProps = {
  title: string;
};

export const Column = ({ title }: ColumnProps) => {
  const dispatch = useAppDispatch();
  const column = useAppSelector((state) =>
    selectSelectColumnByTitle(state, title)
  );

  if (!column) return <></>;

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
          onClick={() => dispatch(deleteColumn(title))}
          className="cursor-pointer hover:stroke-gray-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        {column.tasks.map((task, i) => (
          <Task
            key={i}
            title={task.title}
            onRemove={() =>
              dispatch(
                removeTask({ columnTitle: title, taskTitle: task.title })
              )
            }
          />
        ))}
      </div>

      <AddElementCard onAddElement={addNewTask} />
    </div>
  );
};
