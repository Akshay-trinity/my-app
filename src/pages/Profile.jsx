import React, { useState, useEffect } from "react";
import { useFormik } from "formik";

import { useHistory } from "react-router-dom";
import httpRequest from "../services/httpRequest";
import { RegisterFormValidation } from "../validations/Auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Profile = () => {
  const history = useHistory();
  const [formValue, setFormValue] = useState({
    _id: "627f7cd23ec39bc2e9ff0931",
    firstName: "akshay",
    lastName: "sharma",
    address: "akshay@trinity.com",
    email: "akshay@gmail.com",
    password: "$2b$10$H3Xk0hJD1pGdJoCFXowstOAbaREXZKIZ0vV9g5jAPHtmcEQVbmZsy",
    phoneNumber: 887165463,
    createdAt: "2022-05-14T09:56:34.697Z",
    updatedAt: "2022-05-14T10:31:10.225Z",
    __v: 0,
  });
  useEffect(async () => {
    const response = await httpRequest.get("/show");
    if (response.status === 200) {
      setFormValue(response);
    }
  }, []);
  const formik = useFormik({
    initialValues: {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      address: formValue.address,
      email: formValue.email,
      password: "",
      phoneNumber: formValue.phoneNumber,
    },
    validationSchema: RegisterFormValidation,
    onSubmit: (values) => update(values),
  });
  const update = async (values) => {
    let request = {
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      phoneNumber: values.phoneNumber,
      email: values.email,
      password: values.password,
    };
    const response = await httpRequest.post("/update", request);
    if (response.status === 200) {
      toast("Update successfully!");
      history.push("/landing");
    } else {
      toast("Update Failed!");
    }
  };
  return (
    <div className="container-login">
      <div className="login absolute w-1/2 top-0 mt-12">
        <div className="form ">
          <h1 className="text-xl font-bold mb-10">Profile</h1>
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
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
