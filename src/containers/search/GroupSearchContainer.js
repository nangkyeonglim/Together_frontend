import React, { useEffect }  from 'react';
import GroupSearch from '../../components/search/GroupSearch';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'qs';
import {  getGroupByTag, getGroupByTitle, followGroup, unFollowGroup, getAllGroup } from '../../modules/search';
import { initialize } from '../../modules/search';

const GroupSearchContainer = ({ location }) => {
    const dispatch = useDispatch();
    const { search_group_list, response } = useSelector(({ search }) => ({
        search_group_list: search.search_group_list,
        response: search.response,
    }));
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });

    //모든 그룹 불러오기(lazy loading 적용)
    useEffect(()=> {
        const query = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        if(query.tag){
            dispatch(getGroupByTag(query.tag));
        }
        else if(query.title){
            dispatch(getGroupByTitle(query.title));
        }
        else if(query.all){
            dispatch(getAllGroup());
        }
    },[dispatch, location.search]);


    const handleFollow = (e) => {
        const info = {
            roomId: parseInt(e.target.name),
            credential: ""
        }
        dispatch(followGroup(info));
    }

    const handleFollowing = (e) => {
        dispatch(unFollowGroup(parseInt(e.target.name)));
    }

    useEffect(() => {
        if(response === ""){
            const query = qs.parse(location.search, {
                ignoreQueryPrefix: true,
            });
            if(query.tag){
                dispatch(getGroupByTag(query.tag));
            }
            else if(query.title){
                dispatch(getGroupByTitle(query.title));
            }
            else if(query.all){
                dispatch(getAllGroup());
            }
            dispatch(initialize());
        }
    },[dispatch, response, location.search])
    return (
        <GroupSearch 
            search_group_list={search_group_list}
            query={query}
            handleFollow={handleFollow}
            handleFollowing={handleFollowing}
        />
    );
};

export default withRouter(GroupSearchContainer);