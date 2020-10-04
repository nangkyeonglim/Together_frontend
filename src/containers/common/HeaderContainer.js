import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/common/Header';
// import { getNavigationState } from '../../modules/navigation';
import { openModal } from '../../modules/modal';
import { getUser, logout } from '../../modules/auth';
import { changeField, initializeList } from '../../modules/search';
// import cookie from 'react-cookies';
import { withRouter } from 'react-router-dom';


const HeaderContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { user_info, user_info_error, search } = useSelector(({ auth, search }) => ({
        user_info: auth.user_info,
        user_info_error: auth.user_info_error,
        search: search.search,
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
        history.push('/');
    }

    const handleChange = (e) => {
        dispatch(changeField({ value: e.target.value }));
    }
    const handleBlur = (e) => {
        e.target.value='';
        dispatch(changeField({ value: null }));
    }
    const handleSubmitGroup = (e) => {
        e.preventDefault();
        dispatch(initializeList());
        if(search === null || search=== ""){
            history.push(`/search/group?all=true`);
        }
        else{
            if (search.indexOf('#') !== -1){
                let tag = search.replace('#','');
                history.push(`/search/group?tag=${tag}`);
            }
            else{
                history.push(`/search/group?title=${search}`);
            }
        }
    }

    //맛집검색
    const handleSubmitPlace = (e) => {
        e.preventDefault();
        if (search.indexOf('#') !== -1){
            let category = search.replace('#','');
            history.push(`/search/place?category=${category}`);
        }
        else{
            history.push(`/search/place?placeName=${search}`);
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
            handleSubmitPlace={handleSubmitPlace}
            handleSubmitGroup={handleSubmitGroup}
        />
    );
};

export default withRouter(HeaderContainer);