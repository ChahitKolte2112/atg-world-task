import React from 'react';
import './PostHeader.css'

const PostHeader = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid px-0">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">All Posts(32)</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Article</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Event</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Education</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Job</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default PostHeader;