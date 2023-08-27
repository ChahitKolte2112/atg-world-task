import React from "react";
import atg_world from "../../assets/argworld_logo.png";
import search_icon from "../../assets/search_icon.png";
import LoginModal from "../LoginModal/LoginModal";
import "./Navbar.css";
import profileuser from "../../assets/profileuser.png";
import { dataActions } from "../../redux/dataSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Navbar = () => {
    const data = useSelector((state) => state.details.data);
    console.log(data);
    const dispatch = useDispatch();
    return (
        <div className="navbar_padding">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex justify-content-between">
                    <img
                        src={atg_world}
                        alt=""
                        className="navbar-brand logo_size"
                    />

                    <nav class="navbar  ">
                        <form
                            class="container-fluid"
                            style={{
                                border: "1px solid grey",
                                borderRadius: "25px",
                                width: "350px",
                            }}
                        >
                            <div class="input-group">
                                <span
                                    className="input-group-text bg-transparent border-0 rounded-4 pe-2 overflow-hidden"
                                    id="basic-addon1"
                                >
                                    <img src={search_icon} alt="" />
                                </span>
                                <input
                                    type="text"
                                    className="form-control navbar-input"
                                    placeholder="Search for your group in ATG"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                        </form>
                    </nav>
                    <div
                        className="justify-content-end"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item dropdown fw-bold">
                                {!data && (
                                    <button
                                        type="button"
                                        class="btn nav-a dropdown-toggle text-decoration-none text-black fw-bold"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                    >
                                        Create account.{" "}
                                        <span className="text-primary">
                                            It's free
                                        </span>
                                    </button>
                                )}
                                {data && (
                                    <div
                                        style={{
                                            display: "flex",
                                            backgroundColor: "transparent",

                                            alignItems: "center",
                                        }}
                                    >
                                        <img
                                            src={profileuser}
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                margin: "5px",
                                            }}
                                            alt="profile"
                                        />
                                        <h4 style={{ margin: "5px" }}>
                                            {data.firstname}
                                        </h4>
                                        <button
                                            className="rounded-2"
                                            type="button"
                                            style={{cursor:"pointer"}}
                                            onClick={() => {
                                                dispatch(
                                                    dataActions.deletedata()
                                                );
                                            }}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item">Action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <LoginModal></LoginModal>
            </nav>
        </div>
    );
};

export default Navbar;
