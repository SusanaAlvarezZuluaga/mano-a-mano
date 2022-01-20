import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function ThanksForPurchase() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => navigate('/'), 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="authenticate-page">
      <header className="header"></header>
      <div className="greeting">
        <div className="greeting-title"> Thanks for Your Purchase!!! </div>
        <p className="greeting-text">
          You will be recieving an email with the order confirmation
        </p>
      </div>
    </div>
  );
}
export default ThanksForPurchase;
