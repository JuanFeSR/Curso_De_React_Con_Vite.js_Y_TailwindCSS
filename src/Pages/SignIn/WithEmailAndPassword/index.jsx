import { useState } from "react";
import Layout from "../../../Components/Layout/index";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MdEmail } from "react-icons/md";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../api/Firebase/Config";
import GoogleSignInButton from "../WithGoogle/index";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailForReset, setEmailForReset] = useState("");
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const signIn = async (values) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;
      console.log(`Usuario autenticado: ${user.email}`);
      navigate("/");
    } catch (error) {
      console.error("Error during sign in:", error);
      if (error.code === "auth/invalid-credential") {
        setErrorMessage("Wrong username and/or password.");
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  const handlePasswordReset = async () => {
    if (!emailForReset) {
      setErrorMessage(
        "Please enter your email address to reset your password."
      );
      return;
    }

    try {
      await sendPasswordResetEmail(auth, emailForReset);
      setErrorMessage("Password reset email sent. Please check your inbox.");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      setErrorMessage("Failed to send password reset email. Please try again.");
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email!")
      .required("Please enter your email address!"),
    password: Yup.string().required("Please enter your password!"),
  });

  return (
    <Layout>
      <div className="bg-transparent border rounded-lg mt-20 p-6 shadow-lg">
        <h1 className="font-bold text-xl text-center mb-6 w-80">
          Sign in to Shopi
        </h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={signIn}
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
                      setEmailForReset(e.target.value);
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
              {errorMessage && (
                <div className="text-red-500 text-sm mb-2">{errorMessage}</div>
              )}
              <div className="flex justify-between items-center">
                <label>
                  <Field
                    type="checkbox"
                    name="remember"
                    className="text-sm mr-2"
                  />
                  Remember me
                </label>
                <a
                  href="#"
                  onClick={handlePasswordReset}
                  className="font-medium text-sm underline hover:text-blue-500 active:text-blue-700"
                >
                  Forgot password?
                </a>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-2/3 m-4 rounded-xl p-2 text-white bg-black hover:bg-gray-800 active:bg-gray-600 focus:outline-none"
                >
                  Sign In
                </button>
              </div>
              <p>
                Don't have an account?
                <Link
                  to="/SignUp"
                  className="font-medium ml-1 underline text-sm hover:text-blue-500 active:text-blue-700"
                >
                  Sign Up
                </Link>
              </p>
              <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="mx-4">or</span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>

              <div className="flex justify-center">
                <GoogleSignInButton />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
}

export default SignIn;
