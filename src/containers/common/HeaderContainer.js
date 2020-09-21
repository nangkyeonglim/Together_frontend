import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/common/Header';
// import { getNavigationState } from '../../modules/navigation';
import { openModal } from '../../modules/modal';
import { getUser, logout } from '../../modules/auth';
import { changeField, getGroupByTag, getGroupByTitle } from '../../modules/group'
// import cookie from 'react-cookies';


const HeaderContainer = () => {
    const dispatch = useDispatch();
    const { user_info, user_info_error, search } = useSelector(({ auth, group }) => ({
        user_info: auth.user_info,
        user_info_error: auth.user_info_error,
        search: group.search,
    }));

    // //반응형으로 네비게이션 서랍형일 때 네비게이션 state
    // const handleClick = () =>{
    //     dispatch(getNavigationState());
    // }

    //API Key 발급 눌렀을 때 모달 open
    const handleOpenModal = () => {
        dispatch(openModal('login_modal'));
    }

    //로그아웃
    const handleLogout = () => {
        dispatch(logout());
    }

    const handleChange = (e) => {
        dispatch(changeField({ value: e.target.value }));
    }
    const handleBlur = (e) => {
        e.target.value='';
        dispatch(changeField({ value: null }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.indexOf('#') !== -1){
            let tag = search.replace('#','');
            dispatch(getGroupByTag({tag : tag}));
        }
        else{
            console.log(search);
            dispatch(getGroupByTitle({title: search}));
        }

    }

    //authToken 있는지 확인 하는 로직
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch])

    return (
        <Header 
            user_info={user_info}
            user_info_error={user_info_error}
            // handleClick={handleClick}
            handleOpenModal={handleOpenModal}
            handleLogout={handleLogout}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
        />
    );
};

export default HeaderContainer;