import { ADD_BUCKET, DELETE_BUCKET, EDIT_BUCKET, FETCH_BUCKETS, MOVE_CARD } from "../actions/types";

const initialState = {
  buckets: [],
  loading: true
};

export default function bucketsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BUCKETS:
      return {
        ...state,
        buckets: action.payload,
        loading: false
      };
    case ADD_BUCKET:
      return {
        ...state,
        buckets: [...state.buckets, action.payload]
      };
    case EDIT_BUCKET:
      const updatedBucket = action.payload;
      return {
        ...state,
        buckets: state.buckets.map(bucket => (bucket.id === updatedBucket.id ? updatedBucket : bucket))
      };
    case DELETE_BUCKET:
      const deletedBucketId = action.payload;
      return {
        ...state,
        buckets: state.buckets.filter(bucket => bucket.id !== deletedBucketId)
      };
    case MOVE_CARD:
      const { cardId, sourceBucketId, targetBucketId } = action.payload;
      const sourceBucket = state.buckets.find(bucket => bucket.id === sourceBucketId);
      const targetBucket = state.buckets.find(bucket => bucket.id === targetBucketId);
      const card = sourceBucket.cards.find(card => card.id === cardId);
      const updatedSourceBucket = {
        ...sourceBucket,
        cards: sourceBucket.cards.filter(card => card.id !== cardId)
      };
      const updatedTargetBucket = {
        ...targetBucket,
        cards: [...targetBucket.cards, card]
      };
      return {
        ...state,
        buckets: state.buckets.map(bucket => {
          if (bucket.id === sourceBucketId) {
            return updatedSourceBucket;
          } else if (bucket.id === targetBucketId) {
            return updatedTargetBucket;
          }
          return bucket;
        })
      };
    default:
      return state;
  }
}
