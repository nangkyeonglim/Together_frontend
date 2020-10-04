import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PlaceSearchTemplate from '../components/search/PlaceSearchTemplate';
import AddPlaceModalContainer from '../containers/modal/AddPlaceModalContainer';

const PlaceSearchPage = () => {
    return (
        <>
            <HeaderContainer />
            <PlaceSearchTemplate />
            <AddPlaceModalContainer />
        </>
    );
};

export default PlaceSearchPage;