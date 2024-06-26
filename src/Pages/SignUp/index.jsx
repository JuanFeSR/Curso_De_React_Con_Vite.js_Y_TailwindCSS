import { useState } from "react";
import { auth } from "../../api/Firebase/Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import userServices from "../../api/Firebase/Services";
import { MdEmail } from "react-icons/md";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout/index";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const signUp = async (values) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const creationDate = new Date();

      const userData = {
        email: userCredential.user.email,
        phoneNumber: userCredential.user.phoneNumber,
        uid: userCredential.user.uid,
        creationDate: creationDate,
      };

      await userServices.createUser(userData);

      navigate("/SignIn");
    } catch (error) {
      console.error("Error during sign up:", error);
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("This email address is not available.");
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email!")
      .required("Please enter your email address!"),
    password: Yup.string()
      .min(8, "Password is too short!")
      .required("Please enter a password!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match!")
      .required("Please confirm your password."),
    agree: Yup.boolean().oneOf([true], "Required!"),
  });

  return (
    <Layout>
      <div className="bg-transparent border rounded-lg mt-20 p-6 shadow-lg">
        <h1 className="font-bold text-xl text-center mb-6 w-80">
          Welcome to Shopi!
        </h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            agree: false,
          }}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={signUp}
        >
          {({ setFieldValue }) => (
            <Form className="flex flex-col w-80">
              <div className="relative mb-4">
                <label className="block font-semibold mb-2">Email</label>
                <div className="relative flex items-center">
                  <Field
                    type="email"
                    name="email"
                    className="block w-full px-3 py-2 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-400 pr-10"
                    onChange={(e) => {
                      setFieldValue("email", e.target.value);
                      setErrorMessage("");
                    }}
                  />
                  <MdEmail className="absolute right-3 text-gray-600" />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="relative mb-4">
                <label className="block font-semibold mb-2">Password</label>
                <div className="relative flex items-center">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="block w-full px-3 py-2 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-400 pr-10"
                    onChange={(e) => {
                      setFieldValue("password", e.target.value);
                      setErrorMessage("");
                    }}
                  />
                  {showPassword ? (
                    <FaRegEye
                      className="absolute right-3 text-gray-600 active:text-gray-800 cursor-pointer"
                      onClick={toggleShowPassword}
                    />
                  ) : (
                    <FaRegEyeSlash
                      className="absolute right-3 text-gray-600 active:text-gray-800 cursor-pointer"
                      onClick={toggleShowPassword}
                    />
                  )}
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="relative mb-4">
                <label className="block font-semibold mb-2">
                  Confirm Password
                </label>
                <div className="relative flex items-center">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    className="block w-full px-3 py-2 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-400 pr-10"
                    onChange={(e) => {
                      setFieldValue("confirmPassword", e.target.value);
                      setErrorMessage("");
                    }}
                  />
                  {showPassword ? (
                    <FaRegEye
                      className="absolute right-3 text-gray-600 active:text-gray-800 cursor-pointer"
                      onClick={toggleShowPassword}
                    />
                  ) : (
                    <FaRegEyeSlash
                      className="absolute right-3 text-gray-600 active:text-gray-800 cursor-pointer"
                      onClick={toggleShowPassword}
                    />
                  )}
                </div>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              {errorMessage && (
                <div className="text-red-500 text-sm mb-2">{errorMessage}</div>
              )}
              <div>
                <label>
                  <Field
                    type="checkbox"
                    name="agree"
                    className="text-sm mr-2"
                  />
                  I agree to the terms & conditions
                </label>
                <ErrorMessage
                  name="agree"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-2/3 m-4 rounded-xl p-2 text-white bg-black hover:bg-gray-800 active:bg-gray-600 focus:outline-none"
                >
                  Sign Up
                </button>
              </div>
              <p>
                Already have an account?
                <Link
                  to="/SignIn"
                  className="font-medium ml-1 underline text-sm hover:text-blue-500 active:text-blue-700"
                >
                  Sign In
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
}

export default SignUp;
