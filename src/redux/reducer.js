import { ActionTypes } from "./constants/action-types";
const initialUserState = {
    user: {},
};

export const userReducer = (state = initialUserState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SIGN_UP:
            return { ...state, user: payload };
        case ActionTypes.LOG_IN:
            return { ...state, user: payload };
        default:
            return state;
    }
};

const initialErrorState = {
    error: {},
};

export const errorReducer = (state = initialErrorState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ERROR:
            return { ...state, error: payload };
        default:
            return state;
    }
};
