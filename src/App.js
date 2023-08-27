import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import PostHeader from "./components/PostHeader/PostHeader";
import WriteJoin from "./components/WriteJoin/WriteJoin";
import location from "./assets/location.png";
import edit from "./assets/edit.png";
import exclamation from "./assets/exclamation.png";
import ArticleCard from "./components/ArticleCard/ArticleCard";
import EducationCard from "./components/EducationCard/EducationCard";
import Meetup from "./components/Meetup/Meetup";
import JobCard from "./components/JobCard/JobCard";
import RecommendedGroups from "./components/RecommendedGroups/RecommendedGroups";
import { useSelector } from "react-redux";
function App() {
    const data = useSelector((state) => state.details.data);
    return (
        <div className="App">
            <div className="d-none d-lg-block d-xl-block d-xxl-block d-xxl-block">
                <Navbar></Navbar>
            </div>
            <div>{!data && <Banner />}</div>
            <div className="mt-4">
                <div className="d-flex navbar_padding align-items-center justify-content-between pb-3">
                    <div>
                        <PostHeader></PostHeader>
                    </div>
                    <div className="d-none d-lg-block d-xl-block d-xxl-block d-xxl-block">
                        <WriteJoin></WriteJoin>
                    </div>
                    <div className="d-block d-lg-none d-xl-none d-xxl-none d-xxl-none">
                        <div class="dropdown">
                            <button
                                class="btn btn-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Filters: All
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="line-width" />
                <div className="d-flex navbar_padding justify-content-between">
                    <div className="card-width">
                        <ArticleCard></ArticleCard>
                        <EducationCard></EducationCard>
                        <Meetup></Meetup>
                        <JobCard></JobCard>
                    </div>
                    <div className="sidebar ms-5 d-none d-lg-block d-xl-block d-xxl-block d-xxl-block">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src={location} alt="" className="icon" />

                                <input
                                    type="text"
                                    placeholder="Noida, India"
                                    className="form-control border-0 "
                                />
                            </div>
                            <img src={edit} alt="" className="icon" />
                        </div>
                        <hr className="py-0 my-3" />
                        <div className="d-flex">
                            <img src={exclamation} alt="" className="icon" />
                            <p className="location-text">
                                Your location will help us serve better and
                                extend a personalised experience.
                            </p>
                        </div>
                        <div className="d-none d-lg-block d-xl-block d-xxl-block d-xxl-block">
                            <RecommendedGroups></RecommendedGroups>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
