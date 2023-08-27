import React, { useState } from "react";
import login_image from "../../assets/login_image.png";
import "./LoginModal.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { dataActions } from "../../redux/dataSlice";
import { useDispatch } from "react-redux";
const LoginModal = () => {
    const dispatch = useDispatch();
    const [signIn, setSignIn] = useState(false);
    const [formdata, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });
    const changeHandler = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (
            formdata.firstname &&
            formdata.lastname &&
            formdata.password &&
            formdata.confirmpassword &&
            formdata.email
        ) {
            dispatch(dataActions.adddata(formdata));
            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                confirmpassword: "",
            });
        }
    };
    return (
        <div>
            <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                        <div
                            className="modal-header"
                            style={{ background: "#9aedcc" }}
                        >
                            <h1
                                className="modal-title fs-6 text-green fw-bold text-center"
                                id="exampleModalLabel"
                            >
                                Let's learn, share & inspire each other with our
                                passion for computer engineering. Sign up now 🤘🏼
                            </h1>
                        </div>
                        <div className="modal-body d-flex justify-content-between p-4">
                            <div>
                                <h1
                                    className="text-start fw-bold fs-3 mb-3"
                                    onClick={() => {
                                        setSignIn(!signIn);
                                    }}
                                >
                                    {signIn === true
                                        ? "Signin"
                                        : "CreateAccount"}
                                </h1>
                                <form onSubmit={submitHandler}>
                                    {!signIn === true ? (
                                        <div className="input-group mb-1">
                                            <input
                                                type="text"
                                                aria-label="First name"
                                                className="form-control py-3 bg-light"
                                                placeholder="First Name"
                                                name="firstname"
                                                onChange={changeHandler}
                                                value={formdata.firstname}
                                            />
                                            <input
                                                type="text"
                                                aria-label="Last name"
                                                className="form-control py-3 bg-light"
                                                placeholder="Last Name"
                                                name="lastname"
                                                onChange={changeHandler}
                                                value={formdata.lastname}
                                            />
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                    <input
                                        type="text"
                                        aria-label="Last name"
                                        className="form-control py-3 mb-1 bg-light"
                                        placeholder="Email"
                                        name="email"
                                        onChange={changeHandler}
                                        value={formdata.email}
                                    />
                                    <input
                                        type="text"
                                        aria-label="Last name"
                                        className="form-control py-3 mb-1 bg-light"
                                        placeholder="Password"
                                        name="password"
                                        onChange={changeHandler}
                                        value={formdata.password}
                                    />
                                    {!signIn ? (
                                        <input
                                            type="text"
                                            aria-label="Last name"
                                            className="form-control py-3 bg-light"
                                            placeholder="Confirm Password"
                                            name="confirmpassword"
                                            onChange={changeHandler}
                                            value={formdata.confirmpassword}
                                        />
                                    ) : (
                                        <></>
                                    )}
                                    <button
                                        type="submit"
                                        class="btn btn-primary w-100 mt-3 rounded-pill"
                                    >
                                        {signIn === true
                                            ? "Signin"
                                            : "CreateAccount"}
                                    </button>
                                </form>
                                <button
                                    type="button"
                                    class="btn btn-outline-dark w-100 mt-3 rounded-pill"
                                    data-bs-dismiss="modal"
                                >
                                    <FaFacebook className="me-2 fs-4"></FaFacebook>
                                    Sign up with Facebook
                                </button>
                                <button
                                    type="button"
                                    class="btn btn-outline-dark w-100 mt-2 rounded-pill"
                                    data-bs-dismiss="modal"
                                >
                                    <FcGoogle className="me-2 fs-4"></FcGoogle>
                                    Sign up with Google
                                </button>
                            </div>
                            <div className="">
                                <div
                                    // type="button"
                                    className="text-black fw-bold w-100 text-end"
                                    // data-bs-toggle="modal"
                                    // data-bs-target="#exampleModal"
                                >
                                    {signIn
                                        ? "Register youself !! "
                                        : "Already have an account "}
                                    <span
                                        className="text-primary"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            setSignIn(!signIn);
                                        }}
                                    >
                                        {signIn ? "Create Account" : "Sign In"}
                                    </span>
                                </div>
                                <img
                                    src={login_image}
                                    className="login-image"
                                    alt=""
                                />
                                <p className="text-muted terms-font">
                                    By signing up, you agree to our Terms &
                                    conditions, Privacy policy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
