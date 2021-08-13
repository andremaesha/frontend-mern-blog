import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Header } from "../../Components";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";
import "./MainApp.scss";

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <Header />
            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route
                            path="/create-blog/:id?"
                            component={CreateBlog}
                        />
                        <Route path="/detail-blog/:id" component={DetailBlog} />
                        <Route path="/" component={Home} />
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>
    );
};

export default MainApp;
