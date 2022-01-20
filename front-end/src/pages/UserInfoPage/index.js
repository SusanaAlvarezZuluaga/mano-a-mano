import UserInfoForm from '../../components/UserInfoForm';

function UserInfoPage() {
  return (
    <div>
      <div className="authenticate-page">
        <header className="header"></header>
        <div className="greeting">
          <div className="greeting-title"> Provide us with some info</div>
          <p className="greeting-text">
            This will save you some time on your next purchases!!!
          </p>
        </div>

        <div className="form-holder">
          <UserInfoForm />
        </div>
      </div>
    </div>
  );
}
export default UserInfoPage;
