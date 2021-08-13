import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BlogItems, Button, Gap } from "../../Components/index";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { setDataBlog } from "../../Config/redux/action";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Axios from "axios";

const Home = () => {
    const [counter, setCounter] = useState(1);
    const { dataBlogs, page } = useSelector((state) => state.homeReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setDataBlog(counter));
    }, [dispatch, counter]);

    const previous = () => {
        setCounter(counter <= 1 ? 1 : counter - 1);
    };

    const next = () => {
        setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
    };

    const confirmDelete = (id) => {
        confirmAlert({
            title: "Confirm to Delete",
            message: "Are you sure to do this.",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        Axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
                            .then((res) => {
                                console.log(res);
                                dispatch(setDataBlog(counter));
                            })
                            .catch((err) => console.log(err));
                    },
                },
                {
                    label: "No",
                    onClick: () => console.log("User Tidak Setuju"),
                },
            ],
        });
    };

    const history = useHistory();

    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button
                    title="Create blog"
                    onClick={() => history.push("/create-blog")}
                />
            </div>
            <Gap height={20} />
            <div className="content-wrapper">
                {dataBlogs.map((blog) => (
                    <BlogItems
                        key={blog._id}
                        image={`http://localhost:4000/${blog.image}`}
                        title={blog.title}
                        body={blog.body}
                        name={blog.name}
                        date={blog.createdAt}
                        _id={blog._id}
                        onDelete={confirmDelete}
                    />
                ))}
            </div>
            <div className="pagination">
                <Button title="Previous" onClick={previous} />
                <Gap width={20} />
                <p className="text-page">
                    {page.currentPage} / {page.totalPage}
                </p>
                <Gap width={20} />
                <Button title="Next" onClick={next} />
            </div>
            <Gap height={20} />
        </div>
    );
};

export default Home;
