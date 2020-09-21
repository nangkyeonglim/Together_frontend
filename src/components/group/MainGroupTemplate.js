import React from 'react';
import styled from 'styled-components';
import MainGroupContainer from '../../containers/group/MainGroupContainer';

const MainGroupTemplateBlock = styled.main`
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: center;
`;


const MainGroupTemplate = () => {
    return (
        <MainGroupTemplateBlock>
            <MainGroupContainer />
        </MainGroupTemplateBlock>
    );
};

export default MainGroupTemplate;