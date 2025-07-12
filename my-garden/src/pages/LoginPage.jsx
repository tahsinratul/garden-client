import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router"; // ✅ fixed import
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify"; // ✅ optional but recommended

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { loginUser, loginUserIwthGoogle } = useContext(AuthContext); // ✅ fixed

  const googleProvider = new GoogleAuthProvider();

  const loginwithGoogle = () => {
    loginUserIwthGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        toast.success("Login successful with Google");
        navigate(location.state?.from?.pathname || "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Google login failed");
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        toast.success("Login successful");
        navigate(location.state?.from?.pathname || "/");
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password");
        } else if (error.code === "auth/user-not-found") {
          toast.error("No user found with this email");
        } else {
          toast.error("Login failed");
        }
      });
  };

  return (
    <div className="hero mt-15">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-[#14A800]">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin} className="form">
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" required />

              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" required />

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              <button type="submit" className="btn w-full bg-[#14A800] text-white hover:bg-[#108600] mt-4">
                Login
              </button>
            </form>

            <p className="mt-2">
              Don't have an account?{" "}
              <Link to="/register" className="link link-hover text-[#14A800]">
                Register
              </Link>
            </p>

            <div className="divider">OR</div>

            <button
              onClick={loginwithGoogle}
              className="btn bg-[#14A800] text-white hover:bg-[#108600]"
            >
              <FaGoogle className="mr-2" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
