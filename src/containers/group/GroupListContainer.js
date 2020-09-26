import React, { useEffect } from 'react';
import GroupList from '../../components/group/GroupList';
import { useDispatch, useSelector } from 'react-redux';
import { getGroupByUserId } from '../../modules/group';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../modules/modal';

const GroupListContainer = ({ match }) => {
    const dispatch = useDispatch();
    const { my_group } = useSelector(({ group }) => ({
        my_group: group.my_group,
    }));

    useEffect(()=> {
        dispatch(getGroupByUserId(match.params.userId));
    },[dispatch, match])

    const handleAddGroup = () => {
        dispatch(openModal('add_group_modal'));
    }

    return (
        <GroupList 
            my_group={my_group}
            handleAddGroup={handleAddGroup}
        />
    );
};

export default withRouter(GroupListContainer);