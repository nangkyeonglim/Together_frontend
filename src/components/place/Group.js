import React from 'react';
import styled from 'styled-components';
import { FaHeart } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";

const GroupBlock = styled.div`
    display: flex;  
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: #F2F3F3;

`;

const ResponsiveBlock = styled.div`
        max-width: 700px;
        display: flex;
        flex-direction: column;
        
        border-radius: 10px;
        margin: 0 auto;
        width:100%;
        height: 100%;
        .tooltip {
            position: absolute;
            display: flex;
            align-items: center;
            top: 0;
            right: 0;
            margin: 1rem;
        }

        .tooltip .tooltip-text {
            visibility: hidden;
            font-size: 0.8rem;
            width: 80px;
            background-color: gray;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px 0;
            position: absolute;
            z-index: 1;
            top: 125%;
            right: 50%;
            margin-right: -40px;
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
       
        .page_title{
            display: flex;
            flex-direction: row;
            /* width: 100%; */
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
            border-radius: 10px;
            flex-wrap: wrap;
            .group-title{
                flex: 1;
                height: 100%;
                min-width: 350px;
                overflow: hidden;
                flex-shrink: 0;
                position: relative;
                display: flex;
            }
            .group-description{
                flex: 1;
                height: 100%;
                background: white;
                border-radius: 0 10px 10px 0;
                position: relative;
            }
            .edit-button > * {
                font-size: 1.5rem;
                cursor: pointer;
                color: #7f8c8d;
            }
            .group-description-content{
                margin-left: 1rem;
            }
            .group-description-tag{
                color: #34558b;
                margin-left: 1rem;
            }
            .member-block{
                margin-left: 1rem;
                margin-bottom :1rem;
                h2{
                    font-size: 1rem;
                    margin-bottom: 0.2rem;
                }
                .members{
                    display: flex;
                    flex-direction: row;
                }
                .member{
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin-block-start: 0;
                    margin-block-end: 0;
                    margin-inline-start: 0;
                    margin-inline-end: 0;
                    margin-right:0.5rem;
                    img{
                        width: 3rem;
                        height: 3rem;
                        object-fit: cover;
                        object-position: 50% 50%;
                        border-radius: 50%;
                    }
                    figcaption{
                        font-size: 0.8rem;
                    }
                }
            }
            @media (max-width: 767px){
                /* flex-direction: column-reverse; */
                .group-title{
                }
                .group-description{
                    flex: 1;
                    width: 100%;
                    height: auto;
                    background: white;
                    border-radius: 0 10px 10px 0;
                    position: relative;
                }
            }
        }
       
        .place_adder{
            padding: 1rem;
            display: flex;
            justify-content: flex-end;
            svg {
                color: #34558b;
                cursor: pointer;
                font-size: 1.5rem;
                margin-left: 0.7rem;
            }
        }
        
    @media (max-width: 1023px){
        max-width: 700px;
    }
    @media (max-width: 767px){
        max-width: 400px;
    }
    img{
        /* max-width: 8rem; */
    }
`;
const BackgroundBlock = styled.div`
    background:  ${props => `url(${props.background})`};    
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
    display: flex;
    border-radius: 10px 0 0 10px;
    &::before{
        background-color: rgba(0, 0, 0, 0.37);
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        width: 100%;
        border-radius: 10px 0 0 10px;
    }
      
    h1{
        font-size: 1.3rem;
        font-weight: bold;
        position: absolute;
        color: white;
        align-self: center;
        display: inline-block;
        margin-left: 1rem;
    }   
    .follow{
        position: absolute;
        right: 0;
        bottom: 0;
        margin: 0 1rem 1rem 0;
        background: linear-gradient(to right, #FA893F,#C44383);
        color: white;
        border: none;
        font-weight: bold;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        transition: all .5s;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
        
    }
    .following{
        position: absolute;
        right: 0;
        bottom: 0;
        margin: 0 1rem 1rem 0;
        background: white;
        border: 2px solid #DE6561;
        font-weight: bold;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        transition: all .5s;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
        span{
            background: linear-gradient(to right, #FA893F,#C44383);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        
    }
    button:hover{
        transform: scale(1.1);
    }

`;

const PlaceWrapper = styled.div`

    ul{
        padding: 0;
    }
    @media(max-width: 767px){
        margin-top: 13rem;
    }
`;

