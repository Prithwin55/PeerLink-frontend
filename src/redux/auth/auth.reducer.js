import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./auth.actionType";

const initial = {
    jwt: null,
    loading: false,
    error: null,
    state: null
}

export const authReducer = (state = initial, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            return { ...state, jwt:action.payload, loading: true, error: null }
        
        case LOGIN_SUCCESS:
            return {...state,loading:false,error:null}
            
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
            return {...state,loading:false,error:action.payload}
    
        default:
            return state;
    }
}