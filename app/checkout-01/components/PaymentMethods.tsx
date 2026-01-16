type PaymentMethod = "card" | "bank" | "transfer";

export default function PaymentMethods({
  paymentMethod,
  setPaymentMethod,
}: {
  paymentMethod: PaymentMethod;
  setPaymentMethod: (v: PaymentMethod) => void;
}) {
  return (
    <>
      <div>
        <span className="text-[18px] font-medium">Pay With:</span>
      </div>

      <div className="flex text-[16px] text-[#ACACAC] gap-4">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="payment"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
          />
          <label>Card</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="payment"
            checked={paymentMethod === "bank"}
            onChange={() => setPaymentMethod("bank")}
          />
          <label>Bank</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="payment"
            checked={paymentMethod === "transfer"}
            onChange={() => setPaymentMethod("transfer")}
          />
          <label>Transfer</label>
        </div>
      </div>
    </>
  );
}
