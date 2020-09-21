import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as groupAPI from '../lib/api/group';


const CHANGE_FIELD = 'group/CHANGE_FIELD';

const [GET_ALL_GROUP, GET_ALL_GROUP_SUCCESS, GET_ALL_GROUP_FAILURE] = createRequestActionTypes(
    'group/GET_ALL_GROUP'
);
const [GET_GROUP_BY_TITLE, GET_GROUP_BY_TITLE_SUCCESS, GET_GROUP_BY_TITLE_FAILURE] = createRequestActionTypes(
    'group/GET_GROUP_BY_TITLE'
);
const [GET_GROUP_BY_TAG, GET_GROUP_BY_TAG_SUCCESS, GET_GROUP_BY_TAG_FAILURE] = createRequestActionTypes(
    'group/GET_GROUP_BY_TAG'
);
const [GET_GROUP_BY_USER_ID, GET_GROUP_BY_USER_ID_SUCCESS, GET_GROUP_BY_USER_ID_FAILURE] = createRequestActionTypes(
    'group/GET_GROUP_BY_USER_ID'
);

export const changeField = createAction(CHANGE_FIELD, ({ value }) => ({ value }));
export const getAllGroup = createAction(GET_ALL_GROUP);
export const getGroupByTitle = createAction(GET_GROUP_BY_TITLE, ({title}) => ({title}));
export const getGroupByTag = createAction(GET_GROUP_BY_TAG, ({tag}) => ({tag}));
export const getGroupByUserId = createAction(GET_GROUP_BY_USER_ID, ({userId}) => ({userId}));

const getAllGroupSaga = createRequestSaga(GET_ALL_GROUP, groupAPI.getAllGroup);
const getGroupByTitleSaga = createRequestSaga(GET_GROUP_BY_TITLE, groupAPI.getGroupByTitle);
const getGroupByTagSaga = createRequestSaga(GET_GROUP_BY_TAG, groupAPI.getGroupByTag);
const getGroupByUserIdSaga = createRequestSaga(GET_GROUP_BY_USER_ID, groupAPI.getGroupByUserId);


export function* groupSaga(){
    yield takeLatest(GET_ALL_GROUP, getAllGroupSaga);
    yield takeLatest(GET_GROUP_BY_TITLE, getGroupByTitleSaga);
    yield takeLatest(GET_GROUP_BY_TAG, getGroupByTagSaga);
    yield takeLatest(GET_GROUP_BY_USER_ID, getGroupByUserIdSaga);
}

const  initialState = {
    search: null,
    group_list: null,
    error: null,
    my_group: null,

};

const group = handleActions(
{
    [CHANGE_FIELD]: (state, { payload: { value } }) => ({
        ...state,
        search : value,
    }),
    [GET_ALL_GROUP_SUCCESS]: (state, { payload: group_list }) => ({
        ...state,
        group_list: group_list,
    }),
    [GET_ALL_GROUP_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error.response.data,
    }),
    [GET_GROUP_BY_TITLE_SUCCESS]: (state, { payload: group_list }) => ({
        ...state,
        group_list: group_list,
    }),
    [GET_GROUP_BY_TITLE_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error.response.data,
    }),
    [GET_GROUP_BY_TAG_SUCCESS]: (state, { payload: group_list }) => ({
        ...state,
        group_list: group_list,
    }),
    [GET_GROUP_BY_TAG_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error.response.data,
    }),
    [GET_GROUP_BY_USER_ID_SUCCESS]: (state, { payload: my_group }) => ({
        ...state,
        my_group: my_group,
    }),
    [GET_GROUP_BY_USER_ID_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error.response.data,
    }),
},
initialState,
);

export default group;
