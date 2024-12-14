type CenterProps = { children: React.ReactNode };

export default function Center({ children }: CenterProps) {
  return (
    <div className="flex items-center justify-center flex-1">{children}</div>
  );
}
