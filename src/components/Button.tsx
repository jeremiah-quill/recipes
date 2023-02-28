export function Button({ children, className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={`cursor-pointer border-2 font-bold py-2 px-4 rounded ${className}`} {...props}>
      {children}
    </div>
  );
}

export function OutlineButton({ children, className, ...props }: React.ComponentProps<"div">) {
  return (
    <Button
      className={`bg-transparent text-slate-800 border-2 border-slate-800 hover:bg-slate-800 hover:text-slate-100 transition-color ${className}`}
      {...props}>
      {children}
    </Button>
  );
}
