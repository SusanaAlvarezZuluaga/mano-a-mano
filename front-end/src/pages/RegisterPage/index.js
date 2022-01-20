import RegisterForm from '../../components/RegisterForm';

function RegisterPage() {
  return (
    <div className="authenticate-page">
      <header className="header"></header>
      <div className="greeting">
        <div className="greeting-title"> Welcome! </div>
        <p className="greeting-text"> Join Mano a Mano!</p>
      </div>

      <div className="form-holder">
        <RegisterForm />
      </div>

      <section></section>
    </div>
  );
}
export default RegisterPage;
