import { useCallback, useState } from "react";
import { useDetectClickOutside } from "../hooks";
import { Button } from "./Button";
import { CloseIcon } from "./CloseIcon";

type AddElementCardProps = {
  onAddElement: (foo: string) => void;
};

export const AddElementCard = ({ onAddElement }: AddElementCardProps) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const handleOutsideClick = () => {
    setOpen(false);
  };

  const ref = useDetectClickOutside({
    onTriggered: handleOutsideClick,
  });

  const handleAdd = useCallback(() => {
    setText("");
    onAddElement(text);
  }, [onAddElement, text]);

  return (
    <div ref={ref} className="py-2 flex flex-col w-full h-fit text-white">
      {open ? (
        <>
          <input
            className="px-2 py-1 w-full rounded text-black"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <div className="mt-2 flex justify-between items-center">
            <Button onClick={handleAdd}>Add card</Button>
            <CloseIcon
              className="hover:stroke-gray-300 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
        </>
      ) : (
        <span className="cursor-pointer" onClick={() => setOpen(true)}>
          Add card
        </span>
      )}
    </div>
  );
};
