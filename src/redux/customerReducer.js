const initialCustomerState = {
    fullName:'',
    stateID:'',
    createdAt:'' 
}

export function customerReducer(state = initialCustomerState, action){
    switch(action.type){
        case "CREATE_CUSTOMER":
            return{
                ...state,
                fullName: action.payload.fullName,
                stateID: action.payload.stateID,
                createdAt: action.payload.createdAt
            }
        case "UPDATE_NAME":
            return{
                ...state,
                fullName: action.payload
            }
        default:
            return state;        
    }
}