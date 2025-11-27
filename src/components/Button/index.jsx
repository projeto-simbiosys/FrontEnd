import React from "react";

export default function Button({ variant, children, className, ...props }) {
  const variantMapping = {
    "inst-primary": "bg-main text-white",
    "sys-primary": "bg-sys-main text-white",

    "inst-secondary":
      "bg-white text-secondary border border-solid border-secondary",
    "sys-secondary":
      "bg-white text-sys-main border border-solid border-sys-main",

    "inst-light": "bg-white text-main",
    "sys-light": "text-sys-main shadow-none",

    "inst-link":
      "bg-transparent text-main !px-[0px] !py-[0px] shadow-none underline",
  };

  return (
    <button
      className={`${variantMapping[variant]} ${className} flex gap-[10px] items-center px-[20px] py-[10px] text-base font-semibold rounded-[5px] shadow-button cursor-pointer hover:brightness-95 disabled:bg-gray-disabled disabled:text-gray-detail-disabled disabled:border-gray-detail-disabled`}
      {...props}
    >
      {children}
    </button>
  );
}