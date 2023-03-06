import React, { useEffect } from "react";
import "./Homepage.css"
import { useFormik } from "formik";
import { signUpSchema } from "./HomePAgeScheema";
import {Link} from "react-router-dom"

const initialValues = {
  FirstName: " ",
  LastName: " ",
  Description:" ",
};
const HomePage = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
       
      },
    });

  return (
    <>
      <tbody>
        <div className="container1">
          <div className="drop1">
            <div className="content1">
              <h2> Register Page</h2>
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
                  <input 
                    type="Description"
                    name="Description"
                    value={values.Description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Description"
                  />
                  {errors.Description && touched.Description ? (
                    <p className="">{errors.Description} </p>
                  ) : null}
                </div>

                <div className="inputbox">
                  <input
                    type="file"
                    name="img"
                    value={values.img}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="inputbox">
                  <button className="inputbox" type="submit">
                    Register
                   
                  </button>
                </div>
              
              </form>
           
            </div>
          </div>

        
        </div>
      </tbody>
    </>
  );
};

export default HomePage;

