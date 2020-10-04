import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import logo from '../../lib/images/together_logo.png';
import m_logo from '../../lib/images/together_m_logo.png';
import { FaBars } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { withRouter, Link } from 'react-router-dom';
import LoginModalContainer from '../../containers/modal/LoginModalContainer';

const HeaderBlock = styled.header`
    z-index: 100;
    display: flex;
    height: 3.3rem;
    box-sizing: border-box;
    align-items: center;
    position: fixed;
    width: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    background: #FFFFFF;
    .logo{
        background: #FFFFFF;
        height: 100%;
        display: flex;
        align-items: center;
        margin-right: 3rem;
        a{
            display: flex;
            align-items: center;
            color: #f5f6fa;
        }
        img {
            width: 5.7rem;
            cursor: pointer;
        }
        .m_logo{
            width: 2rem;
            margin: 0 0 0 2rem;
        }
        @media (max-width: 1023px){
            display: none;
        }
    }
    .logo-responsive{
        display: none;
        @media (max-width: 1023px){
            display: block;
            background: #FFFFFF;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            /* width: 70px; */
            font-size: 1.5rem;
            font-weight: bold;
            margin-right: 2rem;
        }
        @media(max-width: 767px){
            display: none;
        }
        a{
            display: flex;
            align-items: center;
        }
        img {
            width: 5rem;
            cursor: pointer;
        }
        .m_logo{
            width: 1.7rem;
            margin: 0 0 0 2rem;
        }
    }
    .logo-responsive-mobile{
        display: none;
        @media (max-width: 767px){
            display: block;
            background: #FFFFFF;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
            margin-right: 1rem;
        }
        a{
            display: flex;
            align-items: center;
        }
        img {
            width: 5rem;
            cursor: pointer;
        }
        .m_logo{
            width: 1.7rem;
            margin: 0 0 0 1rem;
        }
    }
    .header{
        background: #FFFFFF;
        color: #747999;
        height: 100%;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        .left{
            flex-grow: 1;
            display: flex;
            align-items: center;
            .search-category{
                display: flex;
                padding: 0;
                align-items: center;
                justify-content: center;
                margin: 0 0.5rem 0 0;
            }
            .search{
                display: flex;
                align-items: center;
                background: #EFEFEF;
                border-radius: 5px;
                padding: 0 0 0 1rem;
                width: 80%;
                input{
                    border: none;
                    outline: none;
                    background: #EFEFEF;
                    border-radius: 5px;
                    padding: 0.3rem 2rem 0.3rem 0.5rem;
                    width: 100%;
                    box-sizing: border-box;
                }
                form{
                    display: flex;
                    align-items:center;
                    width: 100%;
                }
            }
        }
        .right, .right-responsive{
            span{
                font-size: 0.9rem;
                margin-right: 1rem;
                color: #2c3e50;
            }
            img{
                width: 2.1rem;
                height: 2.1rem;
                object-fit: cover;
                object-position: 50% 50%;
                border-radius: 50%;
                cursor: pointer;
                margin-right: 0.5rem;
            }
            .tooltip {
                position: relative;
                display: flex;
                align-items: center;
            }

            .tooltip .tooltip-text {
                visibility: hidden;
                font-size: 0.8rem;
                width: 100px;
                background-color: gray;
                color: #fff;
                text-align: center;
                border-radius: 6px;
                padding: 5px 0;
                position: absolute;
                z-index: 1;
                top: 125%;
                right: 50%;
                margin-right: -50px;
                opacity: 0;
                transition: opacity 0.3s;
            }

            .tooltip .tooltip-text::after {
                content: "";
                position: absolute;
                bottom: 100%;
                right: 50%;
                margin-right: -5px;
                border-width: 5px;
                border-style: solid;
                border-color:  transparent transparent gray transparent;
            }

            .tooltip:hover .tooltip-text {
                visibility: visible;
                opacity: 1;
            }
        }
        .right{
            margin-right: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            button{
                color: black;
                margin: 0rem 0.5rem;
                font-size: 0.85rem;
                font-weight: bold;
                padding: 0.3rem 0.5rem;
                border-radius: 4px;
                border: 1px solid  #2c3e50;
                cursor: pointer;
                background: #FFFFFF;
                outline: 0;
                
                :hover {
                    background: #2c3e50;
                    color: white;
                    transition: 0.4s;
                }
            }
            @media (max-width: 1023px){
                display: none;
            }

        }
        .right-responsive {
            display: none;
            @media (max-width: 1023px){
                display: flex;
                margin-right: 1rem;
                justify-content: center;
                align-items: center;   
                span{
                    margin-right: 0;
                }
                & > * {
                    cursor: pointer;
                }
                button{
                    color: black;
                    margin: 0rem 1rem;
                    font-size: 0.85rem;
                    font-weight: bold;
                    padding: 0.3rem 0.5rem;
                    border-radius: 4px;
                    border: 1px solid  #2c3e50;
                    background: #FFFFFF;
                    :hover {
                        background: #2c3e50;
                        color: white;
                        transition: 0.4s;
                    }
                }
            }
            @media (max-width: 530px){
                display: none;
    
            }
        }
        .right-responsive-mobile{
            display: none;
            @media (max-width: 530px){
                display: flex;
                margin-right: 2rem;
                align-items: center;
                color: black;
                font-weight: 600;
            }
            & > * {
                cursor: pointer;
            }
        }
    }
`;

