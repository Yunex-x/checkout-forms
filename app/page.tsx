export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      {/* Page container */}
      <div className="w-screen h-[1024px] grid grid-cols-2">

        {/* Left column */}
<section className="bg-white">
  <div
    className="
      absolute
      left-[130px]
      top-[75px]
      w-[572px]
      h-[685px]
      rounded-[8px]
      p-[48px]
    "
  >
    <h1 className="text-[24px] font-semibold">
      Payment
    </h1>

    <div className="w-[476px] h-px bg-[#D9D9D9] my-[8px]" />

    <div className="flex flex-col gap-[36px]">
      <div>
        <span className="text-[18px] font-medium">Pay With:</span>
      </div>

      <div className="flex text-[16px] text-[#ACACAC] gap-4">
        <div className="flex items-center gap-2">
          <input type="radio" name="payment" />
          <label>Card</label>
        </div>

        <div className="flex items-center gap-2">
          <input type="radio" name="payment" />
          <label>Bank</label>
        </div>

        <div className="flex items-center gap-2">
          <input type="radio" name="payment" />
          <label>Transfer</label>
        </div>
      </div>

      <div className="w-[476px] flex flex-col gap-[24px]">
        {/* Card Number */}
        <div className="flex flex-col gap-[16px]">
          <label className="text-[18px] font-medium">Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9101 1121"
            className="h-[44px] px-[12px] border border-[#D9D9D9] rounded-[6px] text-sm outline-none"
          />
        </div>

        {/* Expiration + CVV */}
        <div className="flex gap-6 items-center">
          <div className="flex flex-col gap-[18px] flex-1">
            <label className="text-[18px] font-medium">Expiration Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="h-[44px] px-[12px] border border-[#D9D9D9] rounded-[6px] text-sm outline-none"
            />
          </div>

          <div className="flex flex-col gap-[18px] flex-1">
            <label className="text-[18px] font-medium">CVV</label>
            <input
              type="text"
              placeholder="123"
              className="h-[44px] px-[12px] border border-[#D9D9D9] rounded-[6px] text-sm outline-none"
            />
          </div>
        </div>

        {/* Save card */}
        <label className="flex items-center gap-[16px] text-sm text-[#ACACAC]">
          <input type="checkbox" />
          Save card details
        </label>
      </div>

      <div className="w-[476px] flex flex-col gap-[23px]">
        {/* CTA Button */}
        <button className="h-[48px] bg-[#32C766] text-white text-[16px] font-medium rounded-[6px]">
          Pay USD59.28
        </button>

        {/* Helper text */}
        <p className="text-[14px] text-[#ACACAC] leading-[18px]">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
      </div>
    </div>
  </div>
</section>

        {/* Right column */}
        <section className="bg-[#F9FAFA]">
          {/* Right content goes here */}
        </section>

      </div>
    </main>
  );
}
