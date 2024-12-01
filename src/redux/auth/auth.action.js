import axios from "axios"
import { api, API_AUTH_BASE_URL, API_BASE_URL } from "../../config/Api"
import { GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "./auth.actionType";
import { createBrowserHistory } from "history";



export const loginUserAction = (loginData,nav) => async (dispatch) => {
    console.log(loginData);
    
    dispatch({type:LOGIN_REQUEST})
    try {
        
        const { data } =await axios.post(`${API_BASE_URL}${API_AUTH_BASE_URL}/signin`, loginData);
        
        if (data.token) {
            localStorage.setItem("jwt", data.token);
            console.log(data.token);
            nav("/home/posts")
        }
       
        console.log("loggedIn",data.token)
        dispatch({type:LOGIN_SUCCESS,payload:data.token})

    } catch (error) {
        console.log(error.response.data.message);
        
        dispatch({type:LOGIN_FAILURE,payload:error})
    }
}



export const registerUserAction = (registerData,nav) => async(dispatch) => {
    
    dispatch({type:REGISTER_REQUEST})
    try {
        
        const { data } = await axios.post(`${API_BASE_URL}${API_AUTH_BASE_URL}/signup`,registerData);
        if (data.token) {
            localStorage.setItem("jwt", data.token);
            console.log(data.token);
            console.log(data.message)
            console.log(data.token);
            nav("/home/posts")
        }
        console.log("registered",data)
        dispatch({type:REGISTER_SUCCESS,payload:data.token})

    } catch (error) {
        console.log(error.response.data.message);
        
        dispatch({type:REGISTER_FAILURE,payload:error})
    }
}

export const getProfileAction = (jwt) => async(dispatch) => {
    
    dispatch({type:GET_PROFILE_REQUEST})
    try {
        console.log("inside "+jwt)
        const { data } = await axios.get(`${API_BASE_URL}/api/peerlink/user/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
            
        });
        
        console.log("Profile data",data)
        dispatch({type:GET_PROFILE_SUCCESS,payload:data})

    } catch (error) {
        console.log(error);
        
        dispatch({type:GET_PROFILE_FAILURE,payload:error})
    }
}

export const updateProfileAction = (reqData) => async(dispatch) => {
    
    dispatch({type:UPDATE_PROFILE_REQUEST})
    try {
        
        const jwt=localStorage.getItem("jwt")

        const { data } = await api.put(`${API_BASE_URL}/api/peerlink/user/update`, reqData, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        });
        
        console.log("Update Profile data",data)
        dispatch({type:UPDATE_PROFILE_SUCCESS,payload:data})

    } catch (error) {
        console.log(error?.response?.data?.message); 
        
        dispatch({type:UPDATE_PROFILE_FAILURE,payload:error})
    }
}