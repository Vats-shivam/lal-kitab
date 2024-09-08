import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DescriptionContainer from "../components/DescriptionContainer";

const CourseDetailPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCoursesTextClick = useCallback(() => {
    navigate("/course-page");
  }, [navigate]);

  return (
    <div className="w-full relative bg-ppp-white overflow-hidden flex flex-col items-start justify-start pt-14 px-[52px] pb-[180px] box-border gap-[127px] leading-[normal] tracking-[normal] mq800:gap-8 mq1125:gap-[63px] mq1125:pl-[26px] mq1125:pr-[26px] mq1125:box-border">
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-px box-border max-w-full">
        <header className="w-[1623px] flex flex-row items-start justify-between gap-5 max-w-full mq800:w-[1152px]">
          <img
            className="h-[42px] w-[79px] relative object-cover"
            loading="lazy"
            alt=""
            src="/whatsapp-image-20240813-at-183210removebgpreview-1@2x.png"
          />
          <nav className="m-0 w-[471px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border max-w-full mq800:hidden">
            <nav className="m-0 self-stretch h-6 relative text-left text-lg text-black font-alegreya">
              <a
                className="[text-decoration:none] absolute top-[0px] left-[0px] font-bold text-[inherit] inline-block min-w-[46px] cursor-pointer"
                onClick={onHomeTextClick}
              >
                Home
              </a>
              <a className="[text-decoration:none] absolute top-[0px] left-[96px] font-bold text-[inherit] inline-block min-w-[46px]">
                About
              </a>
              <a
                className="[text-decoration:none] absolute top-[0px] left-[192px] font-bold text-[inherit] inline-block min-w-[61px] cursor-pointer"
                onClick={onCoursesTextClick}
              >
                Courses
              </a>
              <a className="[text-decoration:none] absolute top-[0px] left-[288px] font-bold text-[inherit] inline-block min-w-[81px] whitespace-nowrap">
                Contact Us
              </a>
            </nav>
          </nav>
        </header>
      </div>
      <section className="w-[1497px] flex flex-row items-start justify-center pt-0 px-0 pb-[76px] box-border gap-[100px] max-w-full text-left text-xl text-black font-alegreya mq1300:flex-wrap mq800:gap-[50px] mq800:pb-8 mq800:box-border mq450:gap-[25px] mq1125:pb-[49px] mq1125:box-border">
        <div className="h-[974px] flex-1 relative min-w-[601px] max-w-full mq800:min-w-full">
          <img
            className="absolute top-[30px] left-[35px] w-[890px] h-[944px]"
            alt=""
            src="/course-image-placeholder.svg"
          />
          <div className="absolute top-[0px] left-[0px] [filter:blur(400px)] rounded-[50%] bg-firebrick w-[895px] h-[895px] z-[1]" />
          <img
            className="absolute top-[300px] left-[243px] w-[444px] h-[296px] overflow-hidden object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/63dcad5de4b097c786c53dff-scaled-coverjpg1@2x.png"
          />
        </div>
        <div className="w-[472px] flex flex-col items-start justify-start pt-[155px] px-0 pb-0 box-border min-w-[472px] max-w-full mq1300:flex-1 mq800:pt-[101px] mq800:box-border mq800:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-12 max-w-full mq800:gap-6">
            <div className="self-stretch flex flex-col items-start justify-start gap-[11.4px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[14.6px] box-border max-w-full text-13xl">
                <h2 className="m-0 flex-1 relative text-inherit leading-[39.2px] font-normal font-[inherit] inline-block max-w-full mq800:text-7xl mq800:leading-[31px] mq450:text-lgi mq450:leading-[24px]">
                  Basic Jyotish Course for Beginners
                </h2>
              </div>
              <div className="w-[167px] flex flex-row items-start justify-start pt-0 px-0 pb-[8.6px] box-border">
                <div className="flex-1 relative leading-[32px] mq450:text-base mq450:leading-[26px]">
                  <b>Language:</b>
                  <span> Hindi</span>
                </div>
              </div>
              <div className="w-[372px] flex flex-row items-start justify-start pt-0 px-0 pb-[8.6px] box-border max-w-full">
                <div className="flex-1 relative leading-[32px] inline-block max-w-full mq450:text-base mq450:leading-[26px]">
                  <b>Instructors:</b>
                  <span> Jyotish Kunwar Singh Ji</span>
                </div>
              </div>
              <div className="w-64 flex flex-col items-start justify-start gap-[8.2px]">
                <div className="self-stretch relative leading-[32px] mq450:text-base mq450:leading-[26px]">
                  <b>Validity Period:</b>
                  <span> 120 days</span>
                </div>
                <div className="w-[133.8px] flex flex-row items-start justify-start text-mini font-outfit">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <div className="relative [text-decoration:line-through] leading-[32px] font-light inline-block min-w-[43.6px] whitespace-nowrap">
                      ₹5999
                    </div>
                  </div>
                  <div className="flex-1 relative text-base leading-[22px] font-alegreya shrink-0 z-[1]">
                    {" "}
                    83.35% OFF
                  </div>
                </div>
              </div>
              <div className="w-[179.7px] flex flex-row items-end justify-start text-[40px] font-outfit">
                <div className="flex-1 relative leading-[44.6px] font-light shrink-0 whitespace-nowrap mq800:text-13xl mq800:leading-[45px] mq450:text-5xl mq450:leading-[34px]">{`₹999 `}</div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5 ml-[-0.2px] text-[13px]">
                  <div className="relative leading-[19px] inline-block min-w-[81.9px] shrink-0 z-[1]">
                    including GST
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[181.9px] flex flex-row items-start justify-start py-0 px-1 box-border">
              <button className="cursor-pointer border-gray-300 border-[2px] border-solid pt-3.5 pb-[15px] pl-[27px] pr-[23px] bg-whitesmoke-100 flex-1 rounded-[30px] flex flex-row items-start justify-start whitespace-nowrap hover:bg-lightgray hover:border-darkslategray-100 hover:border-[2px] hover:border-solid hover:box-border">
                <a className="[text-decoration:none] w-[120.1px] relative text-[13.6px] tracking-[3px] leading-[19px] uppercase font-open-sans text-black text-center flex items-center justify-center shrink-0">
                  BUY NOW
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center max-w-full">
        <DescriptionContainer />
      </section>
    </div>
  );
};

export default CourseDetailPage;
