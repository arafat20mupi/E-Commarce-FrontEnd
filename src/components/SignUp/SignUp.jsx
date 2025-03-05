import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";
import signupImage from "../../../public/logiandsignup/Group 2014.png";
import { imageUpload } from "../../Utility/imageUpload";

const SignUp = () => {
  const { createUser, updateProfileData } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { name, email, password, img } = data;

    const image = await imageUpload(img[0]);
    console.log(image);

    try {
      const userCredential = await createUser(email, password);
      const user = userCredential.user;

      if (user) {
        await updateProfileData(name, image);
        toast.success("Sign up successful!");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error during sign-up: " + (error.message || "Unknown error"));
    }
  };

  return (
    <div className="flex bg-gray-200 items-center justify-center min-h-screen p-4">
      <div className="bg-white w-full max-w-4xl p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
        {/* Form */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
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

            {/* Image */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="img">
                Profile Picture
              </label>
              <input
                type="file"
                id="img"
                {...register("img", { required: "Image is required" })}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              />
              {errors.img && <p className="text-red-500 text-sm">{errors.img.message}</p>}
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
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src={signupImage} className="h-[550px] w-full object-cover" alt="Signup" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
