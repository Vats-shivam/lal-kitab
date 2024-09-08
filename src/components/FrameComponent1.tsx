import { FunctionComponent } from "react";
import Main from "./Main";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <header
      className={`flex flex-row items-start justify-start py-0 px-10 box-border max-w-full ${className}`}
    >
      <div className="w-[1623px] p-4 flex flex-row items-start justify-between gap-5 max-w-full mq900:w-[1152px]">
        {/* <img
          className="h-[150px] relative object-cover"
          loading="lazy"
          alt=""
          src="/logo.jpg"
        /> */}
        <div className="font-alegreya relative flex flex-col items-end">
          <span className="text-color text-[10rem] font-bold">
            लाल किताब
          </span>
          <span className="absolute bottom-8 right-48 font-playwrite">with</span>
          <span>
            by Jyotish Kunwar Ji
          </span>
        </div>
        <Main />
      </div>
    </header>
  );
};

export default FrameComponent1;
