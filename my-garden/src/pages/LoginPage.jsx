import React, { use } from "react";
import { FaGoogle } from "react-icons/fa";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const LoginPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { loginUser, loginUserIwthGoogle } = use(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const loginwithGoogle = () => {
    loginUserIwthGoogle(googleProvider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      setTimeout(() => {navigate(location.state?.from?.pathname || "/")}, 1000);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setTimeout(() => {
          navigate(location.state?.from?.pathname || "/");
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div>
      <div className="hero mt-15">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-[#14A800]">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin} className="form">
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button
                  type="submit"
                  className="btn w-full bg-[#14A800] text-white hover:bg-[#108600] mt-4"
                >
                  Login
                </button>
              </form>
              <p>
                Don't have an account?
                <Link to="/register" className="link link-hover text-[#14A800]">
                  Register
                </Link>
              </p>
              <div className="divider">OR</div>
              <button onClick={loginwithGoogle} className="btn bg-[#14A800] text-white hover:bg-[#108600]">
                <FaGoogle></FaGoogle>Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
