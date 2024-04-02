"use client";

import clsx from "clsx";

type Variant = "body-one"
             | "body-two"
             | "body-three"
             | "body-four"
             | "body-five"

interface TextProps {
  children: React.ReactNode | React.ReactNode[];
  variant?: Variant;
  className?: string;
}

const variants: Record<Variant, string> = {
  "body-one": "font-medium leading-[30px] text-[20px] text-[gray-900]",
  "body-two": "font-medium leading-[28px] text-[18px] text-[gray-900]",
  "body-three": "font-medium leading-[26px] text-[16px] text-[gray-900]",
  "body-four": "font-normal leading-[24px] text-[14px] text-[gray-900]",
  "body-five": "font-normal leading-[22px] text-[12px] text-[gray-900]",
};


export const Text: React.FC<TextProps> = ({children, variant = "body-one", className, ...props}) => {
  return (
    <p className={clsx(variants[variant], className)} {...props}>
      {children}
    </p>
  );
};