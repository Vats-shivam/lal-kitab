import { FunctionComponent } from "react";

export type ButtondefaultType = {
  className?: string;
};

const Buttondefault: FunctionComponent<ButtondefaultType> = ({
  className = "",
}) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-2 px-5 bg-color self-stretch flex flex-row items-center justify-center hover:bg-crimson ${className}`}
    >
      <div className="relative text-base leading-[24px] font-outfit text-ppp-white text-left">
        Submit
      </div>
    </button>
  );
};

export default Buttondefault;
