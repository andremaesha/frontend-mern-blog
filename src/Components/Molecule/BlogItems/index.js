import React from "react";
import "./BlogItems.scss";
import { Button, Gap } from "../../atoms/index";
import { useHistory } from "react-router-dom";

const BlogItems = ({ title, body, name, date, image, _id, onDelete }) => {
    const history = useHistory();

    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt="Post" />
            <div className="content-details">
                <div className="title-wrapper">
                    <p className="title">{title}</p>
                    <div className="edit-wrapper">
                        <p
                            className="edit"
                            onClick={() => history.push(`/create-blog/${_id}`)}
                        >
                            Edit
                        </p>{" "}
                        |{" "}
                        <p className="delete" onClick={() => onDelete(_id)}>
                            Delete
                        </p>
                    </div>
                </div>
                <p className="author">
                    {name} - {date}
                </p>
                <p className="body">{body}</p>
                <Gap height={20} />
                <Button
                    title="View Detail"
                    onClick={() => history.push(`/detail-blog/${_id}`)}
                />
            </div>
        </div>
    );
};

export default BlogItems;
