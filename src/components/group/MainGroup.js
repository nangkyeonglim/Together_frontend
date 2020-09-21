import React from 'react';
import styled from 'styled-components';

const MainGroupBlock = styled.div`
    display: flex;  
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    .page_title{
        margin: 5rem 0;
        font-size: 1.2rem;
    }
`;

const GroupWrapper = styled.div`
    width: 100%;
    background: #F8F8FA;
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
    cursor: pointer;
    .group__image{
        width: 8rem;
        height: 8rem;
        overflow: hidden;
        flex-shrink: 0;
        img {
            width: auto;
            height: 100%;
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
                width: 1.5rem;
                border-radius: 50%;
            }
        }
    }
    .group__follow{
        button {
            background: #34558b;
            color: white;
            border: none;
            outline: none;
            border-radius: 2px;
            padding: 0.5rem 1rem;
            cursor: pointer;
            margin: 1rem 1rem 0 0;
        }
    }
`;

const MainGroup = ({ group_list }) => {
    return (
        <MainGroupBlock>
            <div className="page_title">
                {/* <span role="img" aria-label="sunglasses face">😎</span> */}
                로그인하여 친구들과 함께 나만의 맛집들을 공유해보세요
                <span role="img" aria-label="sunglasses face">😎</span>
            </div>
            <GroupWrapper>
                <ul>               
                    {group_list && group_list.map((group) => { 
                        return (
                            <li key={group.id}>
                                <GroupItem>
                                    <div className="group__image">
                                        <img alt="groupImage" src={group.imageUrl} />
                                    </div>
                                    <div className="group__description">
                                        <div className="group__description__title">
                                            <h1>{group.title}</h1>
                                            {/* <p>{group.content}</p> */}
                                            <p className="tag">{group.tags.map((tag)=>{
                                                return '#' + tag + ' ';
                                            })}</p>
                                        </div>
                                        <div className="group__description__creator">
                                            <img className="image" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile" />                     
                                            임낭경                  
                                        </div>
                                    </div>
                                    <div className="group__follow">
                                        <button>Join</button>
                                    </div>
                                </GroupItem>
                            </li>
                        )
                    })}
                </ul>
            </GroupWrapper>
        </MainGroupBlock>
    );
};

export default MainGroup;