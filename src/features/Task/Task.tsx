import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CloseIcon } from "../../components";

type TaskProps = {
  id: string;
  title: string;
  onRemove?: () => void;
};

export const Task = ({ id, title, onRemove }: TaskProps) => {
  const {
    listeners,
    attributes,
    setNodeRef,
    transition,
    transform,
    isDragging,
  } = useSortable({
    id,
  });

  const style = {
    opacity: isDragging ? 0.4 : undefined,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="px-2 py-1 rounded text-black bg-white"
    >
      <span>{title}</span>
      <CloseIcon
        onClick={onRemove}
        className="cursor-pointer hover:stroke-gray-300"
      />
    </div>
  );
};
