import { POST_ACTIVITY, POST_REFERRAL, POST_PROJECT } from './actionTypes'
import ReduxHelpers from '../utils/ReduxHelpers'

export const postActivity = () => ReduxHelpers.createAction(POST_ACTIVITY, 'post', '/api/activity')
export const postReferral = (data) => ReduxHelpers.createAction(POST_REFERRAL, 'post', '/api/referral', data)
export const postProject = (data) => ReduxHelpers.createAction(POST_PROJECT, 'post', '/api/project', data)