import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Button, Gap, Input, Link, TextArea, Upload } from "../../Components";
import { useSelector, useDispatch } from "react-redux";
import "./CreateBlog.scss";
import {
    postToApi,
    setForm,
    setImgPreview,
    updateToApi,
} from "../../Config/redux/action";
import Axios from "axios";

const CreateBlog = (props) => {
    const { form, imgPreview } = useSelector(
        (state) => state.createBlogReducer
    );
    const { title, body } = form;
    const [isUpdate, setIsUpdate] = useState(false);
    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        const id = props.match.params.id;
        if (id) {
            setIsUpdate(true);
            Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
                .then((res) => {
                    const data = res.data.data;
                    dispatch(setForm("title", data.title));
                    dispatch(setForm("body", data.body));
                    dispatch(
                        setImgPreview(`http://localhost:4000/${data.image}`)
                    );

                    console.log(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    const onSubmit = () => {
        const id = props.match.params.id;
        if (isUpdate) {
            console.log("Update Blog Post");
            updateToApi(form, id);
        } else {
            console.log("Create New Blog");
            postToApi(form);
        }
    };

    const onImageUpload = (event) => {
        const file = event.target.files[0];
        dispatch(setForm("image", file));
        dispatch(setImgPreview(URL.createObjectURL(file)));
    };

    return (
        <div className="blog-post">
            <Link title="Kembali" onClick={() => history.push("/")} />
            <p className="title">
                {isUpdate ? "Update" : "Create New"} blog post
            </p>
            <Input
                label="Post Title"
                value={title}
                onChange={(event) =>
                    dispatch(setForm("title", event.target.value))
                }
            />
            <Upload
                onChange={(event) => onImageUpload(event)}
                img={imgPreview}
            />
            <TextArea
                title="andre"
                value={body}
                onChange={(event) =>
                    dispatch(setForm("body", event.target.value))
                }
            />
            <Gap height={20} />
            <div className="button-action">
                <Button
                    title={isUpdate ? "Update" : "Save"}
                    onClick={onSubmit}
                />
            </div>
            <Gap height={20} />
        </div>
    );
};

export default withRouter(CreateBlog);
