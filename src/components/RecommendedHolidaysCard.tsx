import { FunctionComponent } from "react";
import "./RecommendedHolidaysCard.css";

type RecommendedHolidaysCardType = {
  locationCode?: string;
  destinationName?: string;
  packageDuration?: string;
  price?: string;
};

const RecommendedHolidaysCard: FunctionComponent<
  RecommendedHolidaysCardType
> = ({ locationCode, destinationName, packageDuration, price }) => {
  return (
    <button className="rec-card-1">
      <img className="unsplash5mv818tzxeo-icon" alt="" src={locationCode} />
      <div className="holiday-details">
        <div className="frame-parent">
          <div className="bali-parent">
            <div className="bali">{destinationName}</div>
            <div className="d3n">{packageDuration}</div>
          </div>
          <div className="div1">{price}</div>
        </div>
      </div>
    </button>
  );
};

export default RecommendedHolidaysCard;
