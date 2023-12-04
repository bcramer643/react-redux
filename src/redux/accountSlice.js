import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    balance: 1000,
    loan: 0,
    loanPurpose: ""
}

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        deposit(state, action) {
            state.balance += parseInt(action.payload)
        },
        withdraw(state, action) {
            state.balance -= action.payload
        },
        requestLoan: {
            prepare(amount, purpose) {
                return {
                    payload: { amount, purpose },
                }
            },
            reducer(state, action) {
                if (state.loan > 0) return state;

                //console.log(action)
                state.loan = action.payload.amount;
                state.loanPurpose = action.payload.purpose;
                state.balance = state.balance + parseInt(action.payload.amount)
            }

        }

    }
})

console.log(accountSlice)

export const { deposit, withdraw, requestLoan } = accountSlice.actions

export default accountSlice.reducer
