
import { useEffect, useState } from "react";
import AllArticleCard from "./AllArticleCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const AllArticles = () => {
    const [allNews, setAllNews] = useState([]);
        useEffect(() => {
            fetch('news.json')
                .then(res => res.json())
                .then(data => setAllNews(data));
        }, [])
    return (
        <div className="pt-32 pb-16">
            <SectionTitle liteHeading={"All Articles"}></SectionTitle>
            <div className="w-10/12 mx-auto grid grid-cols-2 gap-5">
                {
                    allNews.map((news,index) => <AllArticleCard key={index} news={news}></AllArticleCard>)
                }
            </div>
        </div>
    );
};

export default AllArticles;