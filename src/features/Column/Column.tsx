import { Task } from "../Task";

export const Column = () => {
  return (
    <div className="inline-block mx-2   w-[250px] px-2 py-2 rounded bg-violet-800 text-white">
      <h2 className="mb-4 font-bold">Name</h2>
      <div className="flex flex-col gap-2">
        <Task name={"task1"} />
        <Task name={"task2"} />
        <Task name={"task3"} />
      </div>
    </div>
  );
};
