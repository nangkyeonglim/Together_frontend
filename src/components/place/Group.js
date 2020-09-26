import React from 'react';
import styled from 'styled-components';
import { FaHeart } from "react-icons/fa";
import { BiPlusCircle } from "react-icons/bi";
import { RiEdit2Fill } from "react-icons/ri";

const GroupBlock = styled.div`
    display: flex;  
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #F2F3F3;

`;

const ResponsiveBlock = styled.div`
        max-width: 700px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* background :gray; */
        border-radius: 10px;
        margin: auto;
        width:100%;
       
    .page_title{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    
        border-radius: 10px;
        .group-title{
            flex: 1;
            height: 100%;
            overflow: hidden;
            flex-shrink: 0;
            position: relative;
            display: flex;
        }
        .group-description{
            flex: 1;
            height: 100%;
            background: white;
            border-radius: 10px;
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
                    img{
                        width: 3rem;
                        height: 3rem;
                        border-radius: 50%;
                    }
                    figcaption{
                        font-size: 0.8rem;
                    }
                }
            }
        }
        @media (max-width: 767px){
            flex-direction: column;
            .group-title{
                flex: 1 0 0;
                width: 100%;
            }
            .group-description{
                flex: 1 0 0;
                width: 100%;
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
    background: url(${props => props.background});
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
    button{
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
    button:hover{
        transform: scale(1.1);
    }
`;

const PlaceWrapper = styled.div`
    ul{
        padding: 0;
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
    .place-image{
        width: 15rem;
        height: 15rem;
        overflow: hidden;
        img{
            height: 100%;
            width: auto;
            border-radius: 10px;
        }
    }
    .place-description{
        margin-left: 1rem;
        p{
            display:flex;
            align-items: center;
            img{
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            margin-right: 0.3rem;
            }
        }   
        
    }
    .favorite-button {
        position: absolute;
        top: 0;
        right: 0;
        margin: 1rem;
    }
    .favorite-button > * {
        font-size: 1.5rem;
        cursor: pointer;
        color: #eb4d4b;
    }
    

`;

const Group = ({ place_by_group, current_group, current_group_member }) => {
    return (
        <GroupBlock>
            {current_group && current_group_member &&
            <ResponsiveBlock>
                <div className="page_title" >
                    <div className="group-title">
                        <BackgroundBlock background={current_group.imageUrl}>
                            <h1>{current_group.title}</h1>
                            <button>Follow</button>
                        </BackgroundBlock>
                    </div>
                    <div className="group-description">
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
                                    <figure className="member">
                                        <img src={mem.profileImage} alt="user" />
                                        <figcaption>{mem.name}</figcaption> 
                                    </figure>
                                )})
                            }
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="place_adder">
                    <BiPlusCircle />
                    <RiEdit2Fill />
                </div> */}
                <PlaceWrapper>
                    <ul>
                        {place_by_group && place_by_group.map(place => {
                            return (
                                <>
                                <PlaceBlock key={place.roomPlaceId}>
                                    <div className="place-image">
                                        <img  alt={place.place.name} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz1_KA3Go2zkXya6txwIAoTw9D26VK6-_99g&usqp=CAU"/>
                                    </div>
                                    <div className="place-description">
                                        <h3>{place.place.name}</h3>
                                        <strong>{place.place.location}</strong>
                                        <p>여려분 여기 꼭 가야됨ㅋㅋㅋㅋ 안가면 벌금 만원 씩<span role="img" aria-label="trick">😜</span></p>
                                        <p><img src="https://together-user-thumbnail.s3.ap-northeast-2.amazonaws.com/static/4" alt="user"/>임낭경 </p>
                                    </div>
                                    <div className="favorite-button"><FaHeart/></div>
                                </PlaceBlock>
                                
                                <PlaceBlock key={place.roomPlaceId}>
                                <div className="place-image">
                                    <img  alt={place.place.name} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQi24vUtPy52IrKVAI4bei1b4hnL42tXvI57w&usqp=CAU"/>
                                </div>
                                <div className="place-description">
                                    <h3>리애</h3>
                                    <strong>서울특별시 강남구 개포동 개포로 410 </strong>
                                    <p>리애는 찐으로 맛있음 낭쿙이 인정하는 몇 안되는 돈까스<span role="img" aria-label="trick">😇</span></p>
                                    <p><img src="https://together-user-thumbnail.s3.ap-northeast-2.amazonaws.com/static/4" alt="user"/>임낭경 </p>
                                </div>
                                <div className="favorite-button"><FaHeart/></div>
                            </PlaceBlock>
                            </>
                            );
                        })}
                    </ul>
                 </PlaceWrapper>
            </ResponsiveBlock>
            }
        </GroupBlock>
    );
};

export default Group;