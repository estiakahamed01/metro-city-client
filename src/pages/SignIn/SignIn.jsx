import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../hook/useAxiosPublic";

const SignIn = () => {
  const { signIn, singInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  const handleGoogleSignIn = () => {
      singInWithGoogle()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    };
  return (
    <div className="hero bg-base-200 pt-40">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <p className="py-6 text-center">
            <span className="text-2xl font-bold text-emerald-400">
              Hello there! 👋
            </span>
            <br /> Welcome to Metro City News Log in to explore the latest
            headlines, breaking news, and exclusive stories tailored for you.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
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
              <input
                type="submit"
                className="btn btn-neutral mt-4"
                value="Sign In"
              />
            </form>
            <Link to="/signUp">
              <button className="font-semibold">
                Don't Have An Account ?{" "}
                <span className="text-red-600">Sign Up</span>
              </button>
            </Link>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-primary mb-7 w-full mt-6"
            >
              <span className="text-2xl">
                <FcGoogle />
              </span>
              Sign In With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
