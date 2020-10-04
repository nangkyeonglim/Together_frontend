import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as groupAPI from '../lib/api/group';
import produce from 'immer';

const CHANGE_ADD_GROUP_FIELD = 'group/CHANGE_ADD_GROUP_FIELD';
const INITIALIZE_ADD_GROUP_FIELD = 'group/INITIALIZE_ADD_GROUP_FIELD';
const SET_EDIT_GROUP_FIELD = 'group/SET_EDIT_GROUP_FIELD';
const INITIALIZE = 'group/INITIALIZE';
const INITIALIZE_CURRENT_GROUP = 'group/INITIALIZE_CURRENT_GROUP';

const [GET_ALL_GROUP, GET_ALL_GROUP_SUCCESS, GET_ALL_GROUP_FAILURE] = createRequestActionTypes(
    'group/GET_ALL_GROUP'
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
const [DELETE_GROUP, DELETE_GROUP_SUCCESS, DELETE_GROUP_FAILURE] = createRequestActionTypes(
    'group/DELETE_GROUP'
);
const [GET_ALL_GROUP_USER, GET_ALL_GROUP_USER_SUCCESS, GET_ALL_GROUP_USER_FAILURE] = createRequestActionTypes(
    'group/GET_ALL_GROUP_USER'
);

export const initialize = createAction(INITIALIZE);
export const initializeCurrentGroup = createAction(INITIALIZE_CURRENT_GROUP);
export const changeAddGroupField = createAction(CHANGE_ADD_GROUP_FIELD, ({ key, value }) => ({ key, value }));
export const initializeAddGroupField = createAction(INITIALIZE_ADD_GROUP_FIELD);
export const setEditGroupField = createAction(SET_EDIT_GROUP_FIELD, group => group);

export const getAllGroup = createAction(GET_ALL_GROUP);
export const getGroupByUserId = createAction(GET_GROUP_BY_USER_ID, userId => userId);
export const getGroupByGroupId = createAction(GET_GROUP_BY_GROUP_ID, groupId => groupId);
export const addGroup = createAction(ADD_GROUP, group => group);
export const editGroup = createAction(EDIT_GROUP, info => info);
export const deleteGroup = createAction(DELETE_GROUP, groupId => groupId);
export const getAllGroupUser = createAction(GET_ALL_GROUP_USER, groupId => groupId);

const getAllGroupSaga = createRequestSaga(GET_ALL_GROUP, groupAPI.getAllGroup);
const getGroupByUserIdSaga = createRequestSaga(GET_GROUP_BY_USER_ID, groupAPI.getGroupByUserId);
const getGroupByGroupIdSaga = createRequestSaga(GET_GROUP_BY_GROUP_ID, groupAPI.getGroupByGroupId);
const addGroupSaga = createRequestSaga(ADD_GROUP, groupAPI.addGroup);
const editGroupSaga = createRequestSaga(EDIT_GROUP, groupAPI.editGroup);
const deleteGroupSaga = createRequestSaga(DELETE_GROUP, groupAPI.deleteGroup);
const getAllGroupUserSaga = createRequestSaga(GET_ALL_GROUP_USER, groupAPI.getAllGroupUser);

export function* groupSaga(){
    yield takeLatest(GET_ALL_GROUP, getAllGroupSaga);
    yield takeLatest(GET_GROUP_BY_USER_ID, getGroupByUserIdSaga);
    yield takeLatest(GET_GROUP_BY_GROUP_ID, getGroupByGroupIdSaga);
    yield takeLatest(ADD_GROUP, addGroupSaga);
    yield takeLatest(EDIT_GROUP, editGroupSaga);
    yield takeLatest(DELETE_GROUP, deleteGroupSaga);
    yield takeLatest(GET_ALL_GROUP_USER, getAllGroupUserSaga);
}

const  initialState = {
    group_list: null,
    error: null,
    my_group: null,
    response: {
        add_group: null,
        delete_group: null,
        edit_group: null,
    },
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
    [INITIALIZE]: (state) => ({
        ...state,
        response: initialState.response,
    }),
    [INITIALIZE_CURRENT_GROUP]: (state) => ({
        ...state,
        current_group: null,
        current_group_member: null,
    }),
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
        error: error,
    }),
    [GET_GROUP_BY_USER_ID_SUCCESS]: (state, { payload: my_group }) => ({
        ...state,
        my_group: my_group,
    }),
    [GET_GROUP_BY_USER_ID_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error,
    }),
    [GET_GROUP_BY_GROUP_ID_SUCCESS]: (state, { payload: current_group }) => ({
        ...state,
        current_group: current_group,
    }),
    [GET_GROUP_BY_GROUP_ID_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error,
    }),
    [ADD_GROUP_SUCCESS]: (state, { payload: response }) => ({
        ...state,
        response: {
            ...state.response,
            add_group: response,
        },
    }),
    [ADD_GROUP_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error.response.data,
    }),
    [EDIT_GROUP_SUCCESS]: (state, { payload: response }) => ({
        ...state,
        response: {
            ...state.response,
            edit_group: response,
        },
    }),
    [EDIT_GROUP_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error,
    }),
    [DELETE_GROUP_SUCCESS]: (state, { payload: response }) => ({
        ...state,
        response: {
            ...state.response,
            delete_group: response,
        },
    }),
    [DELETE_GROUP_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error,
    }),
    [GET_ALL_GROUP_USER_SUCCESS]: (state, { payload: users }) => ({
        ...state,
        current_group_member: users,
    }),
    [GET_ALL_GROUP_USER_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error,
    }),
},
initialState,
);

export default group;
