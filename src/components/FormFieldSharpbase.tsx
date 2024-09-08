import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FormFieldSharpbaseType = {
  className?: string;
  labelText?: string;
  fieldRowWrapper?: boolean;
  fieldText?: string;
  iconOutlinedDirectionsChev1?: string;
  iconOutlinedDirections?: boolean;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propFlex?: CSSProperties["flex"];
  propFontWeight?: CSSProperties["fontWeight"];
  propColor?: CSSProperties["color"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
};

const FormFieldSharpbase: FunctionComponent<FormFieldSharpbaseType> = ({
  className = "",
  labelText,
  propMinWidth,
  fieldRowWrapper,
  propAlignSelf,
  propWidth,
  propBoxShadow,
  propFlex,
  propFontWeight,
  propColor,
  propDisplay,
  propMinWidth1,
  propMinWidth2,
  fieldText,
  iconOutlinedDirectionsChev1,
  iconOutlinedDirections,
}) => {
  const labelTextStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const fieldRowWrapperStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      boxShadow: propBoxShadow,
    };
  }, [propAlignSelf, propWidth, propBoxShadow]);

  const fieldTextStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      fontWeight: propFontWeight,
      color: propColor,
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propFlex, propFontWeight, propColor, propDisplay, propMinWidth1]);

  const fieldRowWrapper1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] gap-1 text-left text-3xs text-black-80 font-outfit ${className}`}
    >
      <div className="relative" style={labelTextStyle}>
        {labelText}
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-1 text-sm text-black-40">
        {!fieldRowWrapper && (
          <div
            className="self-stretch w-10 shadow-[0px_-1px_0px_#d7dedd_inset] bg-ppp-white flex-row items-center justify-start p-2 box-border gap-2"
            style={fieldRowWrapperStyle}
          >
            <div
              className="flex-1 relative font-light whitespace-nowrap"
              style={fieldTextStyle}
            >
              +91
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--outlined--directions--chevron--down.svg"
            />
          </div>
        )}
        <div
          className="flex-1 shadow-[0px_-1px_0px_#484747_inset] bg-ppp-white flex flex-row items-center justify-start py-[11px] px-2 gap-2 text-gray-200"
          style={fieldRowWrapper1Style}
        >
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/icon--outlined--action--main--search.svg"
          />
          <div className="flex-1 relative font-medium">{fieldText}</div>
          {!iconOutlinedDirections && (
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src={iconOutlinedDirectionsChev1}
            />
          )}
        </div>
      </div>
      <div className="w-[65px] relative font-light text-gantt-ui-design hidden">
        error message
      </div>
    </div>
  );
};

export default FormFieldSharpbase;
