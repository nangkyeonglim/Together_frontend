import React from 'react';
import styled from 'styled-components';
import GroupContainer from '../../containers/place/GroupContainer';

const GroupTemplateBlock = styled.main`
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: center;
`;

const GroupTemplate = () => {
    return (
        <GroupTemplateBlock>
            <GroupContainer />
        </GroupTemplateBlock>
    );
};

export default GroupTemplate;