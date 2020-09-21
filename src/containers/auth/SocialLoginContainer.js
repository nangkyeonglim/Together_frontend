import React, { useEffect } from 'react';
import SocialLogin from '../../components/auth/SocialLogin';
import { useDispatch, useSelector } from 'react-redux';
import { socialLogin, signUp, getUserInfo, getUser } from '../../modules/auth';
import { closeModal } from '../../modules/modal';


const SocialLoginContainer = () => {
    const dispatch = useDispatch();
   
    const { login, login_error, user, sign_up } = useSelector(({ auth }) => ({
        login: auth.login,
        login_error: auth.login_error,
        sign_up: auth.sign_up,
        sign_up_error: auth.sign_up_error,
        user: auth.user, 
    }));

    //카카오에서 토큰 성공적으로 받아왔을 때
    const handleSuccess = (e) => {
        const accessToken = {
            accessToken: e.response.access_token,
            provider: 'kakao', 
        }
        console.log(e);
        dispatch(socialLogin(accessToken));
        dispatch(getUserInfo({ name: e.profile.properties.nickname, accessToken: e.response.access_token, profileImage: e.profile.kakao_account.profile.profile_image_url }));
    }

    //카카오에서 토큰 받아오는 거 실패했을 때
    const handleFailure = (e) => {
        console.log(e);
    }

    //신규회원인 경우 회원 가입 시키기
    useEffect(() => {
        if(login_error && login_error.code === -1000){
            const userInfo = {
                name: user.name,
                accessToken: user.accessToken,
                provider: 'kakao',
                profileImage: user.profileImage,
            }
            dispatch(signUp(userInfo));
        }
    },[dispatch, login_error, user]);


    //로그인 성공 시
    useEffect(() => {
        if(login){
            dispatch(closeModal('login_modal'));
            dispatch(getUser());
        }
    },[login, dispatch])

    useEffect(() => {
        if(sign_up){
            dispatch(socialLogin({ provider: 'kakao', accessToken: user.accessToken}));
        }
    },[sign_up, dispatch, user])

    return (
        <SocialLogin 
            handleSuccess={handleSuccess}
            handleFailure={handleFailure}
        />
    );
};

export default SocialLoginContainer;