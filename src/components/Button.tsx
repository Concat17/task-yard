export function Button(props: React.ComponentPropsWithoutRef<"button">) {
  const { children, className: classNameProps, ...rest } = props;

  return (
    <button
      className={`flex justify-center items-center h-8 py-1 px-6 w-fit 
       bg-green-700 hover:bg-green-800 active:bg-green-900
        rounded ${classNameProps}`}
      {...rest}
    >
      <>{children}</>
    </button>
  );
}
