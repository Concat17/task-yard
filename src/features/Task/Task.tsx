type TaskProps = {
  name: string;
};

export const Task = ({ name }: TaskProps) => {
  return <div className="px-2 py-1 rounded text-black bg-white">{name}</div>;
};
