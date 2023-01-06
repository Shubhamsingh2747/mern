import { } from "../constants/actionTypes";

export default(state=[], action) => {

    switch (action.type) {

        case 'FETCH_ALL':
            return {
                ...state,
                posts: action.payload.data,
                currrentPage: action.payload.currrentPage,
                numberOfPages: action.payload.numberOfPages,
            };

        case 'FETCH_BY_SEARCH':
            return {...state, posts: action.payload };

        case 'CREATE':
            return { ...state, posts: [...state.posts, action.payload] };

        case 'UPDATE':
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };

        case 'DELETE':
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };

        case 'LIKE':
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };

        default:
            return state;
    }
}
