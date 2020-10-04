import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GroupSearchBlock = styled.div`
    display: flex;  
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    background: #F8F8FA;
    .page_title{
        padding: 5rem 0;
        font-size: 1.2rem;
        width: 100%;
        background: white;
        text-align :center;
    }
`;

const GroupWrapper = styled.div`
    width: 100%;
    background: #F8F8FA;
    height: 100%;
    position: relative;
    .info{
        text-align: center;
        justify-self :center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform:translate(-50%, -50%); 
    }
    ul{
        padding: 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 1rem;
        max-width: 1080px;
        margin: auto;
       
        li{
            list-style: none;
            margin: 0.5rem;   
            background: #ffffff;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
        }
    }
    @media (max-width: 767px){
        ul {
            grid-template-columns: repeat(1, 1fr);
        }
    }
   
`;

const GroupItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .group__image{
        width: 8rem;
        height: 8rem;
        overflow: hidden;
        flex-shrink: 0;
        img {
            width: 8rem;
            height: 8rem;
            object-fit: cover;
            object-position: 50% 50%;
        }
    }
    .group__description{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        & > * {
            flex-grow: 1;
        }
        .group__description__title{
            h1{
                font-size: 1.1rem;
                margin: 0 0 0.2rem 0;
                font-weight: normal;
            }
            p{
                font-size: 0.9rem;
                margin: 0;
            }
            .tag{
                color: gray;
            }
        }
        .group__description__creator{
            display: flex;
            align-items: center;
            font-size: 0.85rem; 
            img {
                margin-right: 0.5rem;
                width: 2rem;
                height: 2rem;
                object-fit: cover;
                object-position: 50% 50%;
                border-radius: 50%;
            }
        }
    }
    .group__follow{
        button {
            background: #34558b;
            color: white;
            border: 2px solid #34558b;
            outline: none;
            border-radius: 2px;
            padding: 0.4rem 0.9rem;
            cursor: pointer;
            margin: 1rem 1rem 0 0;
            font-weight: bold;
        }
        .following{
            background: white;
            color: #34558b;
            border: 2px solid #34558b;

        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none !important;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none !important; 
    }
  
`;
const GroupSearch = ({ search_group_list, query, handleFollow, handleFollowing }) => {
    return (
        <GroupSearchBlock>
            <div className="page_title">
            {
                query && query.title && 
                <span>"{query.title}"</span>
            }
            {
                query && query.tag && 
                <span>"#{query.tag}"</span>
            }
            {
                query && query.all && 
                <span>전체 그룹</span>
            }
            </div>
            <GroupWrapper>
                    {search_group_list? 
                        <ul>  
                            {search_group_list.map((group) => { 
                                return (
                                    <li key={group.id}>
                                            <GroupItem>
                                                <div className="group__image">
                                                    <StyledLink to={`/group/${group.id}`} >
                                                    <img alt="groupImage" src={group.imageUrl} />
                                                    </StyledLink>
                                                </div>
                                                <div className="group__description">
                                                    <div className="group__description__title">
                                                    <StyledLink to={`/group/${group.id}`} >
                                                        <h1>{group.title}</h1>
                                                        <p className="tag">
                                                            {group.tags.map(tag => {
                                                                return '#' + tag + ' ';
                                                            })
                                                            }
                                                        </p>
                                                        </StyledLink>
                                                    </div>
                                                    <div className="group__description__creator">
                                                        <img className="image" src={group.master.profileImage} alt="profile" />                     
                                                        {group.master.name}   
                                                    </div>
                                                </div>
                                                <div className="group__follow">
                                                    {
                                                        group.isEnrolled?
                                                        <button className="following" onClick={handleFollowing} name={group.id}>팔로잉</button>
                                                        :
                                                        <button className="follow" onClick={handleFollow} name={group.id}>팔로우</button>
                                                    }
                                                </div>
                                            </GroupItem>
                                    </li>
                                )
                            })}
                        </ul>
                    :
                    <span className="info">찾으시는 결과가 없나봐요<span role="img" aria-label="sad face">😢</span></span>
                }
            </GroupWrapper>
        </GroupSearchBlock>
    );
};

export default GroupSearch;