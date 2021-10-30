import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { clientKeyStone } from '../../graphql'
import { GET_BLOGS, GET_BLOG, GET_BLOGS_SUCCESS, GET_BLOG_SUCCESS, GET_BLOGS_ERROR, GET_BLOG_ERROR } from './constants'
import { getBlogsQuery, getBlogQuery } from '../../mutations_queries/blog'

const fetchAllBlogsQuery = () => {
  return clientKeyStone.query({
    query: getBlogsQuery
  })
}

const fetchBlogByIdQuery = (id) => {
  return clientKeyStone.query({
    query: getBlogQuery,
    variables: {
      id: id
    }
  })
}

function* fetchBlogs(action) {
  try {
    const { data } = yield call(fetchAllBlogsQuery);
    console.log("Saga Fetched Blogs: ", data)
    yield put({ type: GET_BLOGS_SUCCESS, posts: data.posts })
  } catch (error) {
    yield put({ type: GET_BLOGS_ERROR, message: error })
  }
}

function* fetchBlog(action) {
  const id = action.payload
  try {
    const { data } = yield call(fetchBlogByIdQuery, id)
    console.log("Saga Fetched Blog: ", data)
    yield put({ type: GET_BLOG_SUCCESS, post: data.post })
  } catch (error) {
    yield put({ type: GET_BLOG_ERROR, message: error})
  }
}

function* fetchBlogsSaga() {
  yield takeEvery(GET_BLOGS, fetchBlogs)
}

function* fetchBlogSaga() {
  yield takeEvery(GET_BLOG, fetchBlog)
}

export default [
  fetchBlogsSaga,
  fetchBlogSaga
]