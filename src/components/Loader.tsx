type LoaderProps = {
  text?: string;
};

export default function Loader({ text }: LoaderProps) {
  return (
    <div className="flex justify-center items-center gap-2">
      <p className="text-indigo-500 text-xl font-bold">
        {text || "Carregando..."}
      </p>
      <div className="animate-pulse w-8 h-8 rounded-full bg-indigo-600"></div>
    </div>
  );
}
