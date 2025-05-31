import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
         Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Log Out successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });

                })
      .catch((error) => console.log(error));
  };
  const navLinks = (
    <div className="flex flex-row justify-center items-center space-x-5">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allArticles">All Articles</Link>
      </li>
      <li>
        <Link to="/addArticle">Add Articles</Link>
      </li>
      <li>Subscription</li>
      <li>Dashboard</li>
      <li>My Articles</li>
      <li>Premium Articles</li>
    </div>
  );
  return (
    <div>
      <div className="navbar fixed z-10 max-w-screen-2xl bg-opacity-30 bg-emerald-200 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <img className="w-32" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button onClick={handleLogOut} className="btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signIn">
                <button className="btn">Sign In</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
