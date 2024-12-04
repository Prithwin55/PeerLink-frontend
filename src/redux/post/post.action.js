import { type } from "@testing-library/user-event/dist/type"
import { api, API_AUTH_BASE_URL, API_BASE_URL, API_POST_BASE_URL } from "../../config/Api"
import { CREATE_POST_FAILURE, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, GET_ALL_POST_FAILURE, GET_ALL_POST_REQUEST, GET_ALL_POST_SUCCESS, GET_USERS_POST_FAILURE, GET_USERS_POST_REQUEST, GET_USERS_POST_SUCCESS, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS } from "./post.actionType"

export const createPostAction = (postData) =>async (dispatch) =>{
    dispatch({type:CREATE_POST_REQUEST})
    
    try {
        const jwt=localStorage.getItem("jwt")
        
        const { data } = await api.post(`${API_BASE_URL}${API_POST_BASE_URL}/create`, postData,
            {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
                
            }
        )
        dispatch({ type: CREATE_POST_SUCCESS, payload: data })
        console.log("Data",data)

    } catch (error) {
        dispatch({ type: CREATE_POST_FAILURE, payload: error })
        console.log("ERROR",error)
    }

}

export const getAllPostAction = () =>async (dispatch) =>{
    dispatch({type:GET_ALL_POST_REQUEST})
    
    try {
        
        const { data } = await api.get(`${API_BASE_URL}${API_AUTH_BASE_URL}/api/peerlink/post`)
        dispatch({ type: GET_ALL_POST_SUCCESS, payload: data })
        console.log("Data",data)

    } catch (error) {
        dispatch({ type: GET_ALL_POST_FAILURE, payload: error })
        console.log("ERROR",error)
    }

}

export const getUsersPostAction = (userId) =>async (dispatch) =>{
    dispatch({type:GET_USERS_POST_REQUEST})
    
    try {
        
        const { data } = await api.get(`${API_BASE_URL}${API_AUTH_BASE_URL}/api/peerlink/post/user/${userId}`)
        dispatch({ type: GET_USERS_POST_SUCCESS, payload: data })
        console.log("Data",data)

    } catch (error) {
        dispatch({ type: GET_USERS_POST_FAILURE, payload: error })
        console.log("ERROR",error)
    }

}

export const likePostAction = (postId) =>async (dispatch) =>{
    dispatch({type:LIKE_POST_REQUEST})
    
    try {
        
        const { data } = await api.get(`${API_BASE_URL}${API_AUTH_BASE_URL}/api/peerlink/post/like/${postId}`)
        dispatch({ type: LIKE_POST_SUCCESS, payload: data })
        console.log("Data",data)

    } catch (error) {
        dispatch({ type: LIKE_POST_FAILURE, payload: error })
        console.log("ERROR",error)
    }

}