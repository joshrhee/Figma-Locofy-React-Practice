import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./TripCard.css";

type TripCardType = {
  destinationPrice?: string;
  destinationPriceRange?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propLeft?: CSSProperties["left"];
};

const TripCard: FunctionComponent<TripCardType> = ({
  destinationPrice,
  destinationPriceRange,
  propBackgroundImage,
  propWidth,
  propWidth1,
  propLeft,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const fromStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <button className="card-1">
      <div className="destination-details-wrapper" style={frameDivStyle}>
        <div className="destination-details">
          <b className="paris">{destinationPrice}</b>
          <div className="parent" style={frameDiv1Style}>
            <div className="div" style={divStyle}>
              {destinationPriceRange}
            </div>
            <div className="from" style={fromStyle}>
              from
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default TripCard;
