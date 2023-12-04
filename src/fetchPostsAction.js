import axios from "axios"
export const fetchPostsAction = () => {
    return async (dispatch) => {
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(posts.data)
        dispatch({
            type: 'FETCH_POSTS',
            payload: posts.data
        })
    }

}