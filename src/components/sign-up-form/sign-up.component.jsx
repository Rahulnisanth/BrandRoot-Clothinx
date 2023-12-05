import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  CreateUserDoc,
} from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../context/user.context";

import FormInput from "../form-input/form-input.component";
import Button from "../buttons/button.component";
import "./sign-up.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setformFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);
  const resetFormFields = () => {
    setformFields(defaultFormFields);
  };
  //EventHandler:
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  //SubmitHandler :
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords doesn't match!");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await CreateUserDoc(user, { displayName });
      setCurrentUser(user);
      resetFormFields();
    } catch (err) {
      if (err.code == "auth/email-already-in-use") {
        alert("Cannot create user, Email already in use!");
      } else {
        console.log(err.message);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account ?</h2>
      <span>Sign up with the following </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          type="text"
          onChange={handleChange}
          value={displayName}
          required
        />

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

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          value={confirmPassword}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Register</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