const StyledList = styled.li`
    list-style: none;
    float: left; 
    cursor: pointer;
    margin-left:0.5rem;
    display: flex;
    align-items: center;
    padding: 0.3rem 0;
    flex-shrink: 0;
    span {
        font-size: 0.9rem;
        margin: 0;
    }
    ${props =>
        props.active &&
        css`
            color: #2481FF;  
        `
    }
    &:hover{
        color: #2481FF;  
    }
`;

const Spacer = styled.div`
    height: 3.3rem;
`;

const Header = ({ handleClick, handleOpenModal, handleLogout, location , user_info, handleChange, handleBlur, handleSubmitPlace, handleSubmitGroup }) => {
    // const page = location.pathname;
    const [type, setType] = useState('search-group');

    const changeType = useCallback(e => {
        setType(e.target.id);
    }, []);

    return (
        <>
            <LoginModalContainer />
            <HeaderBlock>
            <div className="logo">
                <Link to="/">
                    <img className="m_logo" src={m_logo} alt="together"/>
                    <img src={logo} alt="together" />
                </Link>
            </div>
            <div className="logo-responsive">
                <Link to="/">
                    <img className="m_logo" src={m_logo} alt="together" />
                    <img src={logo} alt="together" />
                </Link>
            </div>
            <div className="logo-responsive-mobile">
                <Link to="/">
                    <img className="m_logo" src={m_logo} alt="together" />
                </Link>
            </div>
            <div className="header">
                <div className="left">
                    <div className="search">
                        <MdSearch />
                        <ul className="search-category">
                            <StyledList active={type !== 'search-place'}><span onClick={changeType} id="search-group">그룹</span></StyledList>
                            <StyledList active={type === 'search-place'}><span onClick={changeType} id="search-place">맛집</span></StyledList>
                        </ul>
                       
                            {type==="search-group"?
                                <form onSubmit={handleSubmitGroup}>
                                    <input type="text" placeholder="#태그, 그룹명 검색" onChange={handleChange} onBlur={handleBlur} />
                                </form>
                                :
                                <form onSubmit={handleSubmitPlace}>
                                    <input type="text" placeholder=" #카테고리, 맛집 이름 검색" onChange={handleChange} onBlur={handleBlur} />
                                </form>
                            }
                            
                        
                    </div>
                   
                </div>
                { 
                    user_info? 
                    <>
                        <div className="right">
                            <Link to='/profile'>
                                <div className="tooltip">
                                    <img src={user_info.profileImage} alt="profile" />
                                    <span className="tooltip-text">프로필 수정</span>
                                </div>
                            </Link>
                            <span>{user_info.name}</span>
                            <button onClick={handleLogout}>로그아웃</button>
                        </div>
                        <div className="right-responsive">
                            <div className="tooltip">
                                <Link to='/profile'>
                                    <img src={user_info.profileImage} alt="profile" />
                                    <span className="tooltip-text">프로필 수정</span>
                                </Link>
                            </div>
                            <span>{user_info.name}</span>
                            <button onClick={handleLogout}>로그아웃</button>
                            {/* <FaBars onClick={handleClick} />     */}
                        </div>
                    </>
                :
                    <>
                        <div className="right">
                            <button onClick={handleOpenModal}>로그인</button>
                        </div>
                        <div className="right-responsive">
                            <button onClick={handleOpenModal}>로그인</button>
                            {/* <FaBars onClick={handleClick} /> */}
                        </div>
                    </>
                }
                
                <div className="right-responsive-mobile">
                    <FaBars onClick={handleClick}/>
                </div>
            </div>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default withRouter(Header);