import React from "react";

interface Props {
  label: string;
  [key: string]: unknown;
}

const PrimaryCTA: React.FC<Props> = (props) => {
  const { label, ...rest } = props;
  return (
    <button
      {...rest}
      className="btn bg-[#FF6500] hover:bg-[#FF5A00] active:bg-[#FF4500] px-4 py-2 rounded-xl transition-colors duration-200"
    >
      {label || ""}
    </button>
  );
};

export default PrimaryCTA;
