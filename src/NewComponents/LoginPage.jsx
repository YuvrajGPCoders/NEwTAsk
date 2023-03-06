import React, { useEffect } from "react";
import "./Login.css";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { signUpSchema } from "./LoginScheema";
import { useNavigate } from "react-router-dom";

const initialValues = {
  FirstName: " ",
  LastName: " ",
};
const Loginpage = () => {
    const nav = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
        nav("/adminpage");
      },
    });

  return (
    <>
      <tbody>
        <div className="container1">
          <div className="drop1">
            <div className="content1">
              <h2> Log In Page</h2>
              <form onSubmit={handleSubmit}>
                <div className="inputbox">
                  <input
                    type="text"
                    name="FirstName"
                    placeholder="FirstName"
                    value={values.FirstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.FirstName && touched.FirstName ? (
                    <p className="">{errors.FirstName} </p>
                  ) : null}
                </div>

                <div className="inputbox">
                  <input
                    type="LastName"
                    name="LastName"
                    value={values.LastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="LastName"
                  />
                  {errors.LastName && touched.LastName ? (
                    <p className="">{errors.LastName} </p>
                  ) : null}
                </div>

                <div className="inputbox">
                  <button className="inputbox" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>

          <a href="#" className="btnus">
            Forget Password
          </a>
          <a href="#" className="btnus signup">
            Sign up
          </a>
        </div>
      </tbody>
    </>
  );
};

export default Loginpage;
