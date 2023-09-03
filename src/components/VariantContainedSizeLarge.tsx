import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./VariantContainedSizeLarge.css";

type VariantContainedSizeLargeType = {
  button?: string;

  /** Style props */
  variantContainedSizeLargeBoxSizing?: CSSProperties["boxSizing"];
  buttonFontSize?: CSSProperties["fontSize"];
  buttonLineHeight?: CSSProperties["lineHeight"];
  buttonColor?: CSSProperties["color"];
  buttonDisplay?: CSSProperties["display"];
};

const VariantContainedSizeLarge: FunctionComponent<
  VariantContainedSizeLargeType
> = ({
  button,
  variantContainedSizeLargeBoxSizing,
  buttonFontSize,
  buttonLineHeight,
  buttonColor,
  buttonDisplay,
}) => {
  const variantContainedSizeLargeStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: variantContainedSizeLargeBoxSizing,
    };
  }, [variantContainedSizeLargeBoxSizing]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: buttonFontSize,
      lineHeight: buttonLineHeight,
      color: buttonColor,
      display: buttonDisplay,
    };
  }, [buttonFontSize, buttonLineHeight, buttonColor, buttonDisplay]);

  return (
    <div
      className="variantcontained-sizelarge"
      style={variantContainedSizeLargeStyle}
    >
      <div className="button" style={buttonStyle}>
        {button}
      </div>
    </div>
  );
};

export default VariantContainedSizeLarge;
