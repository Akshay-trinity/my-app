import React, { useState } from "react";
import { useFormik } from "formik";

import { useHistory } from "react-router-dom";
import httpRequest from "../../services/httpRequest";
import { RegisterFormValidation } from "../../validations/Auth";
import { Link } from "react-router-dom";
import { Toast } from "bootstrap";
const Register = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
    validationSchema: RegisterFormValidation,
    onSubmit: (values) => register(values),
  });

  const register = async (values) => {
    let request = {
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      phoneNumber: values.phoneNumber,
      email: values.email,
      password: values.password,
    };
    const response = await httpRequest.post("/register", request);
    if (response.status === 200) {
      Toast("Register successfully!");
      history.push("/landing");
    } else {
      Toast("Register Failed!");
    }
  };

  return (
    <div className="container-login">
      <div className="login absolute w-1/2 top-0 mt-12">
        <div className="form ">
          <h1 className="text-xl font-bold mb-10">Register Here</h1>
          <div className="my-5">
            <label htmlFor="">First Name</label>
            <br />
            <input
              label="First Name Address"
              id="firstName"
              name="firstName"
              type="firstName"
              className="form-control w-1/2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName || ""}
              // error={formik.touched.email ? formik.errors.email : undefined}
            />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <br />
            <input
              label="Last Name"
              id="lastName"
              name="lastName"
              type="lastName"
              className="form-control w-1/2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName || ""}
              // error={formik.touched.email ? formik.errors.email : undefined}
            />
          </div>
          <div className="mt-5">
            <label htmlFor="">Address</label>
            <br />
            <input
              label="Address"
              id="address"
              name="address"
              type="text"
              className="form-control w-1/2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address || ""}
              // error={formik.touched.email ? formik.errors.email : undefined}
            />
          </div>
          <div className="my-5">
            <label htmlFor="">Email</label>
            <br />
            <input
              label="Email Address"
              id="email"
              name="email"
              type="email"
              className="form-control w-1/2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email || ""}
              // error={formik.touched.email ? formik.errors.email : undefined}
            />
          </div>
          <div>
            <label htmlFor="">Phone Number</label>
            <br />
            <input
              label="Phone Number"
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              className="form-control w-1/2"
              // error={formik.touched.password ? formik.errors.password : undefined}
              onChange={formik.handleChange}
              value={formik.values.phoneNumber || ""}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="my-5">
            <label htmlFor="">Password</label>
            <br />
            <input
              label="Password"
              type={"password"}
              id="password"
              name="password"
              className="form-control w-1/2"
              // error={formik.touched.password ? formik.errors.password : undefined}
              onChange={formik.handleChange}
              value={formik.values.password || ""}
              onBlur={formik.handleBlur}
            />
          </div>

          <button
            rounded="lg"
            type="submit"
            onClick={formik.handleSubmit}
            className="mb-5 w-1/2 hover:bg-blue-100"
            bgColor="indigo"
            full
          >
            SignUp
          </button>
        </div>
        <div className="text-pink flex">
          <p className=" message d-flex">
            Already have an account ?{" "}
            <p className="cursor-pointer">
              <Link to="/login">LogIn</Link>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
