import { ActionTypes } from "./constants/action-types";
import axios from "axios";

export const signUp = (formValues) => async (dispatch, getState) => {
    try {
        const response = await axios.post(
            "http://3.140.210.76:8000/api/user/",
            formValues
        );
        console.log(response.data);
        dispatch({ type: ActionTypes.SIGN_UP, payload: response.data });
    } catch (e) {
        console.log(e);
    }
};

export const logIn = (formValues) => async (dispatch, getState) => {
    try {
        const response = await axios.post(
            "http://3.140.210.76:8000/api/token/",
            formValues
        );
        console.log(response);
        dispatch({ type: ActionTypes.LOG_IN, payload: response.data });
    } catch (e) {
        dispatch({ type: ActionTypes.ERROR, payload: e });
        console.log(e);
    }
};
