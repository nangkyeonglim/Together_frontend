import React from 'react';
import styled from 'styled-components';
import logo from '../../lib/images/together_logo.png';
import m_logo from '../../lib/images/together_m_logo.png';
import SocialLoginContainer from '../../containers/auth/SocialLoginContainer';


const ContentBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    outline: none;
    img {
        padding: 0.5rem;
    }
    .logo{
        width: 9rem;
        padding-top: 0;
    }
    .m_logo{
        width: 3rem;
        padding-bottom: 1rem;
    }
    .content_block{
        padding-bottom: 1rem;  
    }
    .agree_block{
        width: 15rem;
        font-size: 0.5rem;
        text-align: center;
        padding-top: 0.5rem;  
        color: #767676;
        font-weight: 100;
    }
    p{
        margin: 0;
    }
    .error_block {
        color: #e74c3c;
        font-size: 0.7rem;
    }
`;

const LoginModal = ({sign_up_error}) => {
    return (
        <ContentBlock>
            <img className="logo" alt="together" src={logo} />
            <img className="m_logo" alt="together" src={m_logo} />
            <p className="content_block">Together에서 친구와 함께,<br/> 나만의 맛집리스트를 공유해보세요!</p>
            <SocialLoginContainer />
            {sign_up_error ?
                <p className="error_block">{sign_up_error.msg}</p> 
                :
                <p className="error_block">&nbsp;</p>
            }
            <p className="agree_block">회원가입 시 개인정보 처리방침과 이용약관과 개인정보 보호정책에 동의합니다.</p>
        </ContentBlock>
    );
};

export default LoginModal;