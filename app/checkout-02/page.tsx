import { CreditCard, Van } from "lucide-react";
import ProductCarousel from "./components/ProductCarousel";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen flex justify-center bg-neutral-200">
      {/* FRAME */}
      <div className="relative w-[375px] h-[977px] bg-white overflow-hidden">

        {/* HEADER */}
        <div className="absolute left-0 top-[40px] w-[375px] h-[46px] bg-white" />
        <span className="absolute left-[123px] top-[53px] font-['SF_Pro_Display'] text-[18px] leading-[21px] font-[600] text-[#212529]">
          Secure Payment
        </span>

        {/* SHIPPING */}
        <span className="absolute left-[16px] top-[102px] font-['SF_Pro_Display'] text-[15px] leading-[18px] font-[500] text-[#212529]">
          Shipping
        </span>

        <div className="absolute left-[16px] top-[136px] w-[343px] h-[56px] bg-[#F5F5F5] rounded-[4px]" />

        <div className="absolute left-[30px] top-[155px] font-['SF_Pro_Display'] text-[15px] leading-[18px] font-[400] text-[#212529]">
          <Van className="inline-block mr-2 " />   Add Address
        </div>

        {/* DIVIDER */}
        <div className="absolute left-0 top-[208px] w-[375px] h-[8px] bg-[#F5F5F5]" />

        {/* PAYMENT */}
        <span className="absolute left-[16px] top-[232px] font-['SF_Pro_Display'] text-[15px] leading-[18px] font-[500] text-[#212529]">
          Payment
        </span>

        <div className="absolute left-[16px] top-[266px] w-[343px] h-[366px] bg-[#F5F5F5] rounded-[4px]" />

        <span className="absolute left-[30px] top-[285px] font-['SF_Pro_Display'] text-[15px] leading-[18px] font-[400] text-[#212529]">
          <CreditCard className="inline-block mr-2" /> Add Credit / Debit Card
        </span>

        {/* INPUTS */}
        <div className="absolute left-[31px] top-[322px] w-[311px] h-[56px] bg-white rounded-[2px]" />
        <span className="absolute left-[47px] top-[341px] font-['SF_Pro_Display'] text-[15px] leading-[18px] font-[500] text-[#868E96]">
          Card Holder’s Name
        </span>

        <div className="absolute left-[32px] top-[388px] w-[311px] h-[56px] bg-white rounded-[2px]" />
        <span className="absolute left-[48px] top-[407px] font-['SF_Pro_Display'] text-[15px] leading-[18px] font-[500] text-[#868E96]">
          Card Number
        </span>

        <span className="absolute left-[33px] top-[462px] font-['SF_Pro_Display'] text-[12px] leading-[14px] font-[400] text-[#212529]">
          Expire Date
        </span>

        <div className="absolute left-[32px] top-[484px] w-[150px] h-[56px] bg-white rounded-[2px]" />
        <span className="absolute left-[49px] top-[503px] font-['SF_Pro_Display'] text-[15px] leading-[18px] font-[500] text-[#868E96]">
          Month
        </span>

        <div className="absolute left-[192px] top-[484px] w-[150px] h-[56px] bg-white rounded-[2px]" />
        <span className="absolute left-[208px] top-[503px] font-['SF_Pro_Display'] text-[15px] leading-[18px] font-[500] text-[#868E96]">
          Year
        </span>

        <div className="absolute left-[32px] top-[558px] w-[150px] h-[56px] bg-white rounded-[2px]" />
        <span className="absolute left-[48px] top-[577px] font-['SF_Pro_Display'] text-[15px] leading-[18px] font-[500] text-[#868E96]">
          Security Code
        </span>

        {/* DIVIDER */}
        <div className="absolute left-0 top-[648px] w-[375px] h-[8px] bg-[#F5F5F5]" />

        {/* DISCOUNT */}
        <div className="absolute left-[16px] top-[672px] w-[343px] h-[31px] bg-[#FFF9DB]" />
        <span className="absolute left-[32px] top-[682px] font-['SF_Pro_Display'] text-[12px] leading-[14px] font-[500] text-[#495057]">
          25% discount! Use the code "2018" at checkout.
        </span>
        <ProductCarousel />

        {/* BOTTOM BAR */}
        <div className="absolute left-0 top-[844px] w-[375px] h-[124px] bg-white shadow-[0_-8px_12px_rgba(0,0,0,0.03)]" />

        <span className="absolute left-[16px] top-[869px] font-['Lato'] text-[13px] leading-[16px] font-[400] text-[#212529]">
          Total
        </span>

        <span className="absolute left-[44px] top-[890px] font-['SF_Pro_Display'] text-[18px] leading-[21px] font-[700] text-[#212529]">
          $148.00
        </span>

        {/* CTA */}
        {/* CTA */}
        <div
          className="
    absolute
    left-[195.5px]
    top-[860px]
    w-[163.5px]
    h-[56px]
    bg-[rgba(52,152,219,0.37)]
    rounded-[4px]
    flex
    items-center
    justify-center
  "
        >
          <span className="text-[17px] font-[800] text-white">
            Pay Now
          </span>
        </div>

        <span className="absolute left-[16px] top-[926px] right-[16px] font-['SF_Pro_Display'] text-[11px] leading-[13px] font-[400] tracking-[0.2px] text-[#868E96]">
          This is the final step, after you touching Pay Now button, the payment will be transaction
        </span>

      </div>
    </main>
  );
}
