import Loader from "./Loader";

type ProductErrorProps = {
  text?: string;
  title?: string;
  loading?: boolean;
  onClickRetry?: () => void;
};

export default function ProductError({
  text,
  title,
  loading,
  onClickRetry,
}: ProductErrorProps) {
  if (loading) {
    return <Loader text="Tentando carregar os produtos..."></Loader>;
  }

  return (
    <div className="flex justify-center items-center gap-3 p-2 flex-col">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-red-500">{text}</p>
      </div>

      <button
        onClick={() => onClickRetry && onClickRetry()}
        className="bg-stone-800 text-white p-2 rounded-md hover:bg-stone-600 transition-all delay-75 text-sm"
      >
        Tentar novamente
      </button>
    </div>
  );
}
