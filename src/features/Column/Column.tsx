import { useAppDispatch } from "../../app/hooks";
import { CloseIcon } from "../../components/CloseIcon";
import { deleteColumn } from "../Board";
import { Task } from "../Task";

type ColumnProps = {
  title: string;
};

export const Column = ({ title }: ColumnProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="inline-block mx-2 w-[250px] px-2 py-2 rounded bg-violet-800 text-white">
      <h2 className="mb-4 font-bold">{title}</h2>
      <div className="flex flex-col gap-2">
        <Task name={"fdf"} />
        {/* {count.map((v, i) => (
          <Task key={i} name={v} />
        ))}
        <button onClick={() => dispatch(add())}>Add</button> */}
      </div>
      <CloseIcon
        onClick={() => dispatch(deleteColumn(title))}
        className="cursor-pointer hover:stroke-gray-300"
      />
    </div>
  );
};
