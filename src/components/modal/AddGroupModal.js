import React from 'react';
import styled from 'styled-components';
import TagBoxContainer from '../../containers/group/TagBoxContainer';

const ContentBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    outline: none;

    h1{
        font-size: 1.1rem;
        margin: 0 0 1rem 0;
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
    .file-upload {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 17rem;
        height: 8rem;
        /* padding: 3rem 1.5rem; */
        border: 3px dashed #34558b;
        border-radius: .5rem;
        transition: background-color .25s ease-out;
        
        overflow :hidden;

        &:hover {
            background-color: #dbedff;
        }

        .file-input {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            outline: none;
            cursor: pointer;
        }
        .card-subtitle{
            text-align: center;
            font-size: 0.7rem;
        }
        img{
            width: 17rem;
            height: 8rem;
            object-fit: cover;
            object-position: 50% 50%;
        }

    }
    .form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .form-group{
            width: 100%;
            display: flex;
            flex-direction: column;
            p{
                font-size: 0.7rem;
                color: gray;    
            }
            .input-block{
                display: flex;
                flex-direction: column;
                width: 100%;
                margin-top: 0.5rem;
                position: relative;
                .password-input-block {
                    -webkit-text-security: disc;
                }
                input {
                    height: 2rem;
                    border: none;
                    border-bottom: 1px solid #ccc;
                    outline: none;
                    color: black;
                    font-weight: bold;
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
        margin-top: 0.5rem;   
        .delete-button{
            color: #e74c3c;
            background: white;
            border: 2px solid #e74c3c;
            cursor: pointer;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            font-weight: bold;
        }
        .delete-button:hover{
            background: #e74c3c;
            color:white;    
        }
        button + button {
            margin-left: 1rem;
        }
        button{
            color: white;
            background: #34558b;
            border: 1px solid #34558b;
            cursor: pointer;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            font-weight: bold;
        }
        button:hover{
            background: #214177;
        }
    }
`;

const AddGroupModal = ({ error, handleChange, add_group, handleSubmit, edit, handleDelete }) => {
    return (
        <ContentBlock>
            {edit?
                <h1>그룹 편집</h1>
                :
                <h1>그룹 생성</h1>
            }
            <div className="form">
                <div className="form-group">
                    <div className="file-upload">
                        <input className="file-input" type="file" name="imageUrl" onChange={handleChange}  />
                        {add_group.imageUrl !== ""? 
                            <img className="card-subtitle" alt="groupImage" src={add_group.imageUrl} />
                            :
                            <div className="card-subtitle">대표이미지<br/>Click or Drag &amp; Drop</div> 
                        }
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-block">
                        <input type="text" autoComplete="off" name="title" placeholder="그룹명" onChange={handleChange} value={add_group.title} />
                        <span className="focus-border"></span>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-block">
                        <input type="text" autoComplete="off" name="content" placeholder="그룹 소개를 해보세요" onChange={handleChange} value={add_group.content} />
                        <span className="focus-border"></span>
                    </div>
                </div>
                <div className="form-group">
                    <TagBoxContainer />
                </div>
                <div className="form-group">
                    <div className="input-block">
                        <input className="password-input-block" type="tel" autoComplete="off" name="credential"   maxLength="4" pattern="[0-9]{4}" placeholder="비밀번호 숫자 4자리" onChange={handleChange} value={add_group.credential} />
                        <span className="focus-border"></span>
                    </div>
                    <p>*입력하지 않을 시 공개방으로 생성됩니다.</p>
                </div>
            </div>
            {error ?
                <p className="error_block">{error.msg}</p> 
                :
                <p className="error_block">&nbsp;</p>
            }
            <div className="button-block">
                {edit?
                    <>
                        <button className="delete-button" onClick={handleDelete}>그룹 삭제</button>
                        <button onClick={handleSubmit}>수정</button>
                    </>
                    :
                    <button onClick={handleSubmit}>생성</button>
                }
            </div>
        </ContentBlock>
    );
};

export default AddGroupModal;