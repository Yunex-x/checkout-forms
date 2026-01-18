type PayCTAProps = {
  isLoading: boolean;
};

export default function PayCTA({ }: PayCTAProps) {
  return (
    <div className="w-full max-w-[476px] flex flex-col gap-[23px]">
      <button
        type="submit"
        className="h-[48px] bg-[#32C766] text-white text-[16px] font-medium rounded-[6px]"
      >
        Pay USD59.28
      </button>

      <p className="text-[14px] text-[#ACACAC] leading-[18px]">
        Your personal data will be used to process your order.
      </p>
    </div>
  );
}
