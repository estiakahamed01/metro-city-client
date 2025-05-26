import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img01 from '../../../assets/BreakingNews/BrkigNews.png'




const BreakingNews = () => {
    return (
        <div>
            <SectionTitle heading="Breaking News" liteHeading="Breaking News"></SectionTitle>
            <img  className="w-full my-10" src={img01} alt="" />
        </div>
    );
};

export default BreakingNews;