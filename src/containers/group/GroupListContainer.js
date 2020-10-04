import React, { useEffect } from 'react';
import GroupList from '../../components/group/GroupList';
import { useDispatch, useSelector } from 'react-redux';
import { getGroupByUserId } from '../../modules/group';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../modules/modal';

const GroupListContainer = ({ match, history }) => {
    const dispatch = useDispatch();
    const { my_group, user_info } = useSelector(({ group, auth }) => ({
        my_group: group.my_group,
        user_info: auth.user_info,
    }));

    useEffect(()=> {
        dispatch(getGroupByUserId(match.params.userId));
    },[dispatch, match])

    const handleAddGroup = () => {
        dispatch(openModal('add_group_modal'));
    }

    useEffect(()=> {
        if(user_info && parseInt(match.params.userId) !== parseInt(user_info.userId)){
            history.push('/');
        }
        else if(!user_info){
            history.push('/');
        }
    },[history, match, user_info]);

    return (
        <GroupList 
            my_group={my_group}
            handleAddGroup={handleAddGroup}
        />
    );
};

export default withRouter(GroupListContainer);