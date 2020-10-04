import React, { useEffect } from 'react';
import Group from '../../components/place/Group';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlace, deletePlaceFromGroup, initializePlaceResponse } from '../../modules/place';
import { getGroupByGroupId, getAllGroupUser, setEditGroupField, initializeAddGroupField, initializeCurrentGroup } from '../../modules/group';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../modules/modal';
import { followGroup, unFollowGroup, initialize } from '../../modules/search';

const GroupContainer = ({ match }) => {
    const dispatch = useDispatch();
    const { place_by_group, current_group, current_group_member, user_info, response, response_place } = useSelector(({ place, group, auth, search }) => ({
        place_by_group: place.place_by_group,
        current_group: group.current_group,
        current_group_member: group.current_group_member,
        user_info: auth.user_info,
        response: search.response,
        response_place: place.response,
    }));

    useEffect(() => {
        dispatch(getAllPlace(match.params.groupId));
        dispatch(getGroupByGroupId(match.params.groupId));
        dispatch(getAllGroupUser(match.params.groupId));
    },[dispatch, match]);

    useEffect(() => {
        return () => {
            dispatch(initializeAddGroupField());
            dispatch(initializeCurrentGroup());
        }
    },[dispatch]);

    const handleEditModal = () => {
        const group = {
            title: current_group.title,
            content: current_group.content,
            imageUrl: current_group.imageUrl,
            tags: current_group.tags,
        }
        dispatch(setEditGroupField(group));
        dispatch(openModal('add_group_modal'));

    }

    const handleFollow = (e) => {
        const info = {
            roomId: parseInt(e.target.name),
            credential: ""
        }
        dispatch(followGroup(info));
    }
    const handleFollowing = (e) => {
        dispatch(unFollowGroup(parseInt(e.target.id)));
    }
    
    useEffect(() => {
        if(response === ""){
            dispatch(getGroupByGroupId(match.params.groupId));
            dispatch(initialize());
        }
    },[dispatch, response, match])

    useEffect(() => {
        if(response_place.delete_place === ""){
            dispatch(getAllPlace(match.params.groupId));
            dispatch(initializePlaceResponse());
        }
    },[dispatch, response_place, match])


    const handleDelete = (e) => {
        dispatch(deletePlaceFromGroup(parseInt(e.target.parentNode.id)))
    }

    return (
        <Group 
            place_by_group={place_by_group}
            current_group={current_group}
            current_group_member={current_group_member}
            user_info={user_info}
            handleEditModal={handleEditModal}
            handleFollow={handleFollow}
            handleFollowing={handleFollowing}
            handleDelete={handleDelete}
        />
    );
};

export default withRouter(GroupContainer);