const BusinessNewsCard = ({ busins }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm">
      <figure>
        <img
          src={busins.image}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{busins.title}</h2>
        <p>{busins.description}</p>
        <p>{busins.tags} || {busins.publisher}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View All</button>
        </div>
      </div>
    </div>
  );
};

export default BusinessNewsCard;
