import PickUpPlace from '../PickUpPlace';
import './styles.css';

function ChoosePickUpPoint({
  setShowDeliveryAddressForm,
  setShowPaymentSection,
}) {
  const mockData = [
    {
      id: 1,
      name: 'pick up place 1',
      address: 'Rua Herois Quionga 54c',
      telephone: ' +34 67i5522',
    },
    {
      id: 2,
      name: 'pick up place 2',
      address: 'Rua Herois Quionga 54c',
      telephone: ' +34 67i5522',
    },
  ];
  return (
    <div className="pickup-places-holder">
      {mockData.map((place) => (
        <PickUpPlace
          key={place.id}
          {...place}
          setShowDeliveryAddressForm={setShowDeliveryAddressForm}
          setShowPaymentSection={setShowPaymentSection}
        />
      ))}
    </div>
  );
}
export default ChoosePickUpPoint;
