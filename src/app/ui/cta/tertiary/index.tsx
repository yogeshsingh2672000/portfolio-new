import React from "react";

interface Props {
  label: string;
  [key: string]: unknown; // Allows for additional props
}

const TertiaryCTA: React.FC<Props> = (props) => {
  const { label, ...rest } = props;
  return (
    <button
      {...rest}
      className="bg-transparent border-2 border-[#1E3E62] hover:border-[#1C3A54] active:border-[#1A2534] px-4 py-2 rounded-xl transition-colors duration-200"
    >
      {label || ""}
    </button>
  );
};

export default TertiaryCTA;
