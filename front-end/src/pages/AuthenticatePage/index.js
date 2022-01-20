import LoginForm from '../../components/LoginForm';
import './styles.css';

function AuthenticatePage() {
  return (
    <div className="authenticate-page">
      <header className="header"></header>
      <div className="greeting">
        <div className="greeting-title"> Welcome! </div>
        <p className="greeting-text"> Login or Create an account </p>
      </div>

      <div className="form-holder">
        <LoginForm />
      </div>

      <section></section>
    </div>
  );
}
export default AuthenticatePage;
