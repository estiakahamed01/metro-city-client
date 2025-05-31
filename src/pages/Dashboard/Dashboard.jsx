import { Link, Outlet } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Dashboard = () => {
    return (
        <div>
            <SectionTitle liteHeading={"Admin Dashboard"}></SectionTitle>
            <div className="flex space-x-10">
            <div className="w-60 min-h-screen px-6 pt-6 rounded-xl bg-green-200">
                <ul className="menu w-full text-center space-y-4">
                    <li className="btn bg-violet-600 text-white rounded-2xl"><Link to="/">Home</Link></li>
                    <li className="btn bg-emerald-900 text-white rounded-2xl"><Link to="allUsers">All users</Link></li>
                    <li className="btn bg-emerald-900 text-white rounded-2xl"><Link to="adminAllArticles">All Articles</Link></li>
                    <li className="btn bg-emerald-900 text-white rounded-2xl"><Link to="addPublishers">Add Publisher</Link></li>
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