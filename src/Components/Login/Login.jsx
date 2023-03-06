import React, { useEffect } from "react";
import "./Login.css";
import { useFormik } from "formik";
import { signUpSchema } from "./Scheema";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./LginHook";
import { SessionStorage } from "../../SessionStorage/SessionStorage";

const initialValues = {
  FirstName: " ",
  LastName: " ",
};
const Login = () => {
  const nav = useNavigate();
  const { loading, data, login } = useLogin();

  const user = SessionStorage.getObj("user");
  useEffect(() => {
    if (user) {
      nav("/admin");
    }
  }, [user, nav]);

  useEffect(() => {
    if (data) {
      SessionStorage.setObj("user", data);
      nav("/login");
    }
  }, [data]);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        login(data);
        console.log(values);
        nav("/admin");
      },
    });

  return (
    <>
      <tbody>
        <div className="container1">
          <div className="drop1">
            <div className="content1">
              <h2> sign in</h2>
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
                    {" "}
                    {loading ? "loading..." : "Login"}
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

export default Login;
