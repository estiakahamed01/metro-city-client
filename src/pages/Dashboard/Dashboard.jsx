import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div>
            <h2 className="text-7xl font-semibold text-slate-200 text-center py-8 uppercase">
            Admin Dashboard<span className="text-teal-900 text-lg"></span>
          </h2>
            <div className="flex space-x-10">
            <div className="w-60 min-h-screen px-6 pt-6 rounded-xl bg-green-200">
                <ul className="menu w-full text-center space-y-4">
                    <li className="btn p-3 bg-violet-600 text-white rounded-2xl">
                        <NavLink to="/"><FaHome />Home</NavLink></li>
                    <li className="btn bg-emerald-900 text-white rounded-2xl"><NavLink to="allUsers">All users</NavLink></li>
                    <li className="btn bg-emerald-900 text-white rounded-2xl"><NavLink to="adminAllArticles">All Articles</NavLink></li>
                    <li className="btn bg-emerald-900 text-white rounded-2xl"><NavLink to="addPublishers">Add Publisher</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;