const AllArticleCard = ({ news }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="min-w-0.5">
        <img className="w-full"
          src={news.image}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{news.title}</h2>
        <p>{news.description}</p>
        <p>{news.tags} | {news.publisher}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See More</button>
        </div>
      </div>
    </div>
  );
};

export default AllArticleCard;
