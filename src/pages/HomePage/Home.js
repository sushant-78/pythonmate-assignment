import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <Link to="/signup">sign up page</Link> |{" "}
            <Link to="/login">login page</Link>{" "}
        </div>
    );
};

export default Home;
