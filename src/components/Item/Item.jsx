import { Link } from "react-router-dom";

export const Item = ({ id, name, img }) => {
  return (
    <div className="border m-2">
      <div className="card">
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title text-center fs-4 fw-bolder p-3">{name}</h5>
          <img src={img} alt="" width={300}/>
          <Link to={`/item/${id}`}>
            <button className="btn btn-success m-4">Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