const PlaceBlock = styled.li`
    list-style: none;
    display: flex;
    position: relative;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    background: white;
    border-radius: 10px;
    margin-bottom :1rem;
    .no-place-alert-block{
        text-align: center;
        width: 100%;    
        margin: 5rem 0;
        font-size: 0.9rem;
    }
    .place-image{
        width: 13rem;
        height: 13rem;
        overflow: hidden;
        img{
            height: 100%;
            width: auto;
            border-radius: 10px;
        }
    }
    .place-description{
        margin-left: 1rem;
        .place-name{
            margin-bottom: 0.5rem;
        }
        .place-location{
            font-size: 0.9rem;
            font-weight: normal;
            color: #7f8c8d;
        }
        .place-content{
            margin: 0;
            margin-top: 0.5rem;
        }
        .place-comment, .place-comment-creator{
            margin: 0;
            background: #F8F8FA;
        }
        .place-comment{
            margin-top: 0.5rem;
            padding: 0.3rem 0.5rem 0 0.5rem;
            border-radius: 4px 4px 0 0;
        }
        .place-comment-creator{
            padding: 0.3rem 0.5rem 0.3rem 0.5rem;
            border-radius:  0 0 4px 4px;
            font-size: 0.8rem;
        }
        p{
            display:flex;
            align-items: center;
            img{
            width: 1.7rem;
            height: 1.7rem;
            object-fit: cover;
            object-position: 50% 50%;
            border-radius: 50%;
            margin-right: 0.3rem;
            }
        }   
        
    }
    .favorite-button > * {
        font-size: 1.5rem;
        cursor: pointer;
        color: #eb4d4b;
    }
    @media(max-width: 767px){
        flex-direction: column;
        .place-image{
            width: 100%;
            height: 13rem;
            overflow: hidden;
            img{
                width: 100%;
                height: 13rem;
                overflow: hidden;
               
                border-radius: 10px;
            }
        }
    }

`;

const Group = ({ place_by_group, current_group, current_group_member, user_info, handleEditModal, handleFollow, handleFollowing, handleDelete }) => {
    return (
        <GroupBlock>
            {current_group && current_group_member &&
            <ResponsiveBlock>
                <div className="page_title" >
                    <div className="group-title">
                        <BackgroundBlock background={current_group.imageUrl}>
                            <h1>{current_group.title}</h1>
                            {
                                current_group && user_info && current_group.master.name !== user_info.name && !current_group.isEnrolled &&     
                                <button className="follow" name={current_group.id} onClick={handleFollow}>팔로우</button>
                            }
                            {
                                current_group && user_info && current_group.master.name !== user_info.name && current_group.isEnrolled &&     
                                <button className="following" id={current_group.id} onClick={handleFollowing}><span id={current_group.id}>팔로잉</span></button>
                            } 
                        </BackgroundBlock>  
                    </div>
                    <div className="group-description">
                        {current_group && user_info && current_group.master.name === user_info.name?
                            <div className="tooltip" onClick={handleEditModal}>
                                <div className="edit-button">
                                    <RiEdit2Fill/>
                                </div>
                                <span className="tooltip-text">그룹 편집</span>
                            </div>
                            :
                            null
                        }
                        <p className="group-description-content">{current_group.content}</p>
                        <p className="group-description-tag">
                            {current_group.tags.map(tag => {
                                return '#' + tag + ' ';
                            })}
                        </p>
                        <div className="member-block">
                            <h2>멤버</h2>
                            <div className="members">
                            {current_group_member.map(mem => {
                                return ( 
                                    <figure key={mem.name} className="member">
                                        <img src={mem.profileImage} alt="user" />
                                        <figcaption>{mem.name}</figcaption> 
                                    </figure>
                                )})
                            }
                            </div>
                        </div>
                    </div>
                </div>
                <PlaceWrapper>
                    <ul>
                        {place_by_group && Object.keys(place_by_group).length !== 0?
                            place_by_group.map(place => {
                            return (
                                <PlaceBlock key={place.roomPlaceId}>
                                    <div className="place-image">
                                        <img  alt={place.place.name} src={place.place.mainImageUrl} />
                                    </div>
                                    <div className="place-description">
                                        <h3 className="place-name">{place.place.name}</h3>
                                        <strong className="place-location">{place.place.location}</strong>
                                        <p className="place-content">{place.place.content}</p>
                                        {place.comment &&
                                            <p className="place-comment">
                                                {place.comment}
                                            </p>
                                        }
                                        <p className="place-comment-creator"><img src={place.author.profileImage} alt="user"/>{place.author.name} </p>
                                    </div>
                                    <div className="tooltip" id={place.roomPlaceId} onClick={handleDelete}>
                                        <div className="favorite-button" id={place.roomPlaceId}>
                                            <FaHeart id={place.roomPlaceId} />
                                        </div>
                                        <span id={place.roomPlaceId} className="tooltip-text">삭제</span>
                                    </div>
                                </PlaceBlock>
                              
                            );
                        })
                        :
                        <PlaceBlock>
                            <div className="no-place-alert-block">
                                등록된 맛집이 없어요<span role="img" aria-label="surprise">😮</span><br/>함께 가고 싶은 맛집을 검색하여 추가해보세요!
                            </div>
                        </PlaceBlock>
                    }
                    </ul>
                 </PlaceWrapper>
            </ResponsiveBlock>
            }
        </GroupBlock>
    );
};

export default Group;