import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type MainType = {
  className?: string;
};

const Main: FunctionComponent<MainType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCoursesTextClick = useCallback(() => {
    navigate("/course-page");
  }, [navigate]);

  return (
    <nav
      className={`m-0 w-[471px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border max-w-full mq900:hidden ${className}`}
    >
      <nav className="m-0 self-stretch h-6 relative text-left text-lg text-black font-alegreya">
        <a className="[text-decoration:none] absolute top-[0px] left-[0px] font-bold text-[inherit]">
          Home
        </a>
        <a className="[text-decoration:none] absolute top-[0px] left-[96px] font-bold text-[inherit]">
          About
        </a>
        <a
          className="[text-decoration:none] absolute top-[0px] left-[192px] font-bold text-[inherit] cursor-pointer"
          onClick={onCoursesTextClick}
        >
          Courses
        </a>
        <a className="[text-decoration:none] absolute top-[0px] left-[288px] font-bold text-[inherit] whitespace-nowrap">
          Contact Us
        </a>
      </nav>
    </nav>
  );
};

export default Main;
