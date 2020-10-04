import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import place, { placeSaga } from './place';
import group, { groupSaga } from './group';
import search, { searchSaga } from './search';

import modal from './modal';

import loading from './loading';

const rootReducer = combineReducers({
    loading,
    auth,
    group,
    place,
    modal,
    search,
});

export function* rootSaga() {
    yield all([authSaga(), placeSaga(), groupSaga(), searchSaga()]);
}
export default rootReducer;
