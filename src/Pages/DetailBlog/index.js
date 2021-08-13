import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Gap, Link } from "../../Components/atoms";
import Axios from "axios";
import "./DetailBlog.scss";
import { Fragment } from "react";

const DetailBlog = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const id = props.match.params.id;

        Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
            .then((res) => {
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.match.params.id]);

    const history = useHistory();

    return (
        <div className="detail-blog-wrapper">
            {data && (
                <Fragment>
                    <img
                        className="img-cover"
                        src={`http://localhost:4000/${data.image}`}
                        alt="thumb"
                    />
                    <p className="blog-title">{data.title}</p>
                    <p className="blog-author">
                        {data.author.name} - {data.createdAt}
                    </p>
                    <p className="blog-body">{data.body}</p>
                    <Gap height={20} />
                    <Link
                        title="Kembali Ke Home Page"
                        onClick={() => history.push("/")}
                    />
                </Fragment>
            )}
        </div>
    );
};

export default withRouter(DetailBlog);
