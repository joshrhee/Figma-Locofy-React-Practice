import { FunctionComponent } from "react";
import "./FlightContainer.css";
const FlightContainer: FunctionComponent = () => {
  return (
    <div className="upcoming-flight-section">
      <b className="upcoming-flight">Upcoming Flight</b>
      <div className="flight-details">
        <div className="flight-main-container">
          <div className="to-and-from">
            <div className="from-details">
              <b className="sin">SIN</b>
              <div className="singapore">Singapore</div>
            </div>
            <div className="duration">
              <b className="h-55m">15H 55M</b>
              <img className="duration-child" alt="" src="/group-17.svg" />
            </div>
            <div className="to-details">
              <b className="lax">LAX</b>
              <div className="los-angeles">Los Angeles</div>
            </div>
          </div>
          <div className="horizontal-line" />
          <div className="departure-details">
            <div className="departs-on-1">Departs on: 1 May, 08:00 AM</div>
            <div className="days-to-go-container">
              <b>4 days</b>
              <span> to go</span>
            </div>
          </div>
        </div>
        <div className="line-separator" />
        <div className="prepare-menu">
          <div className="prepare-for-your">Prepare for your trip</div>
          <div className="trip-menus">
            <button className="hotel">
              <button className="rectangle-parent">
                <div className="group-child" />
                <button className="group">
                  <img className="vector-icon" alt="" src="/vector.svg" />
                  <img className="vector-icon1" alt="" src="/vector1.svg" />
                </button>
              </button>
              <div className="hotel1">Hotel</div>
            </button>
            <button className="hotel">
              <img className="attractions-child" alt="" src="/frame-21.svg" />
              <div className="attractions1">Attractions</div>
            </button>
            <button className="hotel">
              <img className="eats-child" alt="" src="/group-21.svg" />
              <div className="eats1">Eats</div>
            </button>
            <button className="hotel">
              <img className="attractions-child" alt="" src="/frame-211.svg" />
              <div className="commute1">Commute</div>
            </button>
            <button className="hotel">
              <button className="vector-wrapper">
                <img className="vector-icon2" alt="" src="/vector2.svg" />
              </button>
              <div className="taxi1">Taxi</div>
            </button>
            <button className="hotel">
              <img className="attractions-child" alt="" src="/frame-212.svg" />
              <div className="movies1">Movies</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightContainer;
