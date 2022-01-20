import { useState } from 'react';
import './styles.css';
function OpenHours() {
  return (
    <div className="open-hours-holder">
      <div className="days">
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
        <div>Sunday</div>
      </div>
      <div className="hours">
        <div>9:00-18:00</div>
        <div>9:00-18:00</div>
        <div>9:00-18:00</div>
        <div>9:00-18:00</div>
        <div>9:00-18:00</div>
        <div>10:00-16:00</div>
        <div>Closed</div>
      </div>
    </div>
  );
}

function PickUpPlace({ name, address, telephone, setShowPaymentSection }) {
  const [showOpenHours, setShowOpenHours] = useState(false);
  return (
    <button
      className="pickup-place"
      onClick={() => setShowPaymentSection(true)}
    >
      <div className="pickup-place-col">
        <div className="pickup-place-name">{name}</div>
        <div>{address}</div>
        <div>{telephone}</div>
      </div>

      <div className="pickup-place-col">
        <div
          className="open-hours-button"
          onClick={() => setShowOpenHours(!showOpenHours)}
        >
          {showOpenHours ? 'Hide open hours' : 'Show open hours'}
        </div>
        {showOpenHours ? <OpenHours /> : null}
      </div>
    </button>
  );
}

export default PickUpPlace;
