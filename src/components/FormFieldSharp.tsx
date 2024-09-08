import { FunctionComponent } from "react";
import FormFieldSharpbase from "./FormFieldSharpbase";

export type FormFieldSharpType = {
  className?: string;
  labelText?: string;
  fieldText?: string;
  iconOutlinedDirectionsChev1?: string;
  fieldRowWrapper?: boolean;
  iconOutlinedDirections?: boolean;
  propMinWidth?: string;
  propAlignSelf?: string;
  propWidth?: string;
  propBoxShadow?: string;
  propFlex?: string;
  propFontWeight?: string;
  propColor?: string;
  propDisplay?: string;
  propMinWidth1?: string;
  propMinWidth2?: string;
};

const FormFieldSharp: FunctionComponent<FormFieldSharpType> = ({
  className = "",
  labelText,
  fieldText,
  iconOutlinedDirectionsChev1,
  fieldRowWrapper,
  iconOutlinedDirections,
  propMinWidth,
  propAlignSelf,
  propWidth,
  propBoxShadow,
  propFlex,
  propFontWeight,
  propColor,
  propDisplay,
  propMinWidth1,
  propMinWidth2,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-left text-3xs text-black-80 font-outfit ${className}`}
    >
      <FormFieldSharpbase
        labelText={labelText}
        propMinWidth={propMinWidth}
        fieldRowWrapper={fieldRowWrapper}
        propAlignSelf={propAlignSelf}
        propWidth={propWidth}
        propBoxShadow={propBoxShadow}
        propFlex={propFlex}
        propFontWeight={propFontWeight}
        propColor={propColor}
        propDisplay={propDisplay}
        propMinWidth1={propMinWidth1}
        propMinWidth2={propMinWidth2}
        fieldText={fieldText}
        iconOutlinedDirectionsChev1={iconOutlinedDirectionsChev1}
        iconOutlinedDirections={iconOutlinedDirections}
      />
    </div>
  );
};

export default FormFieldSharp;
