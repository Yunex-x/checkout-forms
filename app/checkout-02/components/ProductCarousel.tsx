"use client";

import Image from "next/image";

export default function ProductCarousel() {
  return (
    <div
      className="
        absolute
        left-[16px]
        top-[719px]
        w-[343px]
        overflow-x-auto
        flex
        gap-[12px]
        no-scrollbar
      "
    >
      {/* CARD */}
      <div
        className="
          relative
          min-w-[300px]
          h-[112px]
          border
          border-[#EEEFF0]
          rounded-[5.46341px]
          bg-white
        "
      >
        {/* Image */}
        <div className="absolute left-[8px] top-[8px] w-[96px] h-[96px]">
          <Image
            src="/nikecourt-lite-2.jpg"
            alt="NikeCourt Lite 2"
            fill
            className="object-cover rounded-[5.46341px]"
            priority
          />
        </div>

        {/* Text */}
        <div className="absolute left-[112px] top-[12px]">
          <p className="font-['SF_Pro_Display'] text-[16.3902px] leading-[20px] font-[500] text-[#212529]">
            NikeCourt Lite 2
          </p>

          <p className="mt-[4px] font-['SF_Pro_Display'] text-[15.0244px] leading-[18px] tracking-[0.273171px] text-[#868E96]">
            Color: Blue
          </p>

          <p className="mt-[2px] font-['SF_Pro_Display'] text-[15.0244px] leading-[18px] tracking-[0.273171px] text-[#868E96]">
            Size: 37
          </p>

          <p className="mt-[2px] font-['SF_Pro_Display'] text-[15.0244px] leading-[18px] tracking-[0.273171px] text-[#868E96]">
            Qty: 1
          </p>
        </div>

        {/* Price */}
        <span
          className="
            absolute
            right-[16px]
            bottom-[12px]
            font-['SF_Pro_Display']
            text-[16.3902px]
            leading-[20px]
            font-[500]
            text-[#495057]
          "
        >
          $67
        </span>
      </div>
    </div>
  );
}
