import React from "react";
import {useFormik} from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  // const formik = useFormik();

  return (
    <form>
      <label for="emailField">Email</label>
      <input id="emailField" type="email" />
      <div id="emailError"></div>
      <label htmlFor="pswField">Password</label>
      <input id="pswField" type="password"/>
      <div id="pswError"></div>
      <button id="submitBtn" type="submit">Submit</button>
    </form>
  );
}

export default App;
