import PickUpPlace from '../PickUpPlace';
function ChoosePickUpPoint(setShowDeliveryAddressForm, setShowPaymentSection) {
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
    <div>
      {mockData.map((place) => (
        <PickUpPlace
          {...place}
          setShowDeliveryAddressForm={setShowDeliveryAddressForm}
          setShowPaymentSection={setShowPaymentSection}
        />
      ))}
    </div>
  );
}
export default ChoosePickUpPoint;
