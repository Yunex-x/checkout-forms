export default function OrderSummary() {
  return (
    <div className="flex flex-col gap-[36px]">
      <div className="w-full max-w-[476px] h-px bg-[#D9D9D9] my-[8px]" />

      {/* Product */}
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

      <div className="h-px bg-[#D9D9D9]" />

      {/* Discount */}
      <div className="flex flex-col sm:flex-row gap-[12px]">
        <input
          type="text"
          placeholder="Gift or discount code"
          className="flex-1 py-4 h-[40px] px-[12px] border border-[#D9D9D9] rounded-[6px] text-[16px]"
        />
        <button className="h-[40px] px-[20px] bg-[#BDBDBD] text-white text-[16px] rounded-[6px]">
          Apply
        </button>
      </div>

      <div className="h-px bg-[#D9D9D9]" />

      {/* Prices */}
      <div className="flex flex-col gap-[12px] text-[16px]">
        <div className="flex justify-between font-medium">
          <span>Subtotal</span>
          <span>$49.80</span>
        </div>
        <div className="flex justify-between font-medium">
          <span>Shipping</span>
          <span>$7.24</span>
        </div>
      </div>

      <div className="h-px bg-[#D9D9D9]" />

      {/* Total */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-[16px] font-medium">Total</p>
          <p className="text-[14px] text-[#ACACAC]">
            Including $2.24 in taxes
          </p>
        </div>
        <p className="text-[24px] sm:text-[36px] font-semibold">$59.28</p>
      </div>
    </div>
  );
}
