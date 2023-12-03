import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  CreateUserDoc,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../buttons/button.component";
import "./sign-in.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setformFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setformFields(defaultFormFields);
  };
  //EventHandler:
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  const loginWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await CreateUserDoc(user);
  };
  //SubmitHandler :
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-credential":
          alert("Incorrect password for email / Email not matched !");
          break;
        case "auth/user-not-found":
          alert("No user associated with email");
          break;
        default:
          console.log(err.message);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account ?</h2>
      <span>Sign in with the your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
          required
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          onChange={handleChange}
          value={password}
          required
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={loginWithGoogle}>
            Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
