import { createStore } from "redux";

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}


function reducer(state = initialState, action) {
    switch (action.type) {
        case "DEPOSIT":
            return { ...state, balance: state.balance + action.payload }

        case "WITHDRAW":
            return { ...state, balance: state.balance - action.payload }

        case "REQUEST_LOAN":
            if  (state.loan > 0) return state;

            return {...state, loan: action.payload.amount,
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

const store = createStore(reducer)

/*store.dispatch({
    type: 'DEPOSIT',
    payload: 500
})*/

function deposit(amount){
    return{
        type: 'DEPOSIT',
        payload: amount
    }
}
store.dispatch(deposit(800))

console.log('After Deposit: ', store.getState())

/* store.dispatch({
    type: 'WITHDRAW',
    payload: 200
}) */

function withdraw(amount){
    return{
        type: 'WITHDRAW',
        payload: 200
    }
}
console.log('After Withdraw ', store.getState())

/* store.dispatch({
    type: 'REQUEST_LOAN',
    payload: {amount: 1000, purpose:'Buy a cheap car'}
}) */
function requestLoan(amount){
    return{
        type: 'REQUEST_LOAN',
        payload: 1000
    }
}


console.log('After Loan ', store.getState())

/* store.dispatch({
    type: 'PAY_LOAN'
})*/

function payLoan(){
    return{
    type: 'PAY_LOAN',
    payload: 0
    }
}

console.log('Loan Paid', store.getState())



// Store = app data
// Reducer: used to update the store
// action: that will be dispatched to the reducer along with state
// action creators: responsible to create the action
// payload: data being sent to reducer