const intialState = []

export const postReducer = (state= intialState, action) =>{
    state = action.payload;
    return state
}