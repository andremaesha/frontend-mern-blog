import Axios from "axios";

export const setDataBlog = (page) => (dispatch) => {
    Axios.get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=2`)
        .then((result) => {
            const resApi = result.data;

            dispatch({
                type: "UPDATE_DATA_BLOG",
                payload: resApi.data,
            });
            dispatch({
                type: "UPDATE_PAGE",
                payload: {
                    currentPage: resApi.current_page,
                    totalPage: Math.ceil(resApi.total_data / resApi.per_page),
                },
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
