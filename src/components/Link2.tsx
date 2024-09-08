import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Link2Type = {
  className?: string;
  imageBlur?: string;
  ccabefbcScaledCov?: string;
  ramalAstrologyAdvancedCourse?: string;
  prop?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const Link2: FunctionComponent<Link2Type> = ({
  className = "",
  imageBlur,
  ccabefbcScaledCov,
  ramalAstrologyAdvancedCourse,
  prop,
  propWidth,
  propWidth1,
  propFlex,
  propAlignSelf,
}) => {
  const linkStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const ramalAstrologyAdvancedStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className={`border-whitesmoke-200 border-[1px] border-solid overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-1 gap-4 text-left text-base text-darkslategray-200 font-alegreya-sans-sc ${className}`}
      style={linkStyle}
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
          src={ccabefbcScaledCov}
        />
      </div>
      <div
        className="w-[280.2px] flex flex-row items-start justify-start py-0 px-4 box-border"
        style={frameDivStyle}
      >
        <div
          className="flex-1 flex flex-col items-start justify-start gap-[22px]"
          style={frameDiv1Style}
        >
          <div
            className="self-stretch relative leading-[20px]"
            style={ramalAstrologyAdvancedStyle}
          >
            {ramalAstrologyAdvancedCourse}
          </div>
          <div className="w-[174.3px] flex flex-col items-start justify-start gap-1 text-lightsteelblue">
            <div className="self-stretch relative leading-[20px]">
              Lal Kitab Kunwar Ji
            </div>
            <div className="h-[17px] relative text-base-1 leading-[24px] font-outfit text-orangered flex items-center shrink-0 whitespace-nowrap">
              {prop}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Link2;
