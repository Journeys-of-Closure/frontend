import "./NavBar.css";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/reducers/modalSlice";
import { Link } from "react-router-dom";

export default function NavBar() {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(toggleModal());
  };
  return (
    <>
      <div id="navbar">
        <div className="nav-btn">
          <Link to="/">
            <p>HOME</p>
          </Link>
        </div>
        <div className="nav-btn">
          <p>DONATE</p>
        </div>
        <div className="nav-btn">
          <Link to="/about">
            <p>ABOUT US</p>
          </Link>
        </div>
        <div className="nav-btn" onClick={openModal}>
          <p>LOGIN</p>
        </div>
      </div>
    </>
  );
}
