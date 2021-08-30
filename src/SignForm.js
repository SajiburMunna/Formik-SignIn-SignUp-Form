import React, { useState } from "react";
import { useFormik } from "formik";
import "./Form.css";
import LogForm from "./LogForm";

const validate = (values) => {
  const errors = {};
  if (!values.userName) {
    errors.userName = "Required";
  } else if (values.userName.length > 15) {
    errors.userName = "Must be 15 characters or less";
  }

  if (!values.city) {
    errors.city = "Required";
  } else if (values.city.length > 20) {
    errors.city = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or greater";
  }

  return errors;
};

const Form = () => {
  const [form, setForm] = useState(false);
  const formik = useFormik({
    initialValues: {
      userName: "",
      city: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      {form ? (
        <LogForm></LogForm>
      ) : (
        <div className="div-center ">
          <fieldset>
            <legend>
              <h1> Sign Up Here! </h1>
            </legend>
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="userName">User Name</label>
              <br />
              <input
                id="userName"
                name="userName"
                type="useName"
                placeholder="Enter UserName"
                onChange={formik.handleChange}
                value={formik.values.userName}
              />
              {formik.errors.userName ? (
                <div className="required">{formik.errors.userName}</div>
              ) : null}
              <br />
              <label htmlFor="userName">City</label>
              <br />
              <input
                className="input"
                id="city"
                name="city"
                type="city"
                placeholder=" Enter Your City"
                onChange={formik.handleChange}
                value={formik.values.city}
              />
              {formik.errors.city ? (
                <div className="required">{formik.errors.city}</div>
              ) : null}
              <br />
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter valid email address"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <div className="required">{formik.errors.email}</div>
              ) : null}
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              {formik.errors.password ? (
                <div className="required">{formik.errors.password}</div>
              ) : null}
              <br />
              <div>
                <button type="submit">SignUp</button>
              </div>
            </form>
            <p>
              Already have an account ?{" "}
              <button onClick={() => setForm(true)}>SignIn</button>
            </p>
          </fieldset>
        </div>
      )}
    </>
  );
};

export default Form;
