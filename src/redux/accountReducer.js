import { createStore } from "redux";
const initialState = {
    balance: 1000,
    loan: 0,
    loanPurpose: ""
}

export default function accountReducer(state = initialState, action) {
    console.log('Reducer Called=>')
    switch (action.type) {
        case "DEPOSIT":
            return { ...state, balance: state.balance + parseInt(action.payload) }

        case "WITHDRAW":
            return { ...state, balance: state.balance - parseInt(action.payload) }

        case "REQUEST_LOAN":
            if (state.loan > 0) return state;
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount
            }

        case "PAY_LOAN":
            return {
                ...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - state.loan
            }
        default:
            return state;
    }
}