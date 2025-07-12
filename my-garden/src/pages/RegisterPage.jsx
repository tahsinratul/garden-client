import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router"; // ✅ fixed
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import {
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";

const RegisterPage = () => {
  const { createUser, loginUserIwthGoogle } = useContext(AuthContext); // ✅ fixed
  const location = useLocation();
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const loginUserWithGoogle = () => {
    loginUserIwthGoogle(googleProvider)
      .then((result) => {
        toast.success("Google sign-in successful!");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
        toast.error("Google login failed!");
      });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and contain both uppercase and lowercase letters."
      );
      return;
    }

    try {
      const result = await createUser(email, password);
      const user = result.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: image,
      });

      toast.success("Registration successful!");
      setTimeout(() => {
        navigate(location.state?.from?.pathname || "/");
      }, 1000);
    } catch (error) {
      console.error("Registration Error:", error);
      toast.error("Registration failed. Try again.");
    }
  };

  return (
    <div>
      <div className="hero w-[30rem] mx-auto mt-10">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-[#14A800]">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister} className="fieldset">
                <label className="label">Name</label>
                <input type="text" name="name" className="input" placeholder="John Doe" required />
                
                <label className="label">Image</label>
                <input type="text" name="image" className="input" placeholder="Your Image URL" required />
                
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" required />
                
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                
                <button type="submit" className="btn bg-[#14A800] text-white hover:bg-[#108600] mt-4">
                  Register
                </button>
              </form>

              <p className="mt-2">
                Already have an account?{" "}
                <Link to="/login" className="link link-hover text-[#14A800]">
                  Login
                </Link>
              </p>

              <div className="divider">OR</div>
              <button
                onClick={loginUserWithGoogle}
                className="btn bg-[#14A800] text-white hover:bg-[#108600]"
              >
                <FaGoogle className="mr-2" />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
