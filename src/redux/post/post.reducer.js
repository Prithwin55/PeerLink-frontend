import { CREATE_POST_FAILURE, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, GET_ALL_POST_FAILURE, GET_ALL_POST_REQUEST, GET_ALL_POST_SUCCESS, GET_USERS_POST_FAILURE, GET_USERS_POST_REQUEST, GET_USERS_POST_SUCCESS, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS } from "./post.actionType"

const initial = {
    post: null,
    loading: false,
    error: null,
    posts: [],
    like:null
}

export const authReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_ALL_POST_REQUEST:
        case LIKE_POST_REQUEST:
        case GET_USERS_POST_REQUEST:
        case CREATE_POST_REQUEST:
            return { ...state, loading: true, error: null }
        
        // case LIKE_POST_SUCCESS:
        // case GET_USERS_POST_SUCCESS:
        // case GET_ALL_POST_SUCCESS:
        case CREATE_POST_SUCCESS:
            return { ...state, loading: false, error: null, posts: [action.payload, ...state.post], post: action.payload }
            
        case GET_ALL_POST_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: null
            }
        case LIKE_POST_SUCCESS:
            return {
                ...state, like: action.payload,
                posts: state.posts.map((item) => item.id === action.payload.id ? action.payload : item),
                loading: false,
                error:null
            }
        case LIKE_POST_FAILURE:
        case GET_ALL_POST_FAILURE:
        case CREATE_POST_FAILURE:
        //case GET_USERS_POST_FAILURE:
            return {...state,loading:false,error:action.payload}
    
        default:
            return state;
    }
}