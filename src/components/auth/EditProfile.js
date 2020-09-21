import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const EditProfileBlock = styled.div`
    .page__title{
        h1{
            font-size: 1.5rem;
            margin: 1rem 0 0.5rem 0;
        }
        p{
            font-size: 0.8rem;
            margin: 0;
        }
    }
    .page__content{
        h2{
            font-size: 1.2rem;
            align-self: flex-start;
        }
        .page__content__profileImage{
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                width:7rem;
                border-radius: 50%;
            }
            input {
                display:none;
            }
            label {
                width: 5rem;
                height: 1rem;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 1rem 0;
                padding: 0.5rem 1rem;
                border-radius: 4px;
                background: #34558b;
                color: white;
                transition: all .5s;
                box-shadow: 0 0 2px 0px gray;
                font-size: 0.9rem;
            }
            label:hover {
                cursor: pointer;
                transform: scale(1.1);
            }
        }
        .page__content__name{
            .input-block{
                display: flex;
                flex-direction: column;
                width: 13rem;
                margin-bottom: 1rem;
                position: relative;
                input {
                    height: 2rem;
                    border: none;
                    border-bottom: 1px solid #ccc;
                    outline: none;
                    color: #435a6b;
                }
                input::placeholder{
                    font-style: italic;
                }
                input ~ .focus-border{
                    position: absolute; 
                    bottom: 0; 
                    left: 0; 
                    width: 100%; 
                    height: 2px; 
                    z-index: 99;
                }
                input ~ .focus-border:before, 
                input ~ .focus-border:after{
                    content: ""; 
                    position: absolute; 
                    bottom: 0; 
                    left: 0; 
                    width: 0; 
                    height: 100%; 
                    background-color: #34558b; 
                    transition: 0.4s;
                }
                input ~ .focus-border:after{
                    left: auto; 
                    right: 0;
                }
                input:focus ~ .focus-border:before, 
                input:focus ~ .focus-border:after{
                    width: 50%;
                    transition: 0.4s;
                }
            }
        }
    }
    .button-block{
        display: flex;
        align-items: center;
        justify-content: center;
        button{
            cursor: pointer;
            padding: 0.5rem 2rem;
            border-radius: 4px;
        }
        .cancel-button{
            background: white; 
            color: #34558b;
            border: 1px solid #34558b;
        }
        .submit-button{
            background: #34558b;
            color: white;
            border: 1px solid #34558b;
        }
        & > * + * {
            margin-left: 1rem;
        }
    }
`;


const EditProfile = ({ user_info, handleChange, handleImageChange }) => {
    return (
        <EditProfileBlock>
            <div className="page__title">
                <h1>프로필 수정</h1>
                <p>다른 회원들에게 보여지는 정보입니다.</p>
            </div>
            {user_info && 
                <div className="page__content">
                    <div className="page__content__profileImage">
                        <h2>사진</h2>
                        <img src={user_info.profileImage} alt="profile" />
                        <label htmlFor="file-upload">
                            <span>변경</span>   
                            <input id="file-upload" type="file" title=" " onChange={handleImageChange} /> 
                        </label>
                    </div>
                    <div className="page__content__name">
                        <h2>이름</h2>
                        <div className="input-block">
                            <input type="text" autoComplete="off" name="name" value={user_info.name} onChange={handleChange}/>
                            <span className="focus-border"></span>
                        </div>
                    </div>
                </div>
            }
            <div className="button-block">
                <Link to="/">
                    <button className="cancel-button">취소</button>
                </Link>
                <button className="submit-button">수정</button>
            </div>
            
        </EditProfileBlock>
    );
};

export default EditProfile;