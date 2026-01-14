export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      {/* Page container */}
      <div className="w-screen min-h-screen lg:h-[1024px] grid grid-cols-1 lg:grid-cols-2">

        {/* Left column */}
        <section className="bg-white order-2 lg:order-1">
          <div
            className="
      relative
      lg: absolute
      lg:left-[130px]
      lg:top-[75px]
      w-full
      lg:w-[572px]
      max-w-full
      rounded-[8px]
      p-6
      lg:p-[48px]
    "
          >
            <h1 className="text-[24px] font-semibold">
              Payment
            </h1>


            <div className="flex flex-col gap-[36px]">
              <div className="w-full max-w-[476px] h-px bg-[#D9D9D9] my-[8px]" />
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

              <div className="w-full max-w-[476px] flex flex-col gap-[24px]">
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
                <div className="flex flex-col sm:flex-row gap-4 sm: gap-6 sm:items-center">
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

              <div className="w-full max-w-[476px] flex flex-col gap-[23px]">
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
        <section className="bg-[#F9FAFA] order-1 lg:order-2 border-b-4 border-[#D9D9D9] lg:border-b-0">
          {/* RIGHT COLUMN – Order Summary */}
          <section className="bg-[#F9FAFA] relative">
            <div
              className="
      relative
      lg: absolute
      lg:left-[18px]
      lg:top-[75px]
      w-full
      lg:w-[572px]
      max-w-full
      flex
      flex-col
      p-6
      lg:p-[48px]
    "
            >
              {/* Title */}
              <h2 className="text-[24px] font-semibold">
                Order Summary
              </h2>


              {/* Product */}
              <div className="flex flex-col gap-[36px]">
                <div className="w-full max-w-[476px] h-px bg-[#D9D9D9] my-[8px]" />
                <div className="flex items-start gap-[16px]">
                  <div className="w-[56px] h-[56px] bg-[#EDEDED] rounded-[6px] shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[18px] font-medium">Taxmax Leather Bag</p>
                    <p className="text-[16px] text-[#ACACAC]">Brown Vegan Leather</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[18px] font-medium">$49.80</p>
                    <p className="text-[16px] text-[#ACACAC]">Qty: 2</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#D9D9D9]" />

                {/* Discount code */}
                <div className="flex flex-col sm: flex-row gap-[12px]">
                  <input
                    type="text"
                    placeholder="Gift or discount code"
                    className="flex-1 h-[40px] px-[12px] border border-[#D9D9D9] rounded-[6px] text-[16px]"
                  />
                  <button className="h-[40px] px-[20px] bg-[#BDBDBD] text-white text-[16px] rounded-[6px]">
                    Apply
                  </button>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#D9D9D9]" />

                {/* Prices */}
                <div className="flex flex-col gap-[12px] text-[16px]">
                  <div className="flex justify-between">
                    <span className="font-medium">Subtotal</span>
                    <span className="font-medium">$49.80</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Shipping</span>
                    <span className="font-medium">$7.24</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#D9D9D9]" />

                {/* Total */}
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[16px] font-medium">Total</p>
                    <p className="text-[14px] text-[#ACACAC]">
                      Including $2.24 in taxes
                    </p>
                  </div>
                  <p className="text-[24px] sm: text-[36px] font-semibold">$59.28</p>
                </div>
              </div>
            </div>
          </section>

        </section>

      </div>
    </main>
  );
}