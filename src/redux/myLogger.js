export const myLogger = store => next => action => {
    console.log('Middleware ran=>')
    return next(action)

}