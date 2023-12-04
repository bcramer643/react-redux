export function createCustomer(fullName, stateID){
    return{
        type: 'CREATE_CUSTOMER',
        payload: {fullName, stateID, createdAt: new Date()}
    }
}

export function updateName(fullName){
    return{
        type: 'UPDATE_NAME',
        payload: fullName
    }
}