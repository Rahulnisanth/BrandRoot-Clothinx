import SignIn from "../../components/sign-in-form/sign-in.component";
import SignUp from "../../components/sign-up-form/sign-up.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
