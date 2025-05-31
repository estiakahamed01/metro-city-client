import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import logo from "../../assets/Logo.png";

const SignUp = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser,updateUserProfile } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
                .then(() => {
                    console.log('user profile info updated')
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User created successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/');

                })
                .catch(error => console.log(error))
        })
  };

  return (
    <div className="w-10/12 mx-auto pt-36">
      <div className="hero bg-green-50 px-10 py-14 flex flex-col items-center justify-center">
        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold">Join Metro City News Today</h1>
          <p className="py-6 w-8/12 text-center">
            Sign up to stay in the loop with the latest news, trending topics,
            and stories that matter to you.
          </p>
        </div>
        <div className="hero-content flex flex-row justify-between w-9/12">
          <div className="card bg-[#5383cf1c] border-[1px] border-red-300 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <span className="text-red-600">Name field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                  required
                />
                {errors.email && (
                  <span className="text-red-600">Email field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  {...register("photoURL", { required: true })}
                  className="input input-bordered"
                  required
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>
              <div className="form-control mt-6 flex flex-col justify-center items-center">
                <input
                  type="submit"
                  className="btn btn-primary w-full mb-7"
                  value="Sign Up"
                />
                <Link to="/signIn">
                  <button className="font-semibold">
                    Already Have An Account ?{" "}
                    <span className="text-red-600">Sign In</span>
                  </button>
                </Link>
              </div>
            </form>
          </div>
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
