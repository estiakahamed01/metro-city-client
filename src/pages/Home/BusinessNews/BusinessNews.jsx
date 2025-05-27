import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import BusinessNewsCard from "./BusinessNewsCard";

const BusinessNews = () => {
    const [business, setBusiness] = useState([]);
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => {
                const businessNews = data.filter(article =>article.tags.includes("Business"))
                setBusiness(businessNews)
            });
    }, [])
    return (
        <div className="my-10">
            <SectionTitle liteHeading="Business News"></SectionTitle>
            <div className="grid grid-cols-2 gap-10">
                {
                    business.map((busins,index) => <BusinessNewsCard key={index} busins={busins}></BusinessNewsCard>)
                }
            </div>
        </div>
    );
};

export default BusinessNews;