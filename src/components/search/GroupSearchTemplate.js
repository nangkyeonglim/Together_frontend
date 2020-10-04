import React from 'react';
import styled from 'styled-components';
import GroupSearchContainer from '../../containers/search/GroupSearchContainer';


const GroupSearchTemplateBlock = styled.main`
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: center;
`;

const GroupSearchTemplate = () => {
    return (
         <GroupSearchTemplateBlock>
            <GroupSearchContainer />
        </GroupSearchTemplateBlock>
    );
};

export default GroupSearchTemplate;


