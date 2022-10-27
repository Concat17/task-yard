import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useCallback, useState } from "react";

import { useAppDispatch } from "../app/hooks";
import { Button } from "./Button";
import { CloseIcon } from "./CloseIcon";

type AddElementCardProps = {
  onAddElement: ActionCreatorWithPayload<string, string>;
};

export const AddElementCard = ({ onAddElement }: AddElementCardProps) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleAdd = useCallback(() => {
    setText("");
    setOpen(false);
    dispatch(onAddElement(text));
  }, [dispatch, onAddElement, text]);

  return (
    <div className="mx-2 w-[250px] px-2 py-2 flex flex-col h-fit text-white bg-violet-800">
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
              className="cursor-pointer hover:stroke-gray-300"
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
