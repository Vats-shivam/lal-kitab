import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import Testimonial from "../components/Testimonial";
import FormFieldSharp from "../components/FormFieldSharp";
import Buttondefault from "../components/Buttondefault";
import FrameComponent from "../components/FrameComponent";
import LinkList from "../components/LinkList";
import FrameComponent3 from "../components/FrameComponent3";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

const LandingPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-ppp-white overflow-hidden flex flex-col items-end justify-start pt-14  px-[63px] box-border gap-11 leading-[normal] tracking-[normal] xl:px-[48px] lg:px-[31px] md:px-8 md:gap-[22px]">
      <div className="h-[180vh]"></div>
      <section className="flex flex-row items-start justify-end py-0 px-9 box-border max-w-full text-left text-5xl text-gray-200 font-outfit lg:px-6 md:px-4">
        <div className="w-full flex flex-col items-start justify-start gap-[33px] max-w-full xl:gap-[26px] lg:gap-[22px]">
          <FrameComponent1 />
          <div className="self-stretch flex flex-row items-start justify-start gap-[24rem] max-w-full flex-wrap xl:gap-[58px] lg:gap-9 md:gap-[18px]">
            <Testimonial />
            <div className="flex items-center justify-center w-1/4  h-full px-4 my-auto ">
            <div className="form bg-color shadow-xl shadow-black">
              <div className="title pb-4">Free Demo Class</div>
              <div className="subtitle">Please fill your details!</div>
              <div className="input-container ic1">
                <input id="firstname" className="input" type="text" placeholder=" " />
                {/* <div className="cut"></div> */}
                <label className="placeholder">Full Name</label>
              </div>
              <div className="input-container ic2">
                <input id="email" className="input" type="text" placeholder=" " />
                {/* <div className="cut cut-short"></div> */}
                <label className="placeholder">Email</label>
              </div>
              <div className="input-container ic2">
                <input id="lastname" className="input" type="text" placeholder=" " />
                {/* <div className="cut"></div> */}
                <label className="placeholder">Phone</label>
              </div>
              <button className="submit">Submit</button>
            </div>
            </div>
            
            {/* <FrameComponent /> */}
          </div>
        </div>
      </section>
      {/* Other components */}
      <LinkList />
      {/* <FrameComponent3 /> */}
      <Gallery />
      {/* <Footer /> */}
      {/* <div className="self-stretch flex flex-col items-center text-4 justify-start pt-0 px-0 pb-0 box-border gap-[45px] max-w-full shrink-0 mq900:gap-[22px]">
        
      </div> */}
      <div className="min-w-full p-4 rounded-t-lg flex gap-4 bg-black text-white text-lg items-center justify-center">
        <div>Privacy Policy</div>
        <div className="bg-white h-4 w-0.5"></div>
        <div> Terms and Condition</div>
        <div className="bg-white h-4 w-0.5"></div>
        <div> Refund Policy</div>
        <div className="bg-white h-4 w-0.5"></div>
        copyright@2023 Jyotish Guru Kunwarji All Right Reserved
      </div>
    </div>
  );
};

export default LandingPage;
