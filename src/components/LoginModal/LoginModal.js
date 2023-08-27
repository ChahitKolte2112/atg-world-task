import React from 'react';
import login_image from '../../assets/login_image.png'
import './LoginModal.css'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'

const LoginModal = () => {
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    {/* <button type="button" className="btn-close absolute" data-bs-dismiss="modal" aria-label="Close"></button> */}
                    <div className="modal-content">
                        <div className="modal-header bg-success">
                            <h1 className="modal-title fs-6 text-white fw-bold text-center" id="exampleModalLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h1>
                        </div>
                        <div className="modal-body d-flex justify-content-between p-4">
                            <div>
                                <h1 className='text-start fw-bold fs-3 mb-3'>Create Account</h1>
                                <div className="input-group">
                                    <input type="text" aria-label="First name" className="form-control py-3 bg-light" placeholder='First Name' />
                                    <input type="text" aria-label="Last name" className="form-control py-3 bg-light" placeholder='Last Name' />
                                </div>
                                <input type="text" aria-label="Last name" className="form-control py-3 bg-light" placeholder='Email' />
                                <input type="text" aria-label="Last name" className="form-control py-3 bg-light" placeholder='Password' />
                                <input type="text" aria-label="Last name" className="form-control py-3 bg-light" placeholder='Confirm Password' />
                                <button type="button" class="btn btn-primary w-100 mt-3 rounded-pill" data-bs-dismiss="modal">Create Account</button>
                                <button type="button" class="btn btn-outline-dark w-100 mt-3 rounded-pill" data-bs-dismiss="modal">
                                    <FaFacebook className='me-2 fs-4'></FaFacebook>
                                    Sign up with Facebook</button>
                                <button type="button" class="btn btn-outline-dark w-100 mt-2 rounded-pill" data-bs-dismiss="modal">
                                    <FcGoogle className='me-2 fs-4'></FcGoogle>
                                    Sign up with Google</button>
                            </div>
                            <div className=''>
                                <button type="button" class="btn nav-a dropdown-toggle text-decoration-none text-black fw-bold w-100 text-end" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Already have an account? <span className='text-primary'>Sign In</span>
                                </button>
                                <img src={login_image} alt="" />
                                <p className='text-muted terms-font'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                            </div>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;