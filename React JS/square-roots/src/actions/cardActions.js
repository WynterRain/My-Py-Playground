import axios from "axios"
export const deleteCard = (id) => {
    return{
        type: 'DELETE_CARD',
        id
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        // makes a request to the website grabing data and returning it
            .then(({ data }) => {
                dispatch({type: 'FETCH_USERS', payload: data })
            })
    }
}