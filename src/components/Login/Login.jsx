import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";
import loginImage from "/logiandsignup/Group 2014.png"; // Adjust path if needed

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    console.log(email,password);
    
  };

  return (
    <div className="flex bg-gray-200 items-center justify-center min-h-screen">
      <div className="bg-white w-[1000px] p-6 rounded-lg shadow-lg">
        <form className="flex" onSubmit={handleSubmit(onSubmit)}>
          {/* Image on the Left */}
          <div className="w-3/3">
            <img src={loginImage} className="h-[550px] w-[500px]" alt="Login" />
          </div>

          {/* Login Form */}
          <div className="w-2/3 p-20">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: "Password is required" })}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Login Button */}
            <button type="submit" className="w-full bg-orange-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-400">
              Login
            </button>

            {/* Sign Up Link */}
            <p className="text-slate-500 text-center pt-2">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign up.
              </Link>
            </p>
            <p className="text-slate-500 text-center py-2">or login with</p>
            <SocialLogin />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
