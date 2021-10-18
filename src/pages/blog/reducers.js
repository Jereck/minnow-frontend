import {
  GET_BLOGS,
  GET_BLOG,
  GET_BLOGS_SUCCESS,
  GET_BLOG_SUCCESS,
  GET_BLOGS_ERROR,
  GET_BLOG_ERROR
} from './constants'

const initialState = {
  loading: false,
  posts: [],
  post: {},
  error: null
}

export default function blogs(state = initialState, action) {
  switch(action.type) {
    case GET_BLOGS:
    case GET_BLOG:
      return {
        ...state,
        loading: true,
      }
    case GET_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts ? action.posts : []
      }
    case GET_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.post
      }
    case GET_BLOGS_ERROR:
    case GET_BLOG_ERROR:
      return {
        ...state,
        error: action.message
      }
    default:
      return state
  }
}