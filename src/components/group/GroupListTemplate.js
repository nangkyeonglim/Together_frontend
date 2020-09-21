import React from 'react';
import styled from 'styled-components';
import GroupListContainer from '../../containers/group/GroupListContainer';

const GroupListTemplateBlock = styled.main`
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: center;
`;


const GroupListTemplate = () => {
    return (
        <GroupListTemplateBlock>
            <GroupListContainer />
        </GroupListTemplateBlock>
    );
};

export default GroupListTemplate;