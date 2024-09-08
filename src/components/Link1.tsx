import { FunctionComponent } from "react";

export type Link1Type = {
  className?: string;
  imageBlur?: string;
  e4b013b307d4d7f3ScaledCov?: string;
  vastuShastraOnlineClasses?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
};

const Link1: FunctionComponent<Link1Type> = ({
  className = "",
  imageBlur,
  e4b013b307d4d7f3ScaledCov,
  vastuShastraOnlineClasses,
  prop,
  prop1,
  prop2,
}) => {
  return (
    <div
      className={`w-[294px] border-whitesmoke-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-1 gap-4 text-left text-base text-darkslategray-200 font-alegreya-sans-sc ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-0 px-[9px] relative">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={imageBlur}
        />
        <img
          className="h-[182px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src={e4b013b307d4d7f3ScaledCov}
        />
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-4">
        <div className="flex flex-col items-start justify-start gap-[22px]">
          <div className="relative leading-[20px]">
            {vastuShastraOnlineClasses}
          </div>
          <div className="w-[174.3px] flex flex-col items-start justify-start gap-1 text-lightsteelblue">
            <div className="self-stretch relative leading-[20px] whitespace-nowrap">
              Lal Kitab Kunwar Ji
            </div>
            <div className="h-[17px] relative text-base-1 leading-[24px] font-outfit text-orangered flex items-center shrink-0">
              <span className="[line-break:anywhere]">
                <span className="[text-decoration:line-through]">₹60,180</span>
                 ₹49,000
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Link1;
