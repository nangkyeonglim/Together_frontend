import React, { useEffect }   from 'react';
import PlaceSearch from '../../components/search/PlaceSearch';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {  getPlaceByName } from '../../modules/search';
import { openModal } from '../../modules/modal';
import { changeAddPlaceField } from '../../modules/place';

const PlaceSearchContainer = ({ location }) => {
    const dispatch = useDispatch();
    const { search_place_list } = useSelector(({ search }) => ({
        search_place_list: search.search_place_list,
    }));
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });
    useEffect(()=> {
        const query = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        if(query.category){
            // dispatch(getGroupByTag(query.tag));
        }
        else if(query.placeName){
            dispatch(getPlaceByName(query.placeName));
        }
    },[dispatch, location.search]);

    const handleHeart = (e) => {
        dispatch(changeAddPlaceField({key: 'placeId', value: parseInt(e.target.parentNode.id)}));
        dispatch(openModal('add_place_modal'));
    }

    return (
        <PlaceSearch 
            search_place_list={search_place_list}
            query={query}
            handleHeart={handleHeart}
        />
    );
};

export default withRouter(PlaceSearchContainer);