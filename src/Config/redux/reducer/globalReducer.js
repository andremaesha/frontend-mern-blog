const initialState = {
    name: "Andre Maesha",
};

const globalReducer = (state = initialState, action) => {
    if (action.type === "UPDATE_NAME") {
        return {
            ...state,
            name: "anjing babi",
        };
    }

    return state;
};

export default globalReducer;
