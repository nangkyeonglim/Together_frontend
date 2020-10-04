import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as searchAPI from '../lib/api/search';
import * as groupAPI from '../lib/api/group';

const INITIALIZE = 'search/INITIALIZE';
const CHANGE_FIELD = 'search/CHANGE_FIELD';
const INITIALIZE_LIST = 'search/INITIALIZE_LIST';
const [GET_GROUP_BY_TITLE, GET_GROUP_BY_TITLE_SUCCESS, GET_GROUP_BY_TITLE_FAILURE] = createRequestActionTypes(
    'search/GET_GROUP_BY_TITLE'
);
const [GET_GROUP_BY_TAG, GET_GROUP_BY_TAG_SUCCESS, GET_GROUP_BY_TAG_FAILURE] = createRequestActionTypes(
    'search/GET_GROUP_BY_TAG'
);
const [GET_ALL_GROUP, GET_ALL_GROUP_SUCCESS, GET_ALL_GROUP_FAILURE] = createRequestActionTypes(
    'search/GET_ALL_GROUP'
);
const [FOLLOW_GROUP, FOLLOW_GROUP_SUCCESS, FOLLOW_GROUP_FAILURE] = createRequestActionTypes(
    'search/FOLLOW_GROUP'
);
const [UN_FOLLOW_GROUP, UN_FOLLOW_GROUP_SUCCESS, UN_FOLLOW_GROUP_FAILURE] = createRequestActionTypes(
    'search/UN_FOLLOW_GROUP'
);
const [GET_PLACE_BY_NAME, GET_PLACE_BY_NAME_SUCCESS, GET_PLACE_BY_NAME_FAILURE] = createRequestActionTypes(
    'search/GET_PLACE_BY_NAME'
);

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ value }) => ({ value }));
export const initializeList = createAction(INITIALIZE_LIST);
export const getGroupByTitle = createAction(GET_GROUP_BY_TITLE, title => title);
export const getGroupByTag = createAction(GET_GROUP_BY_TAG, tag => tag);
export const getAllGroup = createAction(GET_ALL_GROUP);
export const followGroup = createAction(FOLLOW_GROUP, info => info);
export const unFollowGroup = createAction(UN_FOLLOW_GROUP, groupId => groupId);
export const getPlaceByName = createAction(GET_PLACE_BY_NAME, placeName => placeName);

const getGroupByTitleSaga = createRequestSaga(GET_GROUP_BY_TITLE, searchAPI.getGroupByTitle);
const getGroupByTagSaga = createRequestSaga(GET_GROUP_BY_TAG, searchAPI.getGroupByTag);
const getAllGroupSaga = createRequestSaga(GET_ALL_GROUP, groupAPI.getAllGroup);
const followGroupSaga = createRequestSaga(FOLLOW_GROUP, searchAPI.followGroup);
const unFollowGroupSaga = createRequestSaga(UN_FOLLOW_GROUP, searchAPI.unFollowGroup);
const getPlaceByNameSaga = createRequestSaga(GET_PLACE_BY_NAME, searchAPI.getPlaceByName);


export function* searchSaga(){
    yield takeLatest(GET_GROUP_BY_TITLE, getGroupByTitleSaga);
    yield takeLatest(GET_GROUP_BY_TAG, getGroupByTagSaga);
    yield takeLatest(GET_ALL_GROUP, getAllGroupSaga);
    yield takeLatest(FOLLOW_GROUP, followGroupSaga);
    yield takeLatest(UN_FOLLOW_GROUP, unFollowGroupSaga);
    yield takeLatest(GET_PLACE_BY_NAME, getPlaceByNameSaga);
}

const  initialState = {
    search: null,
    search_group_list: null,
    search_place_list: null,
    search_error: null,
    error: null,
    response: null,
};

const search = handleActions(
{
    [INITIALIZE]: (state) => ({
        ...state,
        response: initialState.response,
    }),
    [INITIALIZE_LIST]: (state) => ({
        ...state,
        search_group_list : null,
        error: null,
    }),
    [CHANGE_FIELD]: (state, { payload: { value } }) => ({
        ...state,
        search : value,
    }),
    [GET_GROUP_BY_TITLE_SUCCESS]: (state, { payload: search_group_list }) => ({
        ...state,
        search_group_list: search_group_list,
    }),
    [GET_GROUP_BY_TITLE_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error,
    }),
    [GET_GROUP_BY_TAG_SUCCESS]: (state, { payload: search_group_list }) => ({
        ...state,
        search_group_list: search_group_list,
    }),
    [GET_GROUP_BY_TAG_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error,
    }),
    [GET_ALL_GROUP_SUCCESS]: (state, { payload: search_group_list }) => ({
        ...state,
        search_group_list: search_group_list,
    }),
    [GET_ALL_GROUP_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error,
    }),
    [FOLLOW_GROUP_SUCCESS]: (state, { payload: response }) => ({
        ...state,
        response: response,
    }),
    [FOLLOW_GROUP_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error,
    }),
    [UN_FOLLOW_GROUP_SUCCESS]: (state, { payload: response }) => ({
        ...state,
        response: response,
    }),
    [UN_FOLLOW_GROUP_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error,
    }),
    [GET_PLACE_BY_NAME_SUCCESS]: (state, { payload: search_place_list }) => ({
        ...state,
        search_place_list: search_place_list,
    }),
    [GET_PLACE_BY_NAME_FAILURE]: (state, { payload: error }) => ({
        ...state,
        search_error: error,
    }),
},
initialState,
);

export default search;
