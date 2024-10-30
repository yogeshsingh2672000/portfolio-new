import React from "react";

interface Props {
  label: string;
  [key: string]: unknown;
}

const SecondaryCTA: React.FC<Props> = (props) => {
  const { label, ...rest } = props;
  return (
    <button
      {...rest}
      className="btn bg-[#1E3E62] hover:bg-[#1C3A54] active:bg-[#162D3D] px-4 py-2 rounded-xl transition-colors duration-200"
    >
      {label || ""}
    </button>
  );
};

export default SecondaryCTA;
