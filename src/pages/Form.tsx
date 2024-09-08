import { FunctionComponent } from "react";
import FormFieldSharp from "../components/FormFieldSharp";
import Buttondefault from "../components/Buttondefault";

const FormPage: FunctionComponent = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[url('/public/wheel1-2@3x.png')] bg-cover bg-no-repeat bg-center">
      <div className="w-[400px] rounded-[20px] bg-ppp-white border-ppp-grey border-[1px] border-solid box-border flex flex-col items-start justify-start py-[38px] px-[39px] gap-4">
        <div className="relative font-semibold text-xl">
          Register For Demo Class
        </div>
        <div className="self-stretch h-px relative border-ppp-grey border-t-[1px] border-solid box-border" />
        <div className="self-stretch rounded-2xl flex flex-col items-center justify-start gap-2 text-3xs text-black-80">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] gap-1">
              <div className="relative">Name</div>
              <input
                className="w-full [border:none] [outline:none] bg-ppp-white self-stretch h-10 shadow-[0px_-1px_0px_#484747_inset] flex flex-row items-start justify-start py-[11px] px-2 box-border font-outfit font-medium text-sm text-gray-200 min-w-[192px]"
                placeholder="Jack Sullivan"
                type="text"
              />
              <div className="w-[65px] relative font-light text-gantt-ui-design hidden">
                error message
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] gap-1">
              <div className="relative">Email</div>
              <input
                className="w-full [border:none] [outline:none] bg-ppp-white self-stretch h-10 shadow-[0px_-1px_0px_#484747_inset] flex flex-row items-start justify-start py-[11px] px-2 box-border font-outfit font-medium text-sm text-gray-200 min-w-[192px]"
                placeholder="jack.s@email.com"
                type="text"
              />
              <div className="w-[65px] relative font-light text-gantt-ui-design hidden">
                error message
              </div>
            </div>
          </div>
          <FormFieldSharp
            labelText="Phone No."
            fieldText="9876543210"
            iconOutlinedDirectionsChev1="/icon--outlined--action--main--calendar.svg"
            fieldRowWrapper
            iconOutlinedDirections={false}
            propMinWidth="unset"
            propAlignSelf="unset"
            propWidth="unset"
            propBoxShadow="0px -1px 0px #484747 inset"
            propFlex="unset"
            propFontWeight="500"
            propColor="#1e1e1e"
            propDisplay="unset"
            propMinWidth1="unset"
            propMinWidth2="179px"
          />
        </div>
        <Buttondefault />
      </div>
    </div>
  );
};

export default FormPage;
