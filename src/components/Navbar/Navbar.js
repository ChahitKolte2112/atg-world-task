import React from "react";
import atg_world from "../../assets/argworld_logo.png";
import search_icon from "../../assets/search_icon.png";
import LoginModal from "../LoginModal/LoginModal";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar_padding">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex justify-content-between">
                    <img
                        src={atg_world}
                        alt=""
                        className="navbar-brand logo_size"
                    />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="search-bar p-0 border rounded bg-light">
                        <div className="input-group mb-3 align-content-center p-0 border border-0 mx-auto">
                            <span
                                className="input-group-text bg-transparent border-0 pe-2"
                                id="basic-addon1"
                            >
                                <img src={search_icon} alt="" />
                            </span>
                            <input
                                type="text"
                                className="form-control border-0 bg-light ps-2"
                                placeholder="Search for your favourite groups in ATG"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                    </div>
                    <div
                        className="justify-content-end"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item dropdown fw-bold">
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
