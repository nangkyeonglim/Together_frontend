import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import GroupTemplate from '../components/place/GroupTemplate';
import AddGroupModalContainer from '../containers/modal/AddGroupModalContainer';

const GroupPage = () => {
    return (
        <>
            <HeaderContainer />
            <GroupTemplate />
            <AddGroupModalContainer />
        </>
    );
};

export default GroupPage;
