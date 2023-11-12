import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around mt-2 d-flex align-items-center ">
      <Link to={"/"}>
        <img src="/public/img/logo-zorromontes3.jpeg" alt="logo" width={250} />
      </Link>
      <div>
        <Link to={"/"}>
          <button className="btn btn-outline-success mx-2 align-items-center">Inicio</button>
        </Link>
        <Link to={"/category/libros"}>
          <button className="btn btn-outline-success mx-2">Libros</button>
        </Link>
        <Link to={"/category/cafe"}>
          <button className="btn btn-outline-success mx-2">Cafe</button>
        </Link>
      </div>
      <div>
      <CartWidget />
      <p className="text-end fs-6">3</p>
      </div>
    </nav>
  );
};
