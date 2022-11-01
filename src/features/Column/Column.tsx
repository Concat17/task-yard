import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { AddElementCard } from "../../components";
import { CloseIcon } from "../../components/CloseIcon";
import { addTask, deleteColumn, selectSelectColumnByTitle } from "../Board";
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

  const foo = curriedAddTask(title);
  return (
    <div className="inline-block mx-2 w-[250px] h-fit px-2 py-2 rounded bg-violet-800 text-white">
      <div className="flex justify-between">
        <h2 className="mb-4 font-bold">{title}</h2>{" "}
        <CloseIcon
          onClick={() => dispatch(deleteColumn(title))}
          className="cursor-pointer hover:stroke-gray-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        {/* <Task name={"fdf"} /> */}
        {column.tasks.map((task, i) => (
          <Task key={i} name={task.title} />
        ))}
      </div>

      <AddElementCard onAddElement={foo} />
    </div>
  );
};
