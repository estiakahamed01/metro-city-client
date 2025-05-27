import Banner from "../Banner/Banner";
import BreakingNews from "../BreakingNews/BreakingNews";
import BusinessNews from "../BusinessNews/BusinessNews";
import Plans from "../Plans/Plans";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Plans></Plans>
      <BreakingNews></BreakingNews>
      <BusinessNews></BusinessNews>
    </div>
  );
};

export default Home;
