import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./HotelCardForm.css";

type HotelCardFormType = {
  imageDimensions?: string;
  accommodationType?: string;
  accommodationName?: string;
  pricePerNight?: string;
  reviewCount?: string;
  rating?: string;
  roomDimensions?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propRight?: CSSProperties["right"];
};

const HotelCardForm: FunctionComponent<HotelCardFormType> = ({
  imageDimensions,
  accommodationType,
  accommodationName,
  pricePerNight,
  reviewCount,
  rating,
  roomDimensions,
  propWidth,
  propRight,
}) => {
  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  return (
    <div className="hotel-card-2">
      <a className="hotel-card1" href="#">
        <img
          className="unsplashtsn8bpopveo-icon"
          alt=""
          src={imageDimensions}
        />
        <div className="stay-details1">
          <div className="story-beachfront-suite-parent">
            <div className="story-beachfront-suite">{accommodationType}</div>
            <b className="discovery-shores">{accommodationName}</b>
            <div className="night1">{pricePerNight}</div>
          </div>
        </div>
        <div className="rating1">
          <div className="reviews1">{reviewCount}</div>
          <div className="parent1">
            <div className="div3">{rating}</div>
            <img
              className="vector-icon4"
              alt=""
              src={roomDimensions}
              style={vectorIconStyle}
            />
          </div>
        </div>
        <button className="more-details-button1">
          <div className="button4">More details</div>
        </button>
      </a>
    </div>
  );
};

export default HotelCardForm;
