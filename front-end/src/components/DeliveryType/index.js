import { MdLocalShipping } from 'react-icons/md';
import { FaShippingFast } from 'react-icons/fa';
import './styles.css';

function DeliveryType({ setShowDeliveryAddressForm }) {
  return (
    <div className="delivery-type-options-holder">
      <button
        className="delivery-type-option"
        onClick={() => setShowDeliveryAddressForm(true)}
      >
        <div>
          <div className="delivery-type-option-line1">
            <div className="delivery-type-option-name">
              <MdLocalShipping className="icon" />
              Standard Delivery
            </div>
            <div>$ 2.99</div>
          </div>

          <div className="arrival-date">
            Arrives betweeen Jan 22nd and Jan 25th
          </div>
        </div>
      </button>

      <button
        className="delivery-type-option"
        onClick={() => setShowDeliveryAddressForm(true)}
      >
        <div className="delivery-type-option-line1">
          <div className="delivery-type-option-name">
            <FaShippingFast className="icon" />
            Express Delivery
          </div>
          <div>$ 7.99</div>
        </div>
        <div className="arrival-date">Arrives tomorrow</div>
      </button>
    </div>
  );
}

export default DeliveryType;
