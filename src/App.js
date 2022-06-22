import React from "react";
import {useFormik} from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: values => {
      alert("Login Successful");
    },
    validate: values => {
      let errors = {};
      if (values.email === "") {
        errors.email = "Field required";
        return errors;
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Username should be an email";
      }
      if (values.password === "") {
        errors.password = "Field required";
      }
      return errors;
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="emailField">Email</label>
      <input
          id="emailField"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
      />
      {formik.errors.email ? <div style={{color: "red", marginBottom: ".5rem"}} id="emailError">{formik.errors.email}</div> : null}
      <label htmlFor="pswField">Password</label>
      <input
          id="pswField"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
      />
      {formik.errors.password ? <div style={{color: "red", marginBottom: ".5rem"}} id="pswError">{formik.errors.password}</div> : null}
      <button id="submitBtn" type="submit">Submit</button>
    </form>
  );
}

export default App;
