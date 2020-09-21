import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';

const GET_USER_INFO = 'auth/GET_USER_INFO';
const CHANGE_FIELD = 'auth/CHANGE_FIELD';

const [SOCIAL_LOGIN, SOCIAL_LOGIN_SUCCESS, SOCIAL_LOGIN_FAILURE] = createRequestActionTypes(
    'auth/SOCIAL_LOGIN'
);
const [SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE] = createRequestActionTypes(
    'auth/SIGN_UP'
);
const [GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE] = createRequestActionTypes(
    'auth/GET_USER'
);
const [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE] = createRequestActionTypes(
    'auth/LOGOUT'
);
const [EDIT_PROFILE, EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAILURE] = createRequestActionTypes(
    'auth/EDIT_PROFILE'
);
const [EDIT_PROFILE_IMAGE, EDIT_PROFILE_IMAGE_SUCCESS, EDIT_PROFILE_IMAGE_FAILURE] = createRequestActionTypes(
    'auth/EDIT_PROFILE_IMAGE'
);

export const changeField = createAction(CHANGE_FIELD, ({ name, value }) => ({ name, value }));
export const getUserInfo = createAction(GET_USER_INFO, ({ name, accessToken, profileImage }) => ({ name, accessToken, profileImage }));

export const socialLogin = createAction(SOCIAL_LOGIN, authToken => authToken);
export const signUp = createAction(SIGN_UP, user => user);
export const getUser = createAction(GET_USER);
export const logout = createAction(LOGOUT);
export const editProfile = createAction(EDIT_PROFILE, userInfo => userInfo);
export const editProfileImage = createAction(EDIT_PROFILE_IMAGE, formData => formData);

const socialLoginSaga = createRequestSaga(SOCIAL_LOGIN, authAPI.socialLogin);
const signUpSaga = createRequestSaga(SIGN_UP, authAPI.signUp);
const getUserSaga = createRequestSaga(GET_USER, authAPI.getUser);
const logoutSaga = createRequestSaga(LOGOUT, authAPI.logout);
const editProfileSaga = createRequestSaga(EDIT_PROFILE, authAPI.editProfile);
const editProfileImageSaga = createRequestSaga(EDIT_PROFILE_IMAGE, authAPI.editProfileImage);

export function* authSaga(){
    yield takeLatest(SOCIAL_LOGIN, socialLoginSaga);
    yield takeLatest(SIGN_UP, signUpSaga);
    yield takeLatest(GET_USER, getUserSaga);
    yield takeLatest(LOGOUT, logoutSaga);
    yield takeLatest(EDIT_PROFILE, editProfileSaga);
    yield takeLatest(EDIT_PROFILE_IMAGE, editProfileImageSaga);

}

const  initialState = {
    login: null,
    sign_up: null,
    login_error: null,
    sign_up_error: null,
    user: null,
    user_info: null,
    user_info_error: null,
    edit_profile: null,
};

const auth = handleActions(
{
    [GET_USER_INFO]: (state, { payload: {  name, accessToken, profileImage } }) => ({
        ...state,
        user: {
            name: name,
            accessToken: accessToken,
            profileImage: profileImage,
        }
    }),
    [CHANGE_FIELD]: (state, { payload: {  name, value } }) => 
        produce(state, draft => {
          draft.user_info[name] = value;
    }),
    [SOCIAL_LOGIN_SUCCESS]: (state, { payload: login }) => ({
        ...state,
        login: {
            jwt: login.data,
        },
    }),
    [SOCIAL_LOGIN_FAILURE]: (state, { payload: login_error }) => ({
        ...state,
        login_error: login_error.response.data,
    }),
    [SIGN_UP_SUCCESS]: (state, { payload: sign_up }) => ({
        ...state,
        sign_up,
    }),
    [SIGN_UP_FAILURE]: (state, { payload: sign_up_error }) => ({
        ...state,
        sign_up_error: sign_up_error.response.data,
    }),
    [GET_USER_SUCCESS]: (state, { payload: user_info }) => ({
        ...state,
        user_info,
        user_info_error: null,
    }),
    [GET_USER_FAILURE]: (state, { payload: user_info_error }) => ({
        ...state,
        user_info_error
    }),
    [LOGOUT_SUCCESS]: () => 
        initialState,
    [LOGOUT_FAILURE]: (state) => ({
        ...state,
    }),
    [EDIT_PROFILE_SUCCESS]: (state, { payload: edit_profile }) => ({
        ...state,
        edit_profile,
    }),
    [EDIT_PROFILE_FAILURE]: (state, { payload: edit_profile }) => ({
        ...state,
        edit_profile
    }),
    [EDIT_PROFILE_IMAGE_SUCCESS]: (state, { payload: edit_profile }) => ({
        ...state,
        edit_profile,
    }),
    [EDIT_PROFILE_IMAGE_FAILURE]: (state, { payload: edit_profile }) => ({
        ...state,
        edit_profile
    }),
},
initialState,
);

export default auth;
