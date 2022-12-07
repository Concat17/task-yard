import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
} from "@dnd-kit/core";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { AddElementCard } from "../../components";
import { SortableOverlay } from "../../components/SortableOverlay";
import { Column } from "../Column";
import { Task } from "../Task";
import {
  addColumn,
  findTaskById,
  selectColumns,
  swapTasks,
} from "./boardSlice";

export const Board = () => {
  const columns = useAppSelector(selectColumns);
  const dispatch = useAppDispatch();

  const [activeId, setActiveId] = useState<string | null>(null);

  // active task is an element which appears while dragging task
  const activeTask = useAppSelector((state) =>
    findTaskById(state, activeId ?? "")
  );

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;

    setActiveId(active.id.toString());
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    console.log(
      active.data.current?.sortable.containerId,
      over?.data.current?.sortable.containerId
    );
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const { id } = active;

    if (!over?.id) return;

    const activeContainerId = event.active.data.current?.sortable?.containerId;
    const overContainerId =
      event.over?.data.current?.sortable?.containerId || over.id;

    dispatch(
      swapTasks({ activeContainerId, overContainerId, activeId: id.toString() })
    );
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={() => {
        setActiveId(null);
      }}
    >
      <div className="absolute inset-0 grow-1 whitespace-nowrap overflow-x-auto overflow-y-hidden">
        <div className="flex">
          {columns.map(({ title }) => (
            <Column key={title} title={title} />
          ))}
          <AddElementCard
            onAddElement={(title: string) => dispatch(addColumn(title))}
          />
        </div>
      </div>
      <SortableOverlay>
        {activeTask ? (
          <Task id={activeTask.id} title={activeTask.title} />
        ) : null}
      </SortableOverlay>
    </DndContext>
  );
};
