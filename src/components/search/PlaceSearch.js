import React from 'react';
import styled from 'styled-components';

import { FaRegHeart } from "react-icons/fa";

const PlaceSearchBlock = styled.div`
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
const PlaceWrapper = styled.div`
    position: relative;
    height: 100%;
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
        width: 70px;
        background-color: gray;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        top: 125%;
        right: 50%;
        margin-right: -35px;
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
        p{
            display:flex;
            align-items: center;
         
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
                object-fit: cover;
                object-position: 50% 50%;
                border-radius: 10px;
            }
        }
    }
`;

const ResponsiveBlock = styled.div`
        max-width: 700px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* background :gray; */
        height: 100%;
        border-radius: 10px;
        margin: 0 auto;
        width:100%;
        @media (max-width: 1023px){
        max-width: 700px;
        }
        @media (max-width: 767px){
            max-width: 400px;
        }
`;


const PlaceSearch = ({ search_place_list, query, handleHeart }) => {
    return (
        <PlaceSearchBlock>
            <div className="page_title">
            {
                query && query.placeName && 
                <span>"{query.placeName}"</span>
            }
            {
                query && query.category && 
                <span>"#{query.category}"</span>
            }
            </div>
            <ResponsiveBlock>
            <PlaceWrapper>
            {search_place_list !== null && Object.keys(search_place_list).length !== 0?
                <ul>
                    {search_place_list.map(place => {
                        return (
                            <PlaceBlock key={place.id}>
                                <div className="place-image">
                                    <img alt={place.name} src={place.mainImageUrl} />
                                </div>
                                <div className="place-description">
                                    <h3>{place.name}</h3>
                                    <strong>{place.location}</strong>
                                    <p>{place.content}</p>
                                    <p>#이영자맛집 #백종원맛집</p>
                                </div>
                                <div className="tooltip" onClick={handleHeart} id={place.id} >
                                    <div  id={place.id} className="favorite-button edit-button">
                                        <FaRegHeart  id={place.id}/>
                                    </div>
                                    <span id={place.id} className="tooltip-text">좋아요</span>
                                </div>
                            </PlaceBlock>
                        );
                    })}
                </ul>
                :
                <span className="info">
                    혹시 찾으시는 맛집이 없으신가요?
                </span>
            }
            </PlaceWrapper>
            </ResponsiveBlock>
        </PlaceSearchBlock>
    );
};

export default PlaceSearch;