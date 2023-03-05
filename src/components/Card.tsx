export function Card({ children, className, ...props }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border border-slate-300 p-4 rounded flex flex-col ${className}`} {...props}>
      {children}
    </div>
  );
}

export function GlowCard({
  children,
  className,
  twColor,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  twColor: string;
}) {
  return (
    <Card className={`shadow-lg ${twColor} ${className}`} {...props}>
      {children}
    </Card>
  );
}

export function CardCallout({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-1 ml-auto mt-auto items-center">{children}</div>;
}
