import Axios from "axios";

export const setForm = (formType, formValue) => {
    return {
        type: "SET_FORM_DATA",
        formType,
        formValue,
    };
};

export const setImgPreview = (payload) => {
    return {
        type: "SET_IMG_PREVIEW",
        payload,
    };
};

export const postToApi = (form) => {
    const { title, body, image } = form;

    const data = new FormData();
    data.append("title", title);
    data.append("body", body);
    data.append("image", image);

    Axios.post("http://localhost:4000/v1/blog/post", data, {
        headers: {
            "content-type": "multipart/form-data",
        },
    })
        .then((res) => {
            console.log("post success: ", res);
        })
        .catch((err) => {
            console.log(err);
        });
};

export const updateToApi = (form, id) => {
    const { title, body, image } = form;

    const data = new FormData();
    data.append("title", title);
    data.append("body", body);
    data.append("image", image);

    Axios.put(`http://localhost:4000/v1/blog/post/${id}`, data, {
        headers: {
            "content-type": "multipart/form-data",
        },
    })
        .then((res) => {
            console.log("Update success: ", res);
        })
        .catch((err) => {
            console.log(err);
        });
};
