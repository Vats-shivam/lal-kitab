import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Courses from "../components/Courses";
import Footer from "../components/Footer";

const CoursePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(#fff,_#fff),_#fff] overflow-y-auto flex flex-col items-center justify-start pt-14 px-5 pb-24 box-border gap-[174px] leading-[normal] tracking-[normal] lg:gap-[87px] mq450:gap-[22px] mq750:gap-[43px]">
      <header className="w-[1712px] flex flex-row items-start justify-end py-0 pl-[45px] pr-11 box-border max-w-full lg:pl-[22px] lg:pr-[22px] lg:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5">
          <img
            className="h-[42px] w-[79px] relative object-cover"
            loading="lazy"
            alt=""
            src="/whatsapp-image-20240813-at-183210removebgpreview-1@2x.png"
          />
          <nav className="m-0 w-[471px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border max-w-full mq750:hidden">
            <nav className="m-0 self-stretch h-6 relative text-left text-lg text-black font-alegreya">
              <a
                className="[text-decoration:none] absolute top-[0px] left-[0px] font-bold text-[inherit] cursor-pointer"
                onClick={onHomeTextClick}
              >
                Home
              </a>
              <a className="[text-decoration:none] absolute top-[0px] left-[96px] font-bold text-[inherit]">
                About
              </a>
              <a className="[text-decoration:none] absolute top-[0px] left-[192px] font-bold text-[inherit]">
                Courses
              </a>
              <a className="[text-decoration:none] absolute top-[0px] left-[288px] font-bold text-[inherit] whitespace-nowrap">
                Contact Us
              </a>
            </nav>
          </nav>
        </div>
      </header>
      <main className="w-[1712px] flex flex-col items-start justify-start gap-[78px] max-w-full mq450:gap-[19px] mq750:gap-[39px]">
        <section className="self-stretch flex flex-col items-start justify-start gap-0.5 text-center text-45xl text-color font-alegreya">
          <h1 className="m-0 self-stretch h-[87px] relative text-inherit uppercase font-bold font-[inherit] inline-block mq450:text-19xl mq1050:text-32xl">
            Courses
          </h1>
          <h1 className="m-0 self-stretch h-[228px] relative text-65xl uppercase font-bold font-[inherit] text-black whitespace-pre-wrap inline-block mq450:text-6xl mq1050:text-23xl">
            Get Latest Forecast and Analysis for Success
          </h1>
        </section>
        <Courses />
        <footer className="self-stretch flex flex-row items-start justify-start py-0 px-[58px] box-border max-w-full lg:pl-[29px] lg:pr-[29px] lg:box-border">
          <Footer
            footerWidth="unset"
            footerFlex="1"
            footerAlignSelf="unset"
            bOODOOMargin="0"
            bOODOOFontWeight="700"
            bOODOOHeight="33px"
            bOODOOMinWidth="unset"
            loremIpsumDolorHeight="72px"
            loremIpsumDolorDisplay="inline-block"
            sERVICESHeight="44px"
            sERVICESDisplay="inline-block"
            lINKHeight="44px"
            lINKDisplay="inline-block"
            termOfUseHeight="24px"
            termOfUseDisplay="inline-block"
            privacyPolicyDisplay="unset"
            privacyPolicyMinWidth="unset"
            cONTACTUSHeight="44px"
            cONTACTUSDisplay="inline-block"
            divHeight="24px"
            divMinWidth="unset"
          />
        </footer>
      </main>
    </div>
  );
};

export default CoursePage;
