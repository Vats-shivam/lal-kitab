import { FunctionComponent } from "react";
import Footer from "./Footer";

export type DescriptionContainerType = {
  className?: string;
};

const DescriptionContainer: FunctionComponent<DescriptionContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1596px] flex flex-col items-start justify-start gap-[100.4px] max-w-full text-left text-sm text-gray-100 font-open-sans mq800:gap-[50px] mq450:gap-[25px] ${className}`}
    >
      <div className="flex flex-row items-start justify-start pt-0 px-[68px] pb-[9.2px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex flex-col items-start justify-start gap-4">
          <i className="relative leading-[28px] inline-block font-light min-w-[106.1px]">
            Why this course?
          </i>
          <div className="flex flex-col items-start justify-start gap-[31.4px] text-17xl text-black">
            <h1 className="m-0 relative text-inherit leading-[51px] font-light font-[inherit] mq800:text-10xl mq800:leading-[40px] mq450:text-3xl mq450:leading-[30px]">
              Description
            </h1>
            <div className="w-[60px] h-px relative" />
          </div>
        </div>
      </div>
      <div className="w-[944.4px] flex flex-row items-start justify-start py-0 px-[68px] box-border max-w-full text-5xl text-black mq1125:pl-[34px] mq1125:pr-[34px] mq1125:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[19px] max-w-full">
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[6.4px] box-border gap-[18.2px] max-w-full text-13xl">
            <div className="flex flex-col items-start justify-start">
              <h2 className="m-0 relative text-inherit leading-[45px] font-semibold font-[inherit] mq800:text-7xl mq800:leading-[36px] mq450:text-lgi mq450:leading-[27px]">
                Jyotish Basic Course
              </h2>
              <h2 className="m-0 relative text-inherit leading-[44.8px] font-semibold font-[inherit] z-[1] mt-[-0.2px] mq800:text-7xl mq800:leading-[36px] mq450:text-lgi mq450:leading-[27px]">
                Basic Astrology Course
              </h2>
            </div>
            <div className="relative text-15xl-6 leading-[49px] font-semibold mq800:text-9xl mq800:leading-[39px] mq450:text-2xl mq450:leading-[29px]">
              Class Includes
            </div>
          </div>
          <div className="relative text-2xl-4 leading-[43px] font-semibold inline-block max-w-full mq450:text-mid mq450:leading-[34px]">
            Video Lectures - Recorded Classes
          </div>
          <div className="w-[222px] relative leading-[43px] font-light flex items-center mq450:text-lgi mq450:leading-[34px]">
          1: सरसरी नोट्स

          </div>
          <div className="w-[233px] relative leading-[43px] font-light flex items-center mq450:text-lgi mq450:leading-[34px]">
          2 : वैदिक ज्योतिष
      ग्रहों की राशियां
      राशियों के मालिक
      ग्रहों की उच्च नीच राशियां
      ग्रहों की दृष्टियाँ
      ग्रहों के मित्र, शत्रु, सम भाव

          </div>
          <div className="w-[249px] relative leading-[43px] font-light flex items-center mq450:text-lgi mq450:leading-[34px]">
          3: लाल किताब की शुरुवात
     कालपुरुष कुंडली में राशियों का स्थान
     वैदिक से लाल किताब की कुंडली बनाना
     स्वराशियों का स्थान ( ग्रहों की जड़ )
     ग्रहों का उच्च नीच का स्थान
     राहु केतु का उच्च नीच का स्थान
     ग्रहों के पक्के घर
     ग्रहों की दोस्ती दुश्मनी बराबरी

          </div>
          <div className="w-[460px] relative leading-[43px] font-light flex items-center max-w-full mq450:text-lgi mq450:leading-[34px]">
          4: लाल किताब की दृष्टियाँ
     100% 50% 25%
      आम दृष्टि
      1/8 की टक्कर
       बुनियादी दृष्टि 1/9)
       धोखे की दृष्टि 1-10 की दृष्टि)
       पहले के घर / बाद के घर
       ৪ की उल्टी दृष्टि
       अचानक चोट
       शनि की 6 ठी दृष्टि
       सांझी दीवार

          </div>
          <div className="w-[460px] relative leading-[43px] font-light flex items-center max-w-full mq450:text-lgi mq450:leading-[34px]">
          5: लाल किताब में कुंडलियों के प्रकार
     आधी अंधी कुंडली
     अंधी कुंडली
      बिलमुकाबिल कुंडली
      धर्मी कुंडली
      साथी ग्रहों की कुंडली
      नाबालिग कुंडली

          </div>
          <div className="w-[516px] relative leading-[43px] font-light flex items-center max-w-full mq450:text-lgi mq450:leading-[34px]">
          6: जन्मवक्त का ग्रह
जन्मदिन का ग्रह
जन्मवक्त के ग्रह को कैसे सही करें ?
(उपाय करते वक़्त सहायता मिलेगी)
35 साला चक्कर

          </div>
          <div className="w-[385px] relative leading-[43px] font-light flex items-center max-w-full mq450:text-lgi mq450:leading-[34px]">
          7: रियायती 40 दिन

          </div>
          <div className="w-[388px] relative leading-[43px] font-light flex items-center max-w-full mq450:text-lgi mq450:leading-[34px]">
          ৪: मस्नूई ग्रह

          </div>
          <div className="w-96 relative leading-[43px] font-light flex items-center max-w-full mq450:text-lgi mq450:leading-[34px]">
          9: सोया हुआ घर और सोया हुआ ग्रह
सोए हुए घर को कैसे जगाएं ?
सोए हुए ग्रह को कैसे जगाएं ?

          </div>
          <div className="w-[549px] relative leading-[43px] font-light flex items-center max-w-full mq450:text-lgi mq450:leading-[34px]">
          10 : पित्र ऋण
</div>
          <div className="w-[308px] relative leading-[43px] font-light flex items-center mq450:text-lgi mq450:leading-[34px]">
          12: Calculation
वर्षफल की कुंडलियां सीखना
हमारी किस्मत का ग्रह कैसे निकालें ?
हमारे किस्मत के ग्रह को कैसे बचाएं ?
कुंडली से हर साल कौन सा ग्रह धोखा देगा
बुध का भेद

          </div>
          <div className="relative text-2xl-4 leading-[43px] font-semibold mq450:text-mid mq450:leading-[34px]">
            Validity - 4 Months
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-0 box-border max-w-full text-2xl-4">
            <div className="flex-1 flex flex-col items-start justify-start gap-[13.8px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[38px] pr-0 box-border max-w-full">
                <div className="flex-1 relative leading-[29px] font-semibold inline-block max-w-full mq450:text-mid mq450:leading-[23px]">
                  Be sure to watch the preview video before joining and also
                  check
                </div>
              </div>
              <div className="flex flex-col items-start justify-start max-w-full">
                <div className="w-[287px] relative leading-[43px] font-semibold flex items-center mq450:text-mid mq450:leading-[34px]">
                  the refund policy properly.  
                </div>
                <div className="relative leading-[43px] font-semibold z-[1] mt-[-0.2px] mq450:text-mid mq450:leading-[34px]">
                  https://www.jyotishkunwarsinghji.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        footerWidth="unset"
        footerFlex="unset"
        footerAlignSelf="stretch"
        bOODOOMargin="unset"
        bOODOOFontWeight="unset"
        bOODOOHeight="unset"
        bOODOOMinWidth="113px"
        loremIpsumDolorHeight="unset"
        loremIpsumDolorDisplay="unset"
        sERVICESHeight="unset"
        sERVICESDisplay="unset"
        lINKHeight="unset"
        lINKDisplay="unset"
        termOfUseHeight="unset"
        termOfUseDisplay="unset"
        privacyPolicyDisplay="inline-block"
        privacyPolicyMinWidth="105px"
        cONTACTUSHeight="unset"
        cONTACTUSDisplay="unset"
        divHeight="unset"
        divMinWidth="99px"
      />
    </div>
  );
};

export default DescriptionContainer;
