import { useCallback, useState } from "react";

import { Button } from "./Button";
import { CloseIcon } from "./CloseIcon";

type AddElementCardProps = {
  // onAddElement: ActionCreatorWithPayload<string, string>;
  onAddElement: (foo: string) => void;
};

export const AddElementCard = ({ onAddElement }: AddElementCardProps) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const handleAdd = useCallback(() => {
    setText("");
    setOpen(false);
    console.log("add");
    onAddElement(text);
  }, [onAddElement, text]);

  return (
    <div className=" py-2 flex flex-col h-fit text-white">
      {open ? (
        <>
          <input
            className="px-2 py-1 rounded text-black"
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
        <div className="cursor-pointer" onClick={() => setOpen(true)}>
          Add card
        </div>
      )}
    </div>
  );
};
