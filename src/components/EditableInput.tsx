import { useCallback, useState } from "react";

import { useDetectClickOutside } from "../hooks";

type EditableInputProps = {
  text: string;
  onChange: (text: string) => void;
};

export const EditableInput = ({
  text: initText,
  onChange,
}: EditableInputProps) => {
  const [text, setText] = useState(initText ?? "");
  const [open, setOpen] = useState(false);

  const handleOutsideClick = useCallback(() => {
    setOpen(false);
    onChange(text);
  }, [onChange, text]);

  const ref = useDetectClickOutside({
    onTriggered: handleOutsideClick,
  });

  return (
    <div ref={ref} className="py-2 flex w-full h-fit text-white">
      {open ? (
        <input
          className="px-2 w-full rounded text-black"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      ) : (
        <span className="w-full cursor-pointer" onClick={() => setOpen(true)}>
          {text}
        </span>
      )}
    </div>
  );
};
