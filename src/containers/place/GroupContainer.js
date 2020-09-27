import React, { useEffect } from 'react';
import Group from '../../components/place/Group';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlace } from '../../modules/place';
import { getGroupByGroupId, getAllGroupUser } from '../../modules/group';
import { withRouter } from 'react-router-dom';


const GroupContainer = ({ match }) => {
    const dispatch = useDispatch();
    const { place_by_group, current_group, current_group_member, user_info } = useSelector(({ place, group, auth }) => ({
        place_by_group: place.place_by_group,
        current_group: group.current_group,
        current_group_member: group.current_group_member,
        user_info: auth.user_info,
    }));

    useEffect(() => {
        dispatch(getAllPlace(match.params.groupId));
        dispatch(getGroupByGroupId(match.params.groupId));
        dispatch(getAllGroupUser(match.params.groupId));
    },[dispatch, match])

    return (
        <Group 
            place_by_group={place_by_group}
            current_group={current_group}
            current_group_member={current_group_member}
            user_info={user_info}
        />
    );
};

export default withRouter(GroupContainer);