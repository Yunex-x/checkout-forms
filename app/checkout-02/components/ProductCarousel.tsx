"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    title: "NikeCourt Lite 2",
    color: "Blue",
    size: "37",
    qty: 1,
    price: "$67",
    image: "/nike.svg",
  },
  {
    id: 2,
    title: "Wilson Hammer 5.3",
    color: "Black",
    size: "2-1/4",
    qty: 1,
    price: "$52",
    image: "/nike.svg",
  },
  {
    id: 3,
    title: "NikeCourt Lite 2",
    color: "Red",
    size: "38",
    qty: 1,
    price: "$28",
    image: "/nikecourt-lite-2-red.jpg",
  },
];

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
      {products.map((product) => (
        <div
          key={product.id}
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
              src={product.image}
              alt={product.title}
              fill
              className="object-cover rounded-[5.46341px]"
            />
          </div>

          {/* Text */}
          <div className="absolute left-[112px] top-[12px]">
            <p className="font-['SF_Pro_Display'] text-[16.3902px] leading-[20px] font-[500] text-[#212529]">
              {product.title}
            </p>

            <p className="mt-[4px] text-[15.0244px] leading-[18px] tracking-[0.273171px] text-[#868E96]">
              Color: {product.color}
            </p>

            <p className="mt-[2px] text-[15.0244px] leading-[18px] tracking-[0.273171px] text-[#868E96]">
              Size: {product.size}
            </p>

            <p className="mt-[2px] text-[15.0244px] leading-[18px] tracking-[0.273171px] text-[#868E96]">
              Qty: {product.qty}
            </p>
          </div>

          {/* Price */}
          <span
            className="
              absolute
              right-[16px]
              bottom-[12px]
              text-[16.3902px]
              leading-[20px]
              font-[500]
              text-[#495057]
            "
          >
            {product.price}
          </span>
        </div>
      ))}
    </div>
  );
}
