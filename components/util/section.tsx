import React from "react";

export const Section = ({ children, color = "", className = "" , id=""}) => {
  const sectionColor = {
    default:
      "text-gray-800 dark:text-gray-50 bg-gradient-to-tl from-gray-50 dark:from-gray-900 via-transparent to-transparent",
    dly: "text-dly-secondary bg-white",
    crouzie:'text-crouzie-secondary bg-white  ',
    lcdm: "text-lcdm-secondary bg-white"
  };
  const sectionColorCss =
       sectionColor[color]
      ? sectionColor[color]
      : sectionColor.default;

  return (
    <section
      className={`overflow-hidden relative flex-1 transition duration-150 ease-out body-font ${sectionColorCss} ${className}`}
      id={id}
    >
      {children}
    </section>
  );
};
