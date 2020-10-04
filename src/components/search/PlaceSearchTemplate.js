import React from 'react';
import styled from 'styled-components';
import PlaceSearchContainer from '../../containers/search/PlaceSearchContainer';

const PlaceSearchTemplateBlock = styled.main`
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: center;
`;

const PlaceSearchTemplate = () => {
    return (
        <PlaceSearchTemplateBlock>
            <PlaceSearchContainer />
        </PlaceSearchTemplateBlock>
    );
};

export default PlaceSearchTemplate;