import React from 'react';
import styled from 'styled-components';
import EditProfileContainer from '../../containers/auth/EditProfileContainer';

const EditProfileTemplateBlock = styled.main`
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: center;
`;


const MainGroupTemplate = () => {
    return (
        <EditProfileTemplateBlock>
            <EditProfileContainer />
        </EditProfileTemplateBlock>
    );
};

export default MainGroupTemplate;