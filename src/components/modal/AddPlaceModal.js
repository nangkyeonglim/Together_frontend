import React from 'react';
import styled from 'styled-components';

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
    
    .form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        .form-group{
            margin: 0 0.5rem;
            margin-bottom: 2rem;
            display: flex;
            flex-direction: column;
            p{
                font-size: 0.7rem;
                color: gray;    
            }
            .comment-profile{
                display: flex;
                align-items: center;
                font-size: 0.9rem;
                img{
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 50%;
                    margin-right: 0.4rem;
                }
            }
            .input-block{
                display: flex;
                flex-direction: column;
                width: 100%;
                margin-top: 0.5rem;
                position: relative;
               strong{
                   font-size: 0.8rem;
                   margin-bottom: 0.2rem;
               }
                input {
                    height: 2rem;
                    width: 300px;
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

                .select {
                    position: relative;
                    overflow: hidden;
                    display: block;
                    margin: auto;
                    width: 300px;
                    height: 100%;
                    border-bottom: 0px;
                    border-radius: 3px;
                    font-size: 12px;
                    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);                    
                    >i.toggle {
                        position: absolute;
                        z-index: 4;
                        right: 1.5em;
                        top: 1.6em;
                        color: #ccc
                    }
                    .title,
                    .placeholder {
                        position: relative;
                        display: block;
                        width: 100%;
                        height: 100%;
                        padding: 1.5em 2em;
                        background: rgba(255, 255, 255, 1);
                        border-top: 1px solid rgba(0, 0, 0, .05);
                        cursor: pointer;
                    }
                    &>input {
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        z-index: 1;
                        width: 100%;
                        height: 100%;
                        display: block;
                        opacity: 0;
                        cursor: pointer;
                        &:checked {
                            ~i.toggle.icon-arrow-down {
                                display: none;
                            }
                            ~i.toggle.icon-arrow-up {
                                display: block;
                            }
                            div.options label.option .title {
                                display: none!important;
                            }
                        }
                        &:not(:checked) {
                            z-index: 4;
                            ~label.option {
                                >span.title {
                                    display: none;
                                }
                            }
                            ~i.toggle.icon-arrow-up {
                                display: none;
                            }
                            ~i.toggle.icon-arrow-down {
                                display: block;
                            }
                        }
                        &:disabled {
                            cursor: no-drop;
                        }
                    }
                    &>span.placeholder {
                        position: relative;
                        z-index: 0;
                        display: inline-block;
                        width: 100%;
                        color: #999;
                        border-top: 0px;
                    }
                    label.option {
                        display: block;
                        overflow: hidden;
                        z-index: 1;
                        width: 100%;
                        transition: all 1s ease-out;
                        span.title {
                            position: relative;
                            z-index: 2;
                            transition: background .3s ease-out;
                            img.icon {
                                padding-right: 8px;
                                color: rgba(146, 168, 209, 1);
                                width: 1rem;
                                height: 1rem;
                            }
                            &:hover {
                                color: black;
                                background: #dfe6e9;
                                box-shadow: inset 0px 1px 0px rgba(0, 0, 0, .1);
                            }
                        }
                        input {
                            display: none;
                            &:checked~span.title {
                                position: absolute;
                                display: block;
                                z-index: 3;
                                top: 0px;
                                font-size: 12px;
                                background: #fff;
                                border-top: 0px;
                                box-shadow: none;
                                color: inherit;
                                width: 100%;
                            }
                        }
                    }
                } 
            }
        }
    }
            .button-block{
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

const AddPlaceModal = ({add_place, handleChange, error, handleSubmit, my_group, user_info}) => {
    return (
       <ContentBlock>
        <h1>맛집 추가</h1>
        <div className="form">
            <div className="form-group">
                <div className="input-block">
                    <strong>그룹</strong>
                    <div className="select animated zoomIn">
                        <input type="radio" name="roomId" onChange={handleChange} value=""/>
                        <i className="toggle icon icon-arrow-down"></i>
                        <i className="toggle icon icon-arrow-up"></i>
                        <span className="placeholder">어떤 그룹에 추가하실 건가요?</span>
                        {my_group && my_group.map((group) => {
                            return (
                                <label key={group.room.id} className="option" id={group.room.id}>
                                    <input type="radio" name="roomId" onChange={handleChange} value={group.room.id}/>
                                    <span className="title animated fadeIn">
                                        {group.room.title}</span>
                                </label>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="comment-profile">
                    <img src={user_info.profileImage} alt="user" />
                    {user_info.name}
                </div>
                <div className="input-block">
                    <input  type="text" autoComplete="off" name="comment" placeholder="맛집에 대한 Comment를 달아주세요!" onChange={handleChange} value={add_place.comment} />
                    <span className="focus-border"></span>
                </div>
            </div>
        </div>
        {error ?
            <p className="error_block">{error.msg}</p> 
            :
            <p className="error_block">&nbsp;</p>
        }
        <div className="button-block">
                <button onClick={handleSubmit}>추가</button>
        </div>
    </ContentBlock>
    );
};

export default AddPlaceModal;