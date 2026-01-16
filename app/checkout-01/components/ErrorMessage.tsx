type ErrorMessageProps = {
  message: string;
  onRetry: () => void;
};

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="w-full max-w-[476px] p-[16px] border border-red-200 bg-red-50 rounded-[6px]">
      <p className="text-[14px] text-red-600">{message}</p>
      <button
        onClick={onRetry}
        className="mt-2 text-[14px] font-medium text-[#32C766]"
      >
        Try again
      </button>
    </div>
  );
}
