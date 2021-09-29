import { loginFailed, loginSuccess, loginStart } from "./AuthAction";
import axios from "axios";

export const login = async (user, dispatch ) => {
    dispatch(loginStart());
    try{
        const res = await axios.post("user/login", user);
        dispatch(loginSuccess(res.data));
        res.data.isAdmin && dispatch(loginSuccess(res.data))
    }catch(err) {
        dispatch(loginFailed());
    }
};
