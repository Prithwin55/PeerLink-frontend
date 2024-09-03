import axios from "axios"
import { API_AUTH_BASE_URL, API_BASE_URL } from "../../config/Api"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./auth.actionType";
import { createBrowserHistory } from "history";



export const loginUserAction = (loginData,nav) => async (dispatch) => {
    console.log(loginData);
    
    dispatch({type:LOGIN_REQUEST})
    try {
        
        const { data } =await axios.post(`${API_BASE_URL}${API_AUTH_BASE_URL}/signin`, loginData);
        
        if (data.token) {
            localStorage.setItem("jwt", data.token);
            console.log(data.token);
            nav("/home/post")
        }
       
        console.log("loggedIn",data.token)
        dispatch({type:LOGIN_SUCCESS,payload:data.token})

    } catch (error) {
        console.log(error.response.data.message);
        
        dispatch({type:LOGIN_FAILURE,payload:error})
    }
}



export const registerUserAction = (registerData,nav) => async(dispatch) => {
    
    dispatch({type:LOGIN_REQUEST})
    try {
        
        const { data } = await axios.post(`${API_BASE_URL}${API_AUTH_BASE_URL}/signup`,registerData);
        if (data.token) {
            localStorage.setItem("jwt", data.token);
            console.log(data.token);
            console.log(data.message)
            console.log(data.token);
            nav("/home/post")
        }
        console.log("registered",data)
        dispatch({type:LOGIN_SUCCESS,payload:data.token})

    } catch (error) {
        console.log(error.response.data.message);
        
        dispatch({type:LOGIN_FAILURE,payload:error})
    }
}