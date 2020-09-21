import React from 'react';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';
import KakaoLogo from '../../lib/images/kakao_login_medium_wide.png';

const StyledButton = styled.input`
    width: 15rem;
    outline: none;
`;

const SocialLogin = ({ handleSuccess, handleFailure, sign_up_error }) => {
    
    return (
        <>
            <KakaoLogin
                jsKey="6e22e574d147afc173f4301a3ae2ff5f"
                onSuccess={handleSuccess}
                onFailure={handleFailure}
                getProfile={true}
                render={props => (
                    <StyledButton
                        type="image"
                        alt="kakao로 로그인"
                        src={KakaoLogo}
                        onClick={(e) => {
                            e.preventDefault();
                            props.onClick();
                        }}
                    />
                )}
            />
        </>
    );
};

export default SocialLogin;