export default function CardFields() {
  return (
    <div className="w-full max-w-[476px] flex flex-col gap-[24px]">
      {/* Card Number */}
      <div className="flex flex-col gap-[16px]">
        <label className="text-[18px] font-medium">Card Number</label>
        <input
          type="text"
          placeholder="1234 5678 9101 1121"
          className="h-[44px] px-[12px] border border-[#D9D9D9] rounded-[6px] text-sm outline-none"
          required
          pattern="[0-9\s]{13,19}"
          maxLength={19}
          inputMode="numeric"
        />
      </div>

      {/* Expiration + CVV */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center">
        <div className="flex flex-col gap-[18px] flex-1">
          <label className="text-[18px] font-medium">Expiration Date</label>
          <input
            type="text"
            placeholder="MM/YY"
            className="h-[44px] px-[12px] border border-[#D9D9D9] rounded-[6px] text-sm outline-none"
            required
            pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
            maxLength={5}
            inputMode="numeric"
          />
        </div>

        <div className="flex flex-col gap-[18px] flex-1">
          <label className="text-[18px] font-medium">CVV</label>
          <input
            type="text"
            placeholder="123"
            className="h-[44px] px-[12px] border border-[#D9D9D9] rounded-[6px] text-sm outline-none"
            required
            pattern="[0-9]{3,4}"
            maxLength={4}
            inputMode="numeric"
          />
        </div>
      </div>

      {/* Save card */}
      <label className="flex items-center gap-[16px] text-sm text-[#ACACAC]">
        <input type="checkbox" />
        Save card details
      </label>
    </div>
  );
}
