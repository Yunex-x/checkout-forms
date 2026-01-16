export default function TransferInfo() {
  return (
    <div className="w-full max-w-[476px] flex flex-col gap-[16px] text-[16px]">
      <p className="font-medium">
        Bank Transfer Instructions
      </p>

      <p className="text-[#ACACAC] leading-[22px]">
        Please transfer the total amount to the bank account below.
        Use your order ID as the payment reference.
      </p>

      <div className="flex flex-col gap-[8px] text-[#ACACAC]">
        <p><span className="font-medium text-black">Bank:</span> Taxmax Bank</p>
        <p><span className="font-medium text-black">IBAN:</span> DE89 3704 0044 0532 0130 00</p>
        <p><span className="font-medium text-black">Reference:</span> ORDER-59382</p>
      </div>
    </div>
  );
}
