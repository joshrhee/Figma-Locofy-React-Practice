import { FunctionComponent } from "react";
import "./HotelCardForm1.css";

type HotelCardForm1Type = {
  imageDimensions?: string;
  accommodationType?: string;
  accommodationName?: string;
  pricePerNight?: string;
  roomDimensions?: string;
  reviewCount?: string;
  rating?: string;
  propertyDimensions?: string;
};

const HotelCardForm1: FunctionComponent<HotelCardForm1Type> = ({
  imageDimensions,
  accommodationType,
  accommodationName,
  pricePerNight,
  roomDimensions,
  reviewCount,
  rating,
  propertyDimensions,
}) => {
  return (
    <div className="hotel-card-1">
      <a className="hotel-card" href="#">
        <img
          className="unsplashhhrfsdwxxus-icon"
          alt=""
          src={imageDimensions}
        />
        <div className="stay-details">
          <div className="entire-bungalow-parent">
            <div className="entire-bungalow">{accommodationType}</div>
            <b className="matterhorn-suites">{accommodationName}</b>
            <div className="night">{pricePerNight}</div>
          </div>
          <img className="video-icon1" alt="" src={roomDimensions} />
        </div>
        <div className="rating">
          <div className="reviews">{reviewCount}</div>
          <div className="frame-div">
            <div className="div2">{rating}</div>
            <img className="vector-icon3" alt="" src={propertyDimensions} />
          </div>
        </div>
        <button className="more-details-button">
          <div className="button3">More details</div>
        </button>
      </a>
    </div>
  );
};

export default HotelCardForm1;
