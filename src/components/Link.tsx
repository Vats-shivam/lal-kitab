import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type LinkType = {
  className?: string;
  imageBlur?: string;
  dcaddebccdffScaledCov?: string;
  basicJyotishCourseForBeginners?: string;
  prop?: string;

  /** Action props */
  onLinkContainerClick?: () => void;
};

const Link: FunctionComponent<LinkType> = ({
  className = "",
  imageBlur,
  dcaddebccdffScaledCov,
  basicJyotishCourseForBeginners,
  prop,
  onLinkContainerClick,
}) => {
  const navigate = useNavigate();

  const onLinkContainerClick1 = useCallback(() => {
    navigate("/course-detail-page");
  }, [navigate]);

  return (
    <div
      className={`border-whitesmoke-200 border-[1px] border-solid overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-1 gap-4 cursor-pointer text-left text-base text-darkslategray-200 font-alegreya-sans-sc ${className}`}
      onClick={onLinkContainerClick}
    >
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-0 px-[9px] relative">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={imageBlur}
        />
        <img
          className="h-fit flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src={dcaddebccdffScaledCov}
        />
      </div>
      <div className="w-[277.2px] flex flex-row items-start justify-start py-0 px-4 box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[22px]">
          <div className="self-stretch relative leading-[20px]">
            {basicJyotishCourseForBeginners}
          </div>
          <div className="w-[174.3px] flex flex-col items-start justify-start gap-1 text-lightsteelblue">
            <div className="self-stretch relative leading-[20px] whitespace-nowrap">
              Lal Kitab Kunwar Ji
            </div>
            <div className="h-[17px] relative text-base-3 leading-[24px] font-outfit text-orangered flex items-center shrink-0">
              <span className="[line-break:anywhere]">
                <span className="[text-decoration:line-through]">{prop}</span>
                 ₹999
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Link;
