import React, { useEffect } from 'react';
import MainGroup from '../../components/group/MainGroup';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../modules/modal';
import { getAllGroup } from '../../modules/group';
import { withRouter } from 'react-router-dom';


const MainGroupContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { group_list, user_info } = useSelector(({ group, auth }) => ({
        group_list: group.group_list,
        user_info: auth.user_info,
    }));

    //모든 그룹 불러오기(lazy loading 적용)
    useEffect(()=> {
        dispatch(getAllGroup());
    },[dispatch])

    const handleLogin = () => {
        dispatch(openModal('login_modal'));
    }
    useEffect(() => {
        if(user_info){
            history.push(`/@${user_info.userId}`);
        }
    })

    return (
        <MainGroup 
            group_list={group_list}
            handleLogin={handleLogin}
        />
    );
};

export default withRouter(MainGroupContainer);