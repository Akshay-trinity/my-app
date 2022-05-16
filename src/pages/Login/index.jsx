import React, { useState } from "react";
import { useFormik } from "formik";
import httpRequest from "../../services/httpRequest";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginValidation } from "../../validations/Auth";
import { Link } from "react-router-dom";

const LogIn = () => {
  const history = useHistory();

  const [passwordShown, setPasswordShown] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit: (values) => onLogin(values),
  });

  const onLogin = async (values) => {
    let request = {
      email: values.email,
      password: values.password,
    };
    const response = await httpRequest.post("/login", request);
    if (response.status === 200) {
      toast("Login successfully!");
      history.push("/landing");
    } else {
      toast("Login Failed!");
    }
  };

  return (
    <div className="container-login">
      <div className="login">
        <div className="form">
          <h1 className="text-xl font-bold">Login Here</h1>
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
            <label htmlFor="">Password</label>
            <br />
            <input
              label="Password"
              type={passwordShown ? "text" : "password"}
              id="password"
              name="password"
              className="form-control w-1/2"
              // error={formik.touched.password ? formik.errors.password : undefined}
              onChange={formik.handleChange}
              value={formik.values.password || ""}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="text-pink flex w-1/2 mt-2 justify-end mb-10">
            <p className="cursor-pointer">Forgot Password?</p>
          </div>
          <button
            rounded="lg"
            type="submit"
            onClick={formik.handleSubmit}
            className="mb-5 w-1/2 hover:bg-blue-100"
            bgColor="indigo"
            full
          >
            Login
          </button>
          <div className="text-pink flex">
            <p className=" message d-flex">
              Don't have an account?{" "}
              <p className="cursor-pointer">
                <Link to="/register">Sing Up</Link>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
