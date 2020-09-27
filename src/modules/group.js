import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as groupAPI from '../lib/api/group';
import produce from 'immer';

const CHANGE_FIELD = 'group/CHANGE_FIELD';
const CHANGE_ADD_GROUP_FIELD = 'group/CHANGE_ADD_GROUP_FIELD';
const INITIALIZE_ADD_GROUP_FIELD = 'group/INITIALIZE_ADD_GROUP_FIELD';
const SET_EDIT_GROUP_FIELD = 'group/SET_EDIT_GROUP_FIELD'

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
const [GET_GROUP_BY_GROUP_ID, GET_GROUP_BY_GROUP_ID_SUCCESS, GET_GROUP_BY_GROUP_ID_FAILURE] = createRequestActionTypes(
    'group/GET_GROUP_BY_GROUP_ID'
);
const [ADD_GROUP, ADD_GROUP_SUCCESS, ADD_GROUP_FAILURE] = createRequestActionTypes(
    'group/ADD_GROUP'
);
const [EDIT_GROUP, EDIT_GROUP_SUCCESS, EDIT_GROUP_FAILURE] = createRequestActionTypes(
    'group/EDIT_GROUP'
);
const [GET_ALL_GROUP_USER, GET_ALL_GROUP_USER_SUCCESS, GET_ALL_GROUP_USER_FAILURE] = createRequestActionTypes(
    'group/GET_ALL_GROUP_USER'
);

export const changeField = createAction(CHANGE_FIELD, ({ value }) => ({ value }));
export const changeAddGroupField = createAction(CHANGE_ADD_GROUP_FIELD, ({ key, value }) => ({ key, value }));
export const initializeAddGroupField = createAction(INITIALIZE_ADD_GROUP_FIELD);
export const setEditGroupField = createAction(SET_EDIT_GROUP_FIELD, group => group);

export const getAllGroup = createAction(GET_ALL_GROUP);
export const getGroupByTitle = createAction(GET_GROUP_BY_TITLE, title => title);
export const getGroupByTag = createAction(GET_GROUP_BY_TAG, tag => tag);
export const getGroupByUserId = createAction(GET_GROUP_BY_USER_ID, userId => userId);
export const getGroupByGroupId = createAction(GET_GROUP_BY_GROUP_ID, groupId => groupId);
export const addGroup = createAction(ADD_GROUP, group => group);
export const editGroup = createAction(EDIT_GROUP, info => info);
export const getAllGroupUser = createAction(GET_ALL_GROUP_USER, groupId => groupId);

const getAllGroupSaga = createRequestSaga(GET_ALL_GROUP, groupAPI.getAllGroup);
const getGroupByTitleSaga = createRequestSaga(GET_GROUP_BY_TITLE, groupAPI.getGroupByTitle);
const getGroupByTagSaga = createRequestSaga(GET_GROUP_BY_TAG, groupAPI.getGroupByTag);
const getGroupByUserIdSaga = createRequestSaga(GET_GROUP_BY_USER_ID, groupAPI.getGroupByUserId);
const getGroupByGroupIdSaga = createRequestSaga(GET_GROUP_BY_GROUP_ID, groupAPI.getGroupByGroupId);
const addGroupSaga = createRequestSaga(ADD_GROUP, groupAPI.addGroup);
const editGroupSaga = createRequestSaga(EDIT_GROUP, groupAPI.editGroup);
const getAllGroupUserSaga = createRequestSaga(GET_ALL_GROUP_USER, groupAPI.getAllGroupUser);

export function* groupSaga(){
    yield takeLatest(GET_ALL_GROUP, getAllGroupSaga);
    yield takeLatest(GET_GROUP_BY_TITLE, getGroupByTitleSaga);
    yield takeLatest(GET_GROUP_BY_TAG, getGroupByTagSaga);
    yield takeLatest(GET_GROUP_BY_USER_ID, getGroupByUserIdSaga);
    yield takeLatest(GET_GROUP_BY_GROUP_ID, getGroupByGroupIdSaga);
    yield takeLatest(ADD_GROUP, addGroupSaga);
    yield takeLatest(EDIT_GROUP, editGroupSaga);
    yield takeLatest(GET_ALL_GROUP_USER, getAllGroupUserSaga);
}

const  initialState = {
    search: null,
    group_list: null,
    error: null,
    my_group: null,
    response: null,
    current_group: null,
    current_group_member: null,
    add_group: {
        title: "",
        content: "",
        imageUrl: "",
        credential: "",
        file: "",
        tags: [],
    }
};

const group = handleActions(
{
    [INITIALIZE_ADD_GROUP_FIELD]: (state) => ({
        ...state,
        add_group: {
            title: "",
            content: "",
            imageUrl: "",
            credential: "",
            file: "",
            tags: [],
        },
        error: null,
    }),
    [CHANGE_FIELD]: (state, { payload: { value } }) => ({
        ...state,
        search : value,
    }),
    [CHANGE_ADD_GROUP_FIELD]: (state, { payload: { key, value } }) => 
        produce(state, draft => {
            draft.add_group[key] = value;
    }),
    [SET_EDIT_GROUP_FIELD]: (state, { payload: group }) => ({
        ...state,
        add_group : {
            title: group.title,
            content: group.content,
            imageUrl: group.imageUrl,
            credential: "",
            file: "",
            tags: group.tags,
        },
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
    [GET_GROUP_BY_GROUP_ID_SUCCESS]: (state, { payload: current_group }) => ({
        ...state,
        current_group: current_group,
    }),
    [GET_GROUP_BY_GROUP_ID_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error.response.data,
    }),
    [ADD_GROUP_SUCCESS]: (state, { payload: response }) => ({
        ...state,
        response,
    }),
    [ADD_GROUP_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error.response.data,
    }),
    [EDIT_GROUP_SUCCESS]: (state, { payload: response }) => ({
        ...state,
        response,
    }),
    [EDIT_GROUP_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error.response.data,
    }),
    [GET_ALL_GROUP_USER_SUCCESS]: (state, { payload: users }) => ({
        ...state,
        current_group_member: users,
    }),
    [GET_ALL_GROUP_USER_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error.response.data,
    }),
},
initialState,
);

export default group;
