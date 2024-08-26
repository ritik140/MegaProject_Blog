import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  // It helps use to use all the properties given
  // we use by spreading all of them
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${className} ${type} ${bgColor} ${textColor}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
