import { useState } from 'react';
import RecieveOptionForm from '../../components/RecieveOptionForm';
import DeliveryType from '../../components/DeliveryType';
import DeliveryForm from '../../components/DeliveryForm';
import ChoosePickUpPoint from '../../components/ChoosePickUpPoint';

import './styles.css';

function CheckoutAddressInfoPage() {
  const [recieveOrderOption, setRecieveOrderOption] = useState('');
  const [showDeliveryAddressForm, setShowDeliveryAddressForm] = useState(false);
  const [showPaymentSection, setShowPaymentSection] = useState(false);
  return (
    <div className="authenticate-page">
      <header className="header"></header>
      <div className="greeting">
        <div className="greeting-title"> Checkout </div>
      </div>
      <div className="form-holder">
        <p className="greeting-text">
          1. How would you like to receive your order?
        </p>
        <RecieveOptionForm setRecieveOrderOption={setRecieveOrderOption} />
      </div>

      {recieveOrderOption === 'delivery' ? (
        <div className="form-holder">
          <p className="greeting-text"> 2. Choose Delivery Type </p>
          <DeliveryType
            setShowDeliveryAddressForm={setShowDeliveryAddressForm}
          />
        </div>
      ) : recieveOrderOption == 'clickAndCollect' ? (
        <div className="form-holder">
          <p className="greeting-text"> 2. Choose a Pick up place </p>
          <ChoosePickUpPoint setShowPaymentSection={setShowPaymentSection} />
        </div>
      ) : null}

      {recieveOrderOption == 'delivery' && showDeliveryAddressForm ? (
        <div className="form-holder">
          <p className="greeting-text"> 3. Delivery Address </p>
          <DeliveryForm setShowPaymentSection={setShowPaymentSection} />
        </div>
      ) : null}
      {showPaymentSection ? (
        <div className="form-holder">
          <p className="greeting-text"> 4. Select Payment Option </p>
        </div>
      ) : null}
    </div>
  );
}
export default CheckoutAddressInfoPage;
