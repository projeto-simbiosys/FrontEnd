import React from "react";

export default function Typography({
  size,
  weight,
  children,
  className,
  ...props
}) {
  const sizeMapping = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
  };

  const weightMapping = {
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  return (
    <span
      className={`${sizeMapping[size]} ${weightMapping[weight]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
