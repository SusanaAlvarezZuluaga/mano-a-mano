import { useState } from 'react';
import RecieveOptionForm from '../../components/RecieveOptionForm';
import DeliveryType from '../../components/DeliveryType';
import DeliveryForm from '../../components/DeliveryForm';
import ChoosePickUpPoint from '../../components/ChoosePickUpPoint';
import PaymentForm from '../../components/PaymentForm';

import './styles.css';

function CheckoutAddressInfoPage() {
  const [recieveOrderOption, setRecieveOrderOption] = useState('');
  const [showDeliveryAddressForm, setShowDeliveryAddressForm] = useState(false);
  const [deliverySectionFilled, setDeliverySectionFilled] = useState(false);
  const [showPaymentSection, setShowPaymentSection] = useState(false);
  return (
    <div className="authenticate-page">
      <header className="header"></header>
      <div className="greeting">
        <div className="greeting-title"> Checkout </div>
      </div>
      <div className="columns-holder">
        <div className="column">
          <div className="form-holder type2">
            <p className="greeting-text">
              1. How would you like to receive your order?
            </p>
            <RecieveOptionForm setRecieveOrderOption={setRecieveOrderOption} />
          </div>

          {recieveOrderOption === 'delivery' ? (
            <div className="form-holder type2">
              <p className="greeting-text"> 2. Choose Delivery Type </p>
              <DeliveryType
                setShowDeliveryAddressForm={setShowDeliveryAddressForm}
              />
            </div>
          ) : recieveOrderOption == 'clickAndCollect' ? (
            <div className="form-holder type2">
              <p className="greeting-text"> 2. Choose a Pick up place </p>
              <ChoosePickUpPoint
                setShowPaymentSection={setShowPaymentSection}
              />
            </div>
          ) : null}
        </div>
        {recieveOrderOption == 'clickAndCollect' && showPaymentSection ? (
          <div className="column">
            <div className="form-holder type2">
              <p className="greeting-text"> 3. Select Payment Option </p>
              <PaymentForm />
            </div>
          </div>
        ) : null}
        {recieveOrderOption == 'delivery' && showDeliveryAddressForm ? (
          <div className="column">
            <div className="form-holder type2">
              <p className="greeting-text"> 3. Enter Delivery Information </p>
              <DeliveryForm
                setShowPaymentSection={setShowPaymentSection}
                setDeliverySectionFilled={setDeliverySectionFilled}
              />
            </div>
            {deliverySectionFilled ? (
              <div className="form-holder type2">
                <p className="greeting-text"> 4. Select Payment Option </p>
                <PaymentForm />
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default CheckoutAddressInfoPage;
