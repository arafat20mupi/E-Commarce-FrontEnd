import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";
import signupImage from "../../../public/logiandsignup/Group 2014.png";

const SignUp = () => {
  const { createUser, updateProfileData } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password } = data;
    const currentDate = new Date().toISOString();
    console.log("Form Submitted on:", currentDate);
    console.log("Form Data:", data);

    try {
      const userCredential = await createUser(email, password);
      const user = userCredential.user;

      // Update user profile with name
      await updateProfileData(name);

      toast.success("Sign up successful!");
    } catch (error) {
      console.error(error);
      toast.error("Error during sign-up: " + (error.message || "Unknown error"));
    }
  };



  return (
    <div className="flex bg-gray-200 items-center justify-center min-h-screen">
      <Toaster />
      <div className="bg-white w-[900px] h-[600px] p-6 rounded-lg shadow-lg flex">
        {/* Form */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Email */}
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

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-400"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p className="text-slate-500 text-center pt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in.
            </Link>
          </p>

          {/* Social Login */}
          <p className="text-slate-500 text-center py-2">or sign up with</p>
          <SocialLogin />
        </div>

        {/* Image */}
        <div className="flex items-center justify-center">
          <img src={signupImage} className="h-[550px] w-[400px]" alt="Signup" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
