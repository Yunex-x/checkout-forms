export default function BankFields() {
  return (
    <div className="w-full max-w-[476px] flex flex-col gap-[24px]">
      <div className="flex flex-col gap-[16px]">
        <label className="text-[18px] font-medium">Bank Name</label>
        <select
          className="h-[44px] px-[12px] border border-[#D9D9D9] rounded-[6px] text-sm outline-none bg-white"
          required
          defaultValue=""
        >
          <option value="" disabled>Select your bank</option>
          <option value="chase">Chase Bank</option>
          <option value="bofa">Bank of America</option>
          <option value="wells-fargo">Wells Fargo</option>
          <option value="citi">Citibank</option>
          <option value="us-bank">U.S. Bank</option>
          <option value="pnc">PNC Bank</option>
          <option value="capital-one">Capital One</option>
          <option value="td-bank">TD Bank</option>
          <option value="truist">Truist Bank</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-[16px]">
        <label className="text-[18px] font-medium">Account Holder Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="h-[44px] px-[12px] border border-[#D9D9D9] rounded-[6px] text-sm outline-none"
          required
          minLength={2}
          pattern="[A-Za-z\s]+"
        />
      </div>

      <div className="flex flex-col gap-[16px]">
        <label className="text-[18px] font-medium">IBAN</label>
        <input
          type="text"
          placeholder="DE89 3704 0044 0532 0130 00"
          className="h-[44px] px-[12px] border border-[#D9D9D9] rounded-[6px] text-sm outline-none"
          required
          pattern="[A-Z]{2}[0-9]{2}[A-Z0-9\s]{11,30}"
          minLength={15}
          maxLength={34}
        />
      </div>
    </div>
  );
}
