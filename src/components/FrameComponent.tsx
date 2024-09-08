import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[829px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full ${className}`}
    >
      
      <img
        className="h-[31px] w-[31px] relative"
        loading="lazy"
        alt=""
        src="/star-7.svg"
      />
    </div>
  );
};

export default FrameComponent;
