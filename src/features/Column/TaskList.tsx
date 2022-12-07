import { useDroppable } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";

import { Task as TaskType } from "../../types";
import { Task } from "../Task";

type ColumnProps = {
  title: string;
  tasks: TaskType[];
};

export const TaskList = ({ title, tasks }: ColumnProps) => {
  const { setNodeRef } = useDroppable({ id: title });

  return (
    <SortableContext id={title} items={tasks} strategy={rectSortingStrategy}>
      <div ref={setNodeRef} className="flex flex-col gap-2 min-h-[2rem]">
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} title={task.title} />
        ))}
      </div>
    </SortableContext>
  );
};
