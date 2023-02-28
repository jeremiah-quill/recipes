export function Title({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h3 className="text-xl font-bold flex gap-2 items-center">{children}</h3>;
}

export function IconTitle({
  children,
  className,
  text,
}: {
  children: React.ReactNode;
  className?: string;
  text: string;
}) {
  return (
    <Title className={`text-xl font-bold flex gap-2 items-center ${className}`}>
      {children}
      <h3 className="text-xl font-bold ">{text}</h3>
    </Title>
  );
}
