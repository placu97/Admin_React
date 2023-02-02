import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder6: "rounded-radius6",
  icbCircleBorder28: "rounded-radius28",
  icbRoundedBorder6: "rounded-radius6",
};
const variants = {
  FillBlueA700: "bg-blue_A700 text-white_A700",
  icbGradientBlack90066Black90066: "bg-gradient ",
  icbOutlineBluegray100:
    "bg-white_A700 border border-bluegray_100 border-solid",
};
const sizes = { sm: "p-[15px]", smIcn: "p-[11px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder6",
    "icbCircleBorder28",
    "icbRoundedBorder6",
  ]),
  variant: PropTypes.oneOf([
    "FillBlueA700",
    "icbGradientBlack90066Black90066",
    "icbOutlineBluegray100",
  ]),
  size: PropTypes.oneOf(["sm", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder6",
  variant: "FillBlueA700",
  size: "smIcn",
};

export { Button };
