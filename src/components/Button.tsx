export function Button({ children, className, ...props }: React.ComponentProps<"button">) {
  return (
    <button className={`cursor-pointer border-2 font-bold py-2 px-4 rounded ${className}`} {...props}>
      {children}
    </button>
  );
}

export function OutlineButton({ children, className, ...props }: React.ComponentProps<"button">) {
  return (
    <Button
      className={`bg-transparent text-slate-800 border-2 border-slate-800 hover:bg-slate-800 hover:text-slate-100 transition-color ${className}`}
      {...props}>
      {children}
    </Button>
  );
}
