export function deposit(amount) {
    console.log("Action called =>")
    return {
        type: 'DEPOSIT',
        payload: amount
    }
}

export function withdraw(amount) {
    return {
        type: 'WITHDRAW',
        payload: amount
    }
} 