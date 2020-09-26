import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import GroupListTemplate from '../components/group/GroupListTemplate';
import AddGroupModalContainer from '../containers/modal/AddGroupModalContainer';

const GroupListPage = () => {
    return (
        <>
            <HeaderContainer />
            <GroupListTemplate />
            <AddGroupModalContainer />
        </>
    );
};

export default GroupListPage;