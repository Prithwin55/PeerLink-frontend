import { GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "./auth.actionType";

const initial = {
    jwt: null,
    loading: false,
    error: null,
    state: null,
    payload:null
}

export const authReducer = (state = initial, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case GET_PROFILE_REQUEST:
        case UPDATE_PROFILE_REQUEST:
            return { ...state, jwt: action.payload, loading: true, error: null }
        
        case GET_PROFILE_SUCCESS:
        case UPDATE_PROFILE_SUCCESS:
            return {...state,loading:false,error:null,payload:action.payload}
        
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {...state,loading:false,error:null}
            
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
        case GET_PROFILE_FAILURE:
        case UPDATE_PROFILE_FAILURE:
            return {...state,loading:false,error:action.payload}
    
        default:
            return state;
    }
}