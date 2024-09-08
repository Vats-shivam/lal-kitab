import { FunctionComponent } from "react";

export type TestimonialType = {
  className?: string;
};

const Testimonial: FunctionComponent<TestimonialType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[732px] flex flex-col items-start justify-start px-0 pb-0 box-border min-w-[732px] max-w-full text-left text-black font-alegreya mq900:box-border mq1300:min-w-full mq450:box-border ${className}`}
    >
      <div className="pl-32 flex  justify-start gap-[10px] max-w-full">
        <div className=""></div>
        <h1 className="mx-auto self-stretch  relative text-[4rem] font-bold font-[inherit] flex flex-col items-center">
          <span className="text-color mt-8">{`अब `}</span>
          <span>{`घर बैठे बैठे `}</span>
          <span className="text-color"> लाल किताब ज्योतिष</span>
          <span>सीखें</span>
          <a className="no-underline"
        href="https://whatsapp.com/channel/0029VaCvtuLK0IBclhbqYi2Z">
        <button className="cursor-pointer [border:none] py-[15px] px- bg-color w-[350px] flex flex-row items-start justify-center box-border whitespace-nowrap hover:bg-crimson rounded-full">
          <b className="h-[33px] relative text-5xl inline-block font-alegreya text-ppp-white text-left">
          Click for FREE DEMO CLASS
          </b>
        </button>
        </a>
        </h1>
    
        {/* <div className="w-2/3 relative text-lg inline-block max-w-full">
          Lorem ipsum dolor sit amet consectetur. Pellentesque nascetur sed
          tellus ut vehicula eu consectetur elit at. Nulla erat nunc nisl dui
          sed cras semper ullamcorper.
        </div> */}
      
      </div>
    </div>
  );
};

export default Testimonial;
