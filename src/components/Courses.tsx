import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Link from "./Link";

export type CoursesType = {
  className?: string;
};

const Courses: FunctionComponent<CoursesType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/course-detail-page");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[127.1px] pl-5 pr-[30px] box-border max-w-full text-center text-lg text-ppp-white font-alegreya-sans-sc lg:pb-[83px] lg:box-border mq450:pb-[35px] mq450:box-border mq1050:pb-[54px] mq1050:box-border ${className}`}
    >
      <div className="w-[1224px] flex flex-col items-start justify-start gap-[65px] max-w-full mq450:gap-4 mq750:gap-8">
        <div className="bg-color flex flex-row items-start justify-start pt-[7px] px-3 pb-[9px]">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="relative leading-[20px] whitespace-nowrap">{`Category `}</div>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/icon.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[61px] max-w-full text-left text-base text-darkslategray-200 mq450:gap-[15px] mq750:gap-[30px]">
          <div className="self-stretch grid flex-row items-start justify-start gap-4 grid-cols-[repeat(4,_minmax(220px,_1fr))] mq450:grid-cols-[minmax(220px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(220px,_382px))]">
            <Link
              imageBlur="/imageblur@2x.png"
              dcaddebccdffScaledCov="/basicCourse.png"
              basicJyotishCourseForBeginners="Basic Jyotish Course for Beginners"
              prop="₹5,999"
              onLinkContainerClick={onLinkContainerClick}
            />
            <Link
              imageBlur="/imageblur-1@2x.png"
              dcaddebccdffScaledCov="/advanceCourse.png"
              basicJyotishCourseForBeginners="LAL KITAB Nishaniyan, Lal Kitab Ba"
              prop="₹41,300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
