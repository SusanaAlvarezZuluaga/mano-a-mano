import { useState } from 'react';
import './styles.css';
function OpenHours() {
  return (
    <div>
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

function PickUpPlace({ id, name, address, telephone, setShowPaymentSection }) {
  const [showOpenHours, setShowOpenHours] = useState(false);
  return (
    <button onClick={() => setShowPaymentSection(true)}>
      <div>{name}</div>
      <div>{address}</div>
      <div>{telephone}</div>
      <button onClick={() => setShowOpenHours(!showOpenHours)}>
        {showOpenHours ? 'Hide open hours' : 'Show open hours'}
      </button>
      {showOpenHours ? <OpenHours /> : null}
    </button>
  );
}

export default PickUpPlace;
