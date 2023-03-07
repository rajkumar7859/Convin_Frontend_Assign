import axios from 'axios';
import {
  GET_BUCKETS,
  ADD_BUCKET,
  EDIT_BUCKET,
  DELETE_BUCKET,
  BUCKET_LOADING,
  GET_ERRORS,
} from './types';

// Get buckets
export const getBuckets = () => (dispatch) => {
  dispatch(setBucketLoading());
  axios
    .get('http://localhost:3001/buckets')
    .then((res) =>
      dispatch({
        type: GET_BUCKETS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_BUCKETS,
        payload: null,
      })
    );
};

// Add bucket
export const addBucket = (bucketData, history) => (dispatch) => {
  axios
    .post('http://localhost:3001/buckets', bucketData)
    .then((res) => {
      dispatch({
        type: ADD_BUCKET,
        payload: res.data,
      });
      history.push('/buckets');
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Edit bucket
export const editBucket = (id, bucketData) => (dispatch) => {
  axios
    .put(`http://localhost:3001/buckets/${id}`, bucketData)
    .then((res) =>
      dispatch({
        type: EDIT_BUCKET,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Delete bucket
export const deleteBucket = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:3001/buckets/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_BUCKET,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Set loading state
export const setBucketLoading = () => {
  return {
    type: BUCKET_LOADING,
  };
};
