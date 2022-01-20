import { FiTruck } from 'react-icons/fi';
import { MdStorefront } from 'react-icons/md';

function DeliveryType({ setShowDeliveryAddressForm }) {
  return (
    <div className="options-holder">
      <button
        className="order-option"
        onClick={() => setShowDeliveryAddressForm(true)}
      >
        <FiTruck />
        <div className="order-option-name"> Standard Delivery</div>
        <div>Free</div>
        <div>Betweenn Saturday 22nd January and Tuesday 25th January</div>
      </button>

      <button
        className="order-option"
        onClick={() => setShowDeliveryAddressForm(true)}
      >
        <MdStorefront />
        <div className="order-option-name"> Express Delivery</div>
        <div>7.99</div>
        <div>Tomorrow</div>
      </button>
    </div>
  );
}

export default DeliveryType;
