import React, { useEffect } from 'react';
import GroupList from '../../components/group/GroupList';
import { useDispatch, useSelector } from 'react-redux';
import { getGroupByUserId } from '../../modules/group';
import { withRouter } from 'react-router-dom';

const GroupListContainer = ({ match }) => {
    const dispatch = useDispatch();
    const { my_group } = useSelector(({ group }) => ({
        my_group: group.my_group,
    }));

    useEffect(()=> {
        dispatch(getGroupByUserId({userId: match.params.userId}));
    },[dispatch, match])


    return (
        <GroupList />
    );
};

export default withRouter(GroupListContainer);