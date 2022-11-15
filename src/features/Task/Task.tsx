import { CloseIcon } from "../../components";

type TaskProps = {
  title: string;
  onRemove: () => void;
};

export const Task = ({ title, onRemove }: TaskProps) => {
  return (
    <div className="px-2 py-1 rounded text-black bg-white">
      <span>{title}</span>
      <CloseIcon
        onClick={onRemove}
        className="cursor-pointer hover:stroke-gray-300"
      />
    </div>
  );
};
