import { combineReducers } from 'redux'
import { POST_ACTIVITY, POST_REFERRAL, POST_PROJECT } from '../actions/actionTypes'
import ReduxHelpers from '../utils/ReduxHelpers'

const postActivityReducer = ReduxHelpers.createReducer(POST_ACTIVITY)
const postReferralReducer = ReduxHelpers.createReducer(POST_REFERRAL)
const postProjectReducer = ReduxHelpers.createReducer(POST_PROJECT)

export default combineReducers({
  postActivityReducer,
  postReferralReducer,
  postProjectReducer
})