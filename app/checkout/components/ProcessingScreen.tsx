"use client";

import { useRouter } from "next/navigation";

type SuccessScreenProps = {
  orderId: string;
};

export default function SuccessScreen({ orderId }: SuccessScreenProps) {
  const router = useRouter();

  const handleTrackOrder = () => {
    // realistic next step
    router.push(`/orders/${orderId}`);
  };

  const handleGenerateReceipt = () => {
    // placeholder for real PDF generation
    console.log("Generate receipt for order:", orderId);
    alert("Receipt generation will be available soon.");
  };

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <div className="w-[520px] flex flex-col items-center gap-[16px] text-center">

        <p className="text-[14px] font-normal text-[#ACACAC]">
          Thank You For Your Purchase
        </p>

        <h2 className="text-[18px] font-semibold text-black leading-[24px]">
          Order #{orderId} Confirmed
        </h2>

        <button
          onClick={handleTrackOrder}
          className="h-[44px] w-full bg-[#32C766] text-white text-[14px] font-medium rounded-[6px]"
        >
          Track Order
        </button>

        <button
          onClick={handleGenerateReceipt}
          className="text-[14px] font-normal text-[#ACACAC]"
        >
          Generate Receipt
        </button>

      </div>
    </div>
  );
}
