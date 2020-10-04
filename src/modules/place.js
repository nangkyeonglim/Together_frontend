import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as externalAPI from '../lib/api/external';
import * as placeAPI from '../lib/api/place';
import produce from 'immer';

const INITIALIZE_PLACE_RESPONSE = 'place/INITIALIZE_PLACE_RESPONSE';
const CHANGE_ADD_PLACE_FIELD = 'place/CHANGE_ADD_PLACE_FIELD';

const [FIND_PLACE_IMAGE_FROM_EXTERNAL, FIND_PLACE_IMAGE_FROM_EXTERNAL_SUCCESS, FIND_PLACE_IMAGE_FROM_EXTERNAL_FAILURE] = createRequestActionTypes(
    'place/FIND_PLACE_IMAGE_FROM_EXTERNAL'
);
const [GET_ALL_PLACE, GET_ALL_PLACE_SUCCESS, GET_ALL_PLACE_FAILURE] = createRequestActionTypes(
    'place/GET_ALL_PLACE'
);
const [ADD_PLACE_TO_GROUP, ADD_PLACE_TO_GROUP_SUCCESS, ADD_PLACE_TO_GROUP_FAILURE] = createRequestActionTypes(
    'place/ADD_PLACE_TO_GROUP'
);
const [DELETE_PLACE_FROM_GROUP, DELETE_PLACE_FROM_GROUP_SUCCESS, DELETE_PLACE_FROM_GROUP_FAILURE] = createRequestActionTypes(
    'place/DELETE_PLACE_FROM_GROUP'
);

export const initializePlaceResponse = createAction(INITIALIZE_PLACE_RESPONSE);
export const changeAddPlaceField = createAction(CHANGE_ADD_PLACE_FIELD, ({ key, value }) => ({ key, value }));
export const findPlaceImageFromExternal = createAction(FIND_PLACE_IMAGE_FROM_EXTERNAL, data => data);
export const getAllPlace = createAction(GET_ALL_PLACE);
export const addPlaceToGroup = createAction(ADD_PLACE_TO_GROUP, add_place => add_place);
export const deletePlaceFromGroup = createAction(DELETE_PLACE_FROM_GROUP, roomPlaceId => roomPlaceId);

const findPlaceImageFromExternalSaga = createRequestSaga(FIND_PLACE_IMAGE_FROM_EXTERNAL, externalAPI.findPlaceImageFromExternal);
const getAllPlaceSaga = createRequestSaga(GET_ALL_PLACE, placeAPI.getAllPlace);
const addPlaceToGroupSaga = createRequestSaga(ADD_PLACE_TO_GROUP, placeAPI.addPlaceToGroup);
const deletePlaceFromGroupSaga = createRequestSaga(DELETE_PLACE_FROM_GROUP, placeAPI.deletePlaceFromGroup);


export function* placeSaga(){
    yield takeLatest(FIND_PLACE_IMAGE_FROM_EXTERNAL, findPlaceImageFromExternalSaga);
    yield takeLatest(GET_ALL_PLACE, getAllPlaceSaga);
    yield takeLatest(ADD_PLACE_TO_GROUP, addPlaceToGroupSaga);
    yield takeLatest(DELETE_PLACE_FROM_GROUP, deletePlaceFromGroupSaga);

}

const  initialState = {
    place: null,
    error: null,
    response: {
        add_place: null,
        delete_place: null,
    },
    place_by_group: null,
    add_place: {
        roomId: "",
        placeId: "",
        comment: "",
    },
};

const place = handleActions(
{
    [INITIALIZE_PLACE_RESPONSE]: (state) => ({
        ...state,
        response: initialState.response,
    }),
    [CHANGE_ADD_PLACE_FIELD]: (state, { payload: { key, value } }) => 
        produce(state, draft => {
            draft.add_place[key] = value;
    }),
    [FIND_PLACE_IMAGE_FROM_EXTERNAL_SUCCESS]: (state, { payload: place }) => ({
        ...state,
        place: place,
    }),
    [FIND_PLACE_IMAGE_FROM_EXTERNAL_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error,
    }),
    [GET_ALL_PLACE_SUCCESS]: (state, { payload: place_by_group }) => ({
        ...state,
        place_by_group: place_by_group,
    }),
    [GET_ALL_PLACE_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error,
    }),
    [ADD_PLACE_TO_GROUP_SUCCESS]: (state, { payload: response }) => ({
        ...state,
        response: {
            ...state.response,
            add_place: response,
        },
    }),
    [ADD_PLACE_TO_GROUP_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error,
    }),
    [DELETE_PLACE_FROM_GROUP_SUCCESS]: (state, { payload: response }) => ({
        ...state,
        response: {
            ...state.response,
            delete_place: response,
        },
    }),
    [DELETE_PLACE_FROM_GROUP_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error,
    }),
},
initialState,
);

export default place;
