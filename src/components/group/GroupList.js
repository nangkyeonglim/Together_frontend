import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GroupListBlock = styled.div`
    display: flex;  
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    .page_title{
        margin: 5rem 0;
        font-size: 1.2rem;
    }
    .group_adder{
        width: 100%;
        background: #F8F8FA;
        display: flex;
        justify-content: center;
        .button-block{
            max-width: 1080px;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            button{
                color: #34558b;
                background: #fff;
                border: 2px solid #34558b;
                border-radius: 4px;
                font-size: 1rem;
                padding: 0.5rem 1rem;
                cursor: pointer;
                margin: 1rem 1rem 0 0;
                font-weight: bold;
            }
            button:hover{
                color: #fff;
                background: #34558b;
                border: 2px solid #34558b;
            }
            @media (max-width: 1023px){
                    max-width: 700px;
            }
            @media (max-width: 767px){
                    max-width: 400px;
             }
        }
    }
`;
const GroupWrapper = styled.div`
    width: 100%;
    background: #F8F8FA;
    ul{
        padding: 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 1rem;
        max-width: 1080px;
        margin: auto;
       
        li{
            list-style: none;
            margin: 1rem 0.5rem;   
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
           
        }
    }
    @media (max-width: 1023px){
        ul {
            grid-template-columns: repeat(2, 1fr);
            max-width: 700px;
        }
    }
    @media (max-width: 767px){
        ul {
            grid-template-columns: repeat(1, 1fr);
            max-width: 400px;
        }
    }
   
`;

const StyledLink = styled(Link)`
    text-decoration: none !important;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none !important; 
    }
  
`;

const GroupItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    .group__image{
        width: 100%;
        height: 9rem;
        overflow: hidden;
        flex-shrink: 0;
        position: relative;
        display: flex;
    }
    .group__description{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0.5rem;
        & > * {
            flex-grow: 1;
        }
        .group__description__title{
            p{
                font-size: 1rem;
                margin: 0;
            }
            .tag{
                color: gray;
                padding: 0.5rem 0;
            }
        }
        .group__description__creator{
            display: flex;
            align-items: center;
            font-size: 0.85rem; 
            margin-bottom: 0.5rem;
            img {
                margin-right: 0.5rem;
                width: 1.5rem;
                border-radius: 50%;
            }
        }
    }
`;

const BackgroundBlock = styled.div`
    background: url(${props => props.background});
    width: 100%;
    height: 9rem;
    position: absolute;
    background-size: cover;
    display: flex;
    border-radius: 10px 10px 0 0;
    &::before{
        background-color: rgba(0, 0, 0, 0.37);
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        width: 100%;
        border-radius: 10px 10px 0 0;
    }
      
    div{
        font-size: 1.3rem;
        font-weight: bold;
        position: absolute;
        color: white;
        align-self: center;
        display: inline-block;
        margin-left: 1rem;
    }   
`;


const GroupList = ({ my_group, handleAddGroup }) => {
    return (
        <GroupListBlock>
            <div className="page_title">
                My 그룹
                <span role="img" aria-label="sunglasses face">😛</span>
            </div>
            <div className="group_adder">
                <div className="button-block">
                    <button onClick={handleAddGroup}>+ 그룹 생성</button>
                </div>
            </div>
            <GroupWrapper>
                <ul>               
                    {my_group && my_group.map((group) => { 
                        return (
                            <li key={group.room.id}>
                                <StyledLink to={`/group/${group.room.id}`} >
                                    <GroupItem>
                                        <div className="group__image">
                                            <BackgroundBlock background={group.room.imageUrl}>
                                                <div>{group.room.title}</div>
                                            </BackgroundBlock>
                                        </div>
                                        <div className="group__description">
                                            <div className="group__description__title">
                                                <p className="tag">
                                                    {group.room.tags.map(tag => {
                                                        return '#' + tag + ' ';
                                                    })
                                                    }
                                                </p>
                                            </div>
                                            <div className="group__description__creator">
                                                <img className="image" src={group.master.profileImage} alt="profile" />                     
                                                <span>{group.master.name}</span>   
                                            </div>
                                        </div>
                                    </GroupItem>
                                </StyledLink>
                            </li>
                        )
                    })}
                </ul>
            </GroupWrapper>
        </GroupListBlock>
    );
};

export default GroupList;