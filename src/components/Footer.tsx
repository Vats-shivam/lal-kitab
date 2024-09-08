import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FooterType = {
  className?: string;

  /** Style props */
  footerWidth?: CSSProperties["width"];
  footerFlex?: CSSProperties["flex"];
  footerAlignSelf?: CSSProperties["alignSelf"];
  bOODOOMargin?: CSSProperties["margin"];
  bOODOOFontWeight?: CSSProperties["fontWeight"];
  bOODOOHeight?: CSSProperties["height"];
  bOODOOMinWidth?: CSSProperties["minWidth"];
  loremIpsumDolorHeight?: CSSProperties["height"];
  loremIpsumDolorDisplay?: CSSProperties["display"];
  sERVICESHeight?: CSSProperties["height"];
  sERVICESDisplay?: CSSProperties["display"];
  lINKHeight?: CSSProperties["height"];
  lINKDisplay?: CSSProperties["display"];
  termOfUseHeight?: CSSProperties["height"];
  termOfUseDisplay?: CSSProperties["display"];
  privacyPolicyDisplay?: CSSProperties["display"];
  privacyPolicyMinWidth?: CSSProperties["minWidth"];
  cONTACTUSHeight?: CSSProperties["height"];
  cONTACTUSDisplay?: CSSProperties["display"];
  divHeight?: CSSProperties["height"];
  divMinWidth?: CSSProperties["minWidth"];
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  footerWidth,
  footerFlex,
  footerAlignSelf,
  bOODOOMargin,
  bOODOOFontWeight,
  bOODOOHeight,
  bOODOOMinWidth,
  loremIpsumDolorHeight,
  loremIpsumDolorDisplay,
  sERVICESHeight,
  sERVICESDisplay,
  lINKHeight,
  lINKDisplay,
  termOfUseHeight,
  termOfUseDisplay,
  privacyPolicyDisplay,
  privacyPolicyMinWidth,
  cONTACTUSHeight,
  cONTACTUSDisplay,
  divHeight,
  divMinWidth,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      width: footerWidth,
      flex: footerFlex,
      alignSelf: footerAlignSelf,
    };
  }, [footerWidth, footerFlex, footerAlignSelf]);

  const bOODOOStyle: CSSProperties = useMemo(() => {
    return {
      margin: bOODOOMargin,
      fontWeight: bOODOOFontWeight,
      height: bOODOOHeight,
      minWidth: bOODOOMinWidth,
    };
  }, [bOODOOMargin, bOODOOFontWeight, bOODOOHeight, bOODOOMinWidth]);

  const loremIpsumDolorStyle: CSSProperties = useMemo(() => {
    return {
      height: loremIpsumDolorHeight,
      display: loremIpsumDolorDisplay,
    };
  }, [loremIpsumDolorHeight, loremIpsumDolorDisplay]);

  const sERVICESStyle: CSSProperties = useMemo(() => {
    return {
      height: sERVICESHeight,
      display: sERVICESDisplay,
    };
  }, [sERVICESHeight, sERVICESDisplay]);

  const lINKStyle: CSSProperties = useMemo(() => {
    return {
      height: lINKHeight,
      display: lINKDisplay,
    };
  }, [lINKHeight, lINKDisplay]);

  const termOfUseStyle: CSSProperties = useMemo(() => {
    return {
      height: termOfUseHeight,
      display: termOfUseDisplay,
    };
  }, [termOfUseHeight, termOfUseDisplay]);

  const privacyPolicyStyle: CSSProperties = useMemo(() => {
    return {
      display: privacyPolicyDisplay,
      minWidth: privacyPolicyMinWidth,
    };
  }, [privacyPolicyDisplay, privacyPolicyMinWidth]);

  const cONTACTUSStyle: CSSProperties = useMemo(() => {
    return {
      height: cONTACTUSHeight,
      display: cONTACTUSDisplay,
    };
  }, [cONTACTUSHeight, cONTACTUSDisplay]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      height: divHeight,
      minWidth: divMinWidth,
    };
  }, [divHeight, divMinWidth]);

  return (
    <div
      className={`w-[1596px] flex flex-col items-start justify-start gap-20 max-w-full text-left text-lg text-black font-alegreya mq900:gap-10 mq450:gap-5 ${className} mx-auto`}
      style={footerStyle}
    >
      {/* <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
        loading="lazy"
        alt=""
        src="/vector-2.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq1300:flex-wrap">
        <div className="w-[269px] flex flex-col items-start justify-start py-0 px-0 box-border gap-5 text-5xl">
          <div className="flex flex-row items-center justify-start gap-5">
            <img
              className="h-[67.1px] w-[54px] relative"
              loading="lazy"
              alt=""
              src="/group-20.svg"
            />
            <b
              className="h-[33px] relative inline-block mq450:text-lgi"
              style={bOODOOStyle}
            >
              LAL KITAB
            </b>
          </div>
          <div
            className="self-stretch h-[72px] relative text-lg inline-block"
            style={loremIpsumDolorStyle}
          >
            Lorem ipsum dolor sit amet consectetur. Pellen sectetur elit at
            erat.
          </div>
        </div>
        {/* <div className="w-[164px] flex flex-col items-start justify-start gap-5">
          <h2
            className="m-0 self-stretch h-11 relative text-13xl uppercase font-bold font-[inherit] inline-block mq900:text-7xl mq450:text-lgi"
            style={sERVICESStyle}
          >
            SERVICES
          </h2>
          <div className="relative">Astrological Forecasts</div>
          <div className="self-stretch relative">Astrological Report</div>
          <div className="self-stretch relative">Horoscope Readings</div>
          <div className="self-stretch relative">Love Compatibility</div>
        </div> 
        <div className="w-[105px] flex flex-col items-start justify-start gap-5">
          <h2
            className="m-0 self-stretch h-11 relative text-13xl uppercase font-bold font-[inherit] inline-block mq900:text-7xl mq450:text-lgi"
            style={lINKStyle}
          >
            LINK
          </h2>
          <div
            className="self-stretch h-6 relative inline-block"
            style={termOfUseStyle}
          >
            Term Of Use
          </div>
          <div className="relative" style={privacyPolicyStyle}>
            Privacy Policy
          </div>
        </div>
        <div className="w-[244px] flex flex-col items-start justify-start gap-5 text-13xl">
          <h2
            className="m-0 self-stretch h-11 relative text-inherit uppercase font-bold font-[inherit] inline-block mq900:text-7xl mq450:text-lgi"
            style={cONTACTUSStyle}
          >
            CONTACT US
          </h2>
          <div className="flex flex-col items-start justify-start gap-5 text-lg">
            <div className="flex flex-row items-center justify-start gap-5">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/call.svg"
              />
              <div
                className="h-6 relative uppercase inline-block whitespace-nowrap"
                style={divStyle}
              >
                +12 2629 7828
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-5">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/message.svg"
              />
              <div className="relative">lal kitab@domain.com</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-5">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/location.svg"
              />
              <div className="relative">112 Washtucna,Washington</div>
            </div>
          </div>
        </div>
        <div className="hidden flex-col items-start justify-start gap-5 max-w-full text-13xl">
          <b className="h-11 relative uppercase inline-block mq900:text-7xl mq450:text-lgi">
            MAPS
          </b>
          <img
            className="w-[321px] relative max-h-full object-cover max-w-full"
            alt=""
            src="/rectangle-59@2x.png"
          />
        </div>
      </div> */}
      <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-0 box-border gap-[45px] max-w-full shrink-0 mq900:gap-[22px]">
        <div className="relative inline-block max-w-full">
          copyright@2023 Jyotish Guru Kunwarji All Right Reserved
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/vector-3.svg"
        />
      </div>
    </div>
  );
};

export default Footer;
