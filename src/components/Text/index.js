import React from "react";
const variantClasses = {
  h1: "font-normal sm:text-[28px] md:text-[30px] text-[32px]",
  h2: "font-normal sm:text-[21px] md:text-[23px] text-[25px]",
  h3: "font-normal sm:text-[20px] md:text-[22px] text-[24px]",
  h4: "font-normal text-[18px]",
  h5: "text-[16px]",
  h6: "font-normal text-[14px]",
  body1: "font-semibold text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
